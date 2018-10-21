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

//email, password, name
var users = [["aburkato@bu.edu", "abc123", "Alex"],
			  ["a", "a", "Adam"]
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
