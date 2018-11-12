window.onload = displayProductInfo; 

function displayProductInfo() { 
	let productName = getProductName();
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

function getProductName(){
	let url_string = window.location.href;
	let url = new URL(url_string);
	let productName = url.searchParams.get("productName");
	return productName;
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

function addToCart(){
	let item_id = getProductName();
	if(item_id == null){
		return;
	}
	if (localStorage.getItem("cart-items")){
		let items = JSON.parse(localStorage["cart-items"]);
		items.push(item_id);
		items = [...new Set(items)]; 
		localStorage.setItem("cart-items", JSON.stringify(items));
	}
	else{
		let item = [item_id];
		localStorage.setItem("cart-items", JSON.stringify(item));
	}
	alert(`${item_id} added to cart`);
}