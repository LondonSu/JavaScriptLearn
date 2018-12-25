
function showPic(whichPic) {
	var source = whichPic.getAttribute("href");
	
	// show the picture
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	
	// show the picture title
	var text = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	//alert(description.firstChild.nodeValue);
	description.firstChild.nodeValue = text;
}

function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
	//alert(body_element.childNodes.length);
	//alert(body_element.nodeType);
}

window.onload = countBodyChildren;