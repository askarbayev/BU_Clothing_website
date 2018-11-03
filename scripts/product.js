window.onload = displayProductInfo; 

function displayProductInfo() { 
	var h2 = document.getElementById("productName");
	var url_string = window.location.href;
	var url = new URL(url_string);
	var productName = url.searchParams.get("productName");
	if(productName == null){
		h2.appendChild(document.createTextNode("No product selected!"));
		return;
	}
	h2.appendChild(document.createTextNode(productName));
}