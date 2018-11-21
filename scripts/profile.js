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

		var ccNumber = "no card"
		if(userData.length > 3){
			ccNumber = userData[4];
		}
	}
	document.getElementById("email").value = email;
	document.getElementById("name").value = name;
	document.getElementById("creditCard").value = ccNumber;
}

function logOut(){
	localStorage.removeItem("email");
	if (localStorage.getItem("cart-items")){
		localStorage.removeItem("cart-items");
	}
}
