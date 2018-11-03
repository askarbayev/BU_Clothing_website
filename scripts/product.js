window.onload = displayProductInfo; 

function displayProductInfo() { 
	var url_string = window.location.href;
	var url = new URL(url_string);
	var productName = url.searchParams.get("productName");
	if(productName == null){
		var productNameElement = document.getElementById("productName");
		productNameElement.appendChild(document.createTextNode("No product selected!"));
		return;
	}


	var product = getProductByName(productName);
	setProductName(product[NAME_INDEX]);
	setProductCost(product[COST_INDEX]);
	setProductdDescShort(product[DESC_SHORT_INDEX]);
	setProductdDescLong(product[DESC_LONG_INDEX]);
	setProductdImage(product[IMAGE_INDEX]);
}

function setProductName(productName){
	var productNameElement = document.getElementById("productName");
	productNameElement.appendChild(document.createTextNode(productName));
}

function setProductCost(cost){
	var productCostElement = document.getElementById("cost");
	productCostElement.appendChild(document.createTextNode(cost));
}

function setProductdDescShort(description){
	var productDescriptionElement = document.getElementById("descShort");
	productDescriptionElement.appendChild(document.createTextNode(description));
}

function setProductdDescLong(description){
	var productDescriptionElement = document.getElementById("descLong");
	productDescriptionElement.appendChild(document.createTextNode(description));
}

function setProductdImage(image){
	var productImageElement = document.getElementById("image");
	var imagePath = "./images/" + image;
	productImageElement.src = imagePath;
}