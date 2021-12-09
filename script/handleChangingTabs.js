let mainPage = document.querySelector("main section");
let macbookPage = document.querySelector(".macbook-page");
let surfacePage = document.querySelector(".surface-page");
let acerPage = document.querySelector(".acer-page");
let asusPage = document.querySelector(".asus-page");
let dellPage = document.querySelector(".dell-page");
let hpPage = document.querySelector(".hp-page");
let msiPage = document.querySelector(".msi-page");
let lenovoPage = document.querySelector(".lenovo-page");
let allLaptopPage = document.querySelector(".all-products-page");

let pageList = [
    mainPage,
    macbookPage,
    surfacePage,
    acerPage,
    asusPage,
    dellPage,
    hpPage,
    msiPage,
    lenovoPage,
    allLaptopPage
];

let macbookBtn = document.querySelectorAll(".goto-macbook-page");
let acerBtn = document.querySelectorAll(".goto-acer-page");
let asusBtn = document.querySelectorAll(".goto-asus-page");
let msiBtn = document.querySelectorAll(".goto-msi-page");
let lenovoBtn = document.querySelectorAll(".goto-lenovo-page");
let hpBtn = document.querySelectorAll(".goto-hp-page");
let dellBtn = document.querySelectorAll(".goto-dell-page");
let surfaceBtn = document.querySelectorAll(".goto-surface-page");
let allProductBtn = document.querySelectorAll(".goto-all-product-page");


function changingTabs(activePage) {
    for (i of pageList) {
        i.classList.remove("page-active");
    }
    activePage.classList.add("page-active");
    window.scrollTo(0, 0);
    document.body.style.scrollBehavior = "smooth";
}