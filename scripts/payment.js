window.onload = setTotal; 

function setTotal() { 
	var total = 100;
	if(localStorage.getItem("totalCost")){
		total = localStorage.getItem("totalCost");
	}
    document.getElementById("totalCost").innerHTML = total;
}

function validatePayment() { 
	localStorage.removeItem("totalCost");
    return true;
}