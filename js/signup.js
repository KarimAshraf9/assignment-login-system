var NameInputSignUp = document.querySelector("#NameInput");
var emailInputSignUp = document.querySelector("#sigUpHomeSection #emailInput");
var passwordSignUp = document.querySelector("#sigUpHomeSection #password");
var buttonSignUp = document.querySelector("#sigUpHomeSection button");

var existingUsers = JSON.parse(localStorage.getItem("data")) || [];

// add new user (sign up)
function addNewUser(){

  var usersInfo = {
    name: NameInputSignUp.value,
    email: emailInputSignUp.value,
    password: passwordSignUp.value,
  };

  existingUsers.push(usersInfo);

  localStorage.setItem("data", JSON.stringify(existingUsers));

  clearInputs();
  open("./index.html", "_self");
}


buttonSignUp.addEventListener("click", function () {
  if(validateInputs()){
    addNewUser();
  };

});

// clear inputs
function clearInputs() {
  NameInputSignUp.value = "";
  emailInputSignUp.value = "";
  passwordSignUp.value = "";
}

// validation inputs
function validateInputs(){
  var firstNameRegex = /^[A-Z][a-z ]{1,20}$/
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  var PasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

  if (firstNameRegex.test(NameInputSignUp.value) == false){
      return alert ('Your First Name must start with capital letter followed by small letters & total letters are 21');
  }
  else if (emailRegex.test(emailInputSignUp.value) == false){
      return alert ('check your email');
  }
  else if (PasswordRegex.test(passwordSignUp.value) == false){
    return alert ('Your password must start with capital letter and must contain small letter');
}
  
  return true;

}
