var loggedInUsername = localStorage.getItem("activeUser");

if (!loggedInUsername) {
  open("./index.html", "_self");
}

var buttonLogOut = document.querySelector("nav .btn");
var welcomeHeader = document.querySelector("#HomeSection h2");

welcomeHeader.innerHTML = `Welcome ${loggedInUsername}`;

var req = new XMLHttpRequest();

req.open("GET", "https://api.escuelajs.co/api/v1/products/?offset=0&limit=15");

req.send();

products = [];

req.addEventListener("readystatechange", function () {
  if (req.readyState == 4 && req.status >= 200 && req.status <= 299) {
    products = JSON.parse(req.response);
    displayitems();
  }
});

// display products get from API
function displayitems() {
  var cartoona = "";
  for (var i = 0; i < products.length; i++) {
    if (
      products[i].images.length &&
      products[i].title &&
      products[i].description
    ) {
      cartoona += `
            <div class="col-4 text-center ">
                <div>
                    <figure>
                        <img src="${products[i].images[0]}" class="w-100" alt="">
                    </figure>
                    <h3>${products[i].title}</h3>
                    <p class="text-white">${products[i].description}</p>
                </div>
            </div>`;
    }
  }

  document.querySelector(".row").innerHTML = cartoona;
}

// To log out from home
buttonLogOut.addEventListener("click", function () {
  localStorage.removeItem("activeUser");
  location.replace("./index.html");
});
