window.onload = displayUserInfo; 

function displayUserInfo() { 
	var newLine = "<br/>";
	var displayString = "Welcome!"
	if(localStorage.getItem("email")){
		var email = localStorage.getItem("email");
		var userData = getUserInfo(email);
		var name = userData[2];
		var emailString = "Email: " + email;
		var nameString = "Name: " + name;
		displayString = displayString + newLine 
		+ nameString + newLine
		+ emailString + newLine;
	}
	document.getElementById("userInfo").innerHTML = displayString;
}

function logOut(){
	localStorage.removeItem("email");
	if (localStorage.getItem("cart-items")){
		localStorage.removeItem("cart-items");
	}
}
