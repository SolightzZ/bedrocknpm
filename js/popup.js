function popup (content, head) {
	if (! popup.stack) {
		let a = elm( "div" )
		a.className = "position-fixed top-0 end-0 d-flex flex-column align-items-end gap-2 gap-md-3 p-3 p-md-4";
		a.style.zIndex = "1055";
		
		popup.stack = a
		
		document.body.append(popup.stack)
	}
	
	let b = elm( "div" )
	b.className = "popup-box px-3 py-2 px-md-4 py-md-3 fs-6 fs-md-5";
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
