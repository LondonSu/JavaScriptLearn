
function showPic(whichPic) {
	
	if (!document.getElementById("placeholder")) return false; // can't find 'placeholder' here
	var source = whichPic.getAttribute("href");
	
	// show the picture
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	
	if (document.getElementById("description")) {
		// show the picture title
		var text = whichPic.getAttribute("title");
		var description = document.getElementById("description");
		//alert(description.firstChild.nodeValue);
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
	//alert(body_element.childNodes.length);
	//alert(body_element.nodeType);
}

window.onload = function() {
	countBodyChildren();
	prepareGallery();
}

function prepareGallery() {
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById("imagegallery")) return false;
	
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	
	for ( var i = 0; i < links.length; i ++) {
		links[i].onclick = function() {
			return !showPic(this);
			// if showPic returns true, it means normally processed, no further operation needed. 
		}
	}
}