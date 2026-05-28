function popup (content, head) {
	if (! popup.stack) {
		let a = elm( "div" )
		
		Object.assign( a.style, {
			position: "fixed",
			top: 0,
			right: 0,
			display: "flex",
			flexDirection: "column",
			alignItems: "end",
			gap: "1em",
			zIndex: 2,
			padding: "2.5vw"
		})
		
		popup.stack = a
		
		document.body.append(popup.stack)
	}
	
	let b = elm( "div" )
	b.className = "popup-box"
	Object.assign( b.style, {
		background: "#11243a",
		border: "3px solid #1e3a5f",
		padding: ".75em 1em",
		boxShadow: "5px 5px #000",
		color: "#b8d4e8",
	})
	b.innerHTML = (head ? "<small>"+ head +"</small><br>" : "") + content
	
	popup.stack.append(b)
	
	function rm() {
		b.classList.add("out")
		b.addEventListener("animationend", () => b.remove(), { once: true })
	}
	
	let id = setTimeout( rm, 1000 * 4 )
	
	b.onclick = function() {
		clearTimeout( id )
		rm()
	}
}
