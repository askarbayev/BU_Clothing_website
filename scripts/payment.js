window.onload = setTotal; 

function setTotal() { 
	var total = 100;

	var products = getAllProducts();
	var cartItems = document.getElementById("cart-items");
	if (localStorage.getItem("cart-items")){
		total = 0;
		let items = JSON.parse(localStorage["cart-items"]);
		console.log("Item: ", items);
		for (let item of items){
			let product = getProductByName(item);
			let itemCost = product[1];
			total = total + itemCost;
		}
	}

	total = Math.round(total * 100) / 100;
    document.getElementById("totalCost").innerHTML = total;
}

function validatePayment() { 
	localStorage.removeItem("cart-items");
    return true;
}

function ifJumptoShop(){
	var ifJump = window.confirm("Are you sure to cancel the payment?");
	　　if(ifJump == true)
	　　　　window.location.href = "shop.html";
	　　else
	　　　　window.location.href = "#";
}
function ifJumptoProfile(){
	var ifJump = window.confirm("Are you sure to cancel the payment?");
	　　if(ifJump == true)
	　　　　window.location.href = "profile.html";
	　　else
	　　　　window.location.href = "#";
}