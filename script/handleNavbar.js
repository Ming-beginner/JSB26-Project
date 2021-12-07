let menu = document.querySelector(".nav-header"),
    main = document.querySelector("main"),
    aboutUs = document.querySelector("#nav-about"),
    product = document.querySelector("#nav-product"),
    contactList = document.querySelector(".menu-contact"),
    products = document.querySelectorAll(".products"),
    productList = document.querySelector(".menu-product"),
    nav = document.querySelector("body>nav"),
    overlay = document.querySelector(".overlay");
notification = document.querySelector(".notification");

menu.addEventListener("click", menuClick);
overlay.addEventListener("click", closeNavByClickMain);
aboutUs.addEventListener("click", appendContactList);
aboutUs.addEventListener("mouseout", hideContactList);
product.addEventListener("mouseover", appendProductList);
product.addEventListener("mouseout", hideProductList);
product.addEventListener("click", closeNavByClickMain);
productList.addEventListener("click", closeNavByClickMain);
for (let i of products) {
    i.addEventListener("click", function() {
        main.classList.remove("menu-active");
        nav.classList.remove("menu-active");
        productList.classList.remove("display-content");
    });
}

function menuClick() {
    overlay.classList.toggle("overlay-display");
    nav.classList.toggle("menu-active");
    if (menu.innerHTML == '<img src="./asset/img/logo.png" alt="">') {
        menu.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menu.innerHTML = `<img src="./asset/img/logo.png" alt="">`;
    }
}

function closeNavByClickMain() {
    overlay.classList.remove("overlay-display");
    notification.classList.remove("cart-display");
    nav.classList.remove("menu-active");
    if (menu.innerHTML != '<img src="./asset/img/logo.png" alt="">') {
        menu.innerHTML = '<img src="./asset/img/logo.png" alt="">';
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