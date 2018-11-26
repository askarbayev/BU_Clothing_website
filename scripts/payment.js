window.onload = setTotal; 

function setTotal() { 
	var total = 100;

	var products = getAllProducts();
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

	var ccOnFile = document.getElementById("ccOnFile");
    //Hide the "use credit card on file" button if no user is signed in
    if(!localStorage.getItem("email")){
    	while (ccOnFile.firstChild) {
    		ccOnFile.removeChild(ccOnFile.firstChild);
		}
    }
    else{	
    	//Hide the "use credit card on file" button if there is no credit card
    	var email = localStorage.getItem("email");
		var userData = getUserInfo(email);
		var cardType = userData[3];
		if(!cardType){
			while (ccOnFile.firstChild) {
    			ccOnFile.removeChild(ccOnFile.firstChild);
			}
		}
    }
}

function validatePayment() { 
	localStorage.removeItem("cart-items");
    return true;
}

function setCard(){
	if(localStorage.getItem("email")){
		var email = localStorage.getItem("email");
		var userData = getUserInfo(email);
		var cardType = userData[3];
		var cardNumber = userData[4];
		var cardSC = userData[5];

		var cardTypeGUI = document.getElementById("cardType");
		cardTypeGUI.value = cardType;
		var cardNumberGUI = document.getElementById("cardNumber");
		cardNumberGUI.value = cardNumber;
		var cardSCGUI = document.getElementById("cardSC");
		cardSCGUI.value = cardSC;
	}
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



