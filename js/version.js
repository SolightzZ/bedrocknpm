const getVersionIndex = v => VERSION_REGS.findIndex( re => {
	re.lastIndex = 0
	return re.test( v ) 
})

function indexVersion (versions) {
	let versionIndex = []
	
	for (let version in versions) {
		let index = getVersionIndex(version)
		
		if (index >= 0) versionIndex[index] = { version, data: versions[version] }
	}
	
	return versionIndex
}

function buildVersionHead(i, tarballLink) {
	let div = elm("div")
	div.className = "d-flex justify-content-between align-items-center mt-3 mt-md-4"
			
	let labelElm = elm( "div" )
	labelElm.className = "label label-" + i + " fw-bold fs-6 fs-md-5"
	labelElm.innerHTML = [ "Stable", "Stable Beta", "Preview", "Preview Beta" ][ i ]
	div.append( labelElm )
	
	let tarbalElm = elm( "a" )
	tarbalElm.className = "download-btn fw-semibold fs-6 px-3 py-1"
	tarbalElm.innerText = "Download"
	tarbalElm.href = tarballLink
	div.append( tarbalElm )
	
	return div
}

function buildVersionNpm (npmString) {
	let versionElm = elm( "div" )
	versionElm.className = "npm-text mt-2 px-3 py-2 fs-6 fs-md-5"
	versionElm.innerHTML = npmString
	versionElm.style.cursor = "copy"
	
	versionElm.onclick = () => 
		copy( npmString )
			.then( () => popup( npmString, "Copied") )
			.catch( () => 
				prompt( "Copy", npmString ) 
			);
	return versionElm
}

let cleanId = v => v.toLowerCase().replaceAll(" ", "" );

function appendVersion (moduleElm, versions, npmBase) {
	let versionIndex = indexVersion( versions )
	
	for (let i in versionIndex) {
		let value = versionIndex[i]
			
		if (! value) continue;
		
		let { version, data } = value
				
		let versionData = versions[ version ]
		
		let npmString = npmBase + version
		
		let versionHead = buildVersionHead(i, data.dist.tarball) 
		moduleElm.append( versionHead )
		
		let versionElm = buildVersionNpm(npmString)
		versionElm.setAttribute( "id", cleanId(versionHead.querySelector( ".label" ).innerText) )
		
		moduleElm.append( versionElm )
	} 
}
