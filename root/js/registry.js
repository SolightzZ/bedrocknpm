const BASE_URL = "https://registry.npmjs.org/"
const NAMESPACE = "@minecraft"

const moduleNames = [
	"server",
	"server-ui",
	"debug-utilities",
	"server-gametest",
	"server-editor",
	"server-admin",
	"server-net",
	"vanilla-data",
	"common"
]

const STABLE_REG = /^(\d+\.){2}\d+$/gy
const STABLE_BETA_REG = /^(\d+\.){2}\d+.*stable$/gy
const PREVIEW_REG = /^(\d+\.){2}\d+-rc.*preview/gy
const PREVIEW_BETA_REG = /^(\d+\.){2}\d+-beta.*preview/gy

const VERSION_REGS = [ STABLE_REG, STABLE_BETA_REG, PREVIEW_REG, PREVIEW_BETA_REG ]

async function fetchJson( url, headers ) {
	let json = getWithExpiry(url)
	
	if (json) {
		console.warn( "loading cached value" )
		return json
	}
	
	try {
		let res = await fetch( url, { headers } )
		
		json = await res.json()
		
		setWithExpiry(url, json, MS_IN_2_DAYS )
	} catch (err) {
		console.error(err)
	}
	
	return json 
}

async function fetchAll (callback) {
	let total = moduleElms.children.length
	let done = 0
	let bar = document.querySelector("#progress-bar span")
	let text = document.querySelector("#progress-text")
	for (let moduleElm of moduleElms.children) {
		moduleElm.click()
		done++
		let pct = (done / total * 100).toFixed(0)
		if (bar) bar.style.width = pct + "%"
		if (text) text.innerText = done + " / " + total
		await delay(125)
	}
}
