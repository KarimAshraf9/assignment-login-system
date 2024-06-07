var emailInputSignIn = document.querySelector("#signInHomeSection #emailInput");
var passwordSignIn = document.querySelector("#signInHomeSection #password");
var buttonSignIn = document.querySelector("#signInHomeSection button");

buttonSignIn.addEventListener("click", function () {
  var existingUsers = JSON.parse(localStorage.getItem("data")) || [];

  var userIndex = existingUsers.findIndex(function (e) {
    return e.email === emailInputSignIn.value;
  });

  if (userIndex === -1) {
    return alert("No user with such email");
  } else if (existingUsers[userIndex].password !== passwordSignIn.value) {
    return alert("Wrong password");
  }

  var activeUser = existingUsers[userIndex].name;
  localStorage.setItem("activeUser", activeUser);
  clearInputs();
  open("./home.html", "_self");
});

// clear inputs
function clearInputs() {
  emailInputSignIn.value = "";
  passwordSignIn.value = "";
}
