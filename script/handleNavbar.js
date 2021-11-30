let menu = document.querySelector(".nav-header"),
  main = document.querySelector("main"),
  aboutUs = document.querySelector("#nav-about"),
  product = document.querySelector("#nav-product"),
  contactList = document.querySelector(".menu-contact"),
  products = document.querySelectorAll(".products"),
  productList = document.querySelector(".menu-product"),
  nav = document.querySelector("body>nav"),
  shoppingCartBlock = document.querySelector(".cart")
  shoppingCart = document.getElementById("shopping-cart"),
  addToCartBtn = document.querySelectorAll(".buy-block__add"),
  notification = document.querySelector(".notification"),
  notificationClose = document.querySelector(".notification>button"),
  overlay = document.querySelector(".overlay");
for (i of addToCartBtn){
  i.addEventListener("click", appendNotification)
}
function appendNotification(){
  notification.classList.add("cart-display");
  overlay.classList.add("overlay-display");
  scrollTo(0,0);
}
notificationClose.addEventListener("click", function(){
  notification.classList.remove("cart-display");
  overlay.classList.remove("overlay-display");
})

shoppingCart.addEventListener("click", function(){
  shoppingCartBlock.classList.add("cart-display");
  shoppingCartBlock.addEventListener("mouseover", function(){
    shoppingCartBlock.classList.add("cart-display");
    shoppingCartBlock.addEventListener("mouseout", function(){
      shoppingCartBlock.classList.remove("cart-display");
    })
  })
})

menu.addEventListener("click", menuClick);
overlay.addEventListener("click", closeNavByClickMain);
aboutUs.addEventListener("click", appendContactList);
aboutUs.addEventListener("mouseout", hideContactList);
product.addEventListener("mouseover", appendProductList);
product.addEventListener("mouseout", hideProductList);
product.addEventListener("click", closeNavByClickMain);
productList.addEventListener("click", closeNavByClickMain);
for (i of products) {
  i.addEventListener("click", function () {
    main.classList.remove("menu-active");
    nav.classList.remove("menu-active");
    productList.classList.remove("display-content");
  });
}

function menuClick() {
  overlay.classList.toggle("overlay-display");
  nav.classList.toggle("menu-active");
  if (menu.innerHTML == "LOGO") {
    menu.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menu.innerHTML = "LOGO";
  }
}

function closeNavByClickMain() {
  overlay.classList.remove("overlay-display");
  nav.classList.remove("menu-active");
  if (menu.innerHTML != "LOGO") {
    menu.innerHTML = "LOGO";
  }
}

function appendContactList() {
  contactList.classList.add("display-content");
  contactList.addEventListener("mouseover", appendContactList);
}

function hideContactList() {
  contactList.classList.remove("display-content");
  contactList.addEventListener("mouseout", hideContactList);
}

function appendProductList() {
  productList.classList.add("display-content");
  productList.addEventListener("mouseover", appendProductList);
}

function hideProductList() {
  productList.classList.remove("display-content");
  productList.addEventListener("mouseout", hideProductList);
}