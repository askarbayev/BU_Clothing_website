function validateLogIn() { 
	var email = document.forms["logInForm"]["email"].value;
	var password = document.forms["logInForm"]["password"].value;
	
	if(authenticateUser(email, password)){
		localStorage.setItem("email", email);
    	return true;
	}
	else{
		document.getElementById("login_failed").innerHTML = "Login Failed.";
		document.forms["logInForm"].reset();
		return false;
	}
}

//email, password, name, card type, credit card number, security code
var users = [["a@a.com", "a", "Adam Smith", "visa", 1234567890, 123],
			 ["b@b.com", "b", "Bob Washington"],
			 ["c@c.com", "c", "Carly Doe", "master", 0987654321, 998]
			];

/*
Use this to authenticate a user
*/
function authenticateUser(email, password){
	for(var i = 0; i < users.length; i++) {
		var user = users[i];
		if(user[0] == email && user[1] == password){
			return true;
		}
	}
	return false;
}

/*
Use this after a user has been authenticated
*/
function getUserInfo(email){
	for(var i = 0; i < users.length; i++) {
		var user = users[i];
		if(user[0] == email){
			return user;
		}
	}
	return null;
}
