import { MAC as mac } from "./module/mac.js";
import { SURFACE as surface } from "./module/surface.js";
import { ACER as acer } from "./module/acer.js";
import { ASUS as asus } from "./module/asus.js";
import { LENOVO as lenovo } from "./module/lenovo.js";
import { DELL as dell } from "./module/dell.js";
import { HP as hp } from "./module/hp.js";
import { MSI as msi } from "./module/msi.js";
import renderProducts from "./module/renderProducts.js"

let acerPageBlock = document.querySelector(".acer-page>.page-product-block");
let macbookPageBlock = document.querySelector(".macbook-page>.page-product-block");
let surfacePageBlock = document.querySelector(".surface-page>.page-product-block");
let asusPageBlock = document.querySelector(".asus-page>.page-product-block");
let dellPageBlock = document.querySelector(".dell-page>.page-product-block");
let msiPageBlock = document.querySelector(".msi-page>.page-product-block");
let hpPageBlock = document.querySelector(".hp-page>.page-product-block");
let lenovoPageBlock = document.querySelector(".lenovo-page>.page-product-block");
let allProductsPageBlock = document.querySelector(".all-products-page>.page-product-block");

let macbookGallery = document.querySelector(".macbook-block");
let surfaceGallery = document.querySelector(".surface-block");
let acerGallery = document.querySelector(".acer-block");
let asusGallery = document.querySelector(".asus-block");
let lenovoGallery = document.querySelector(".lenovo-block");
let msiGallery = document.querySelector(".msi-block");
let hpGallery = document.querySelector(".hp-block");
let dellGallery = document.querySelector(".dell-block");

let macbookGalleryProducts = [];
let surfaceGalleryProducts = [];
let acerGalleryProducts = [];
let asusGalleryProducts = [];
let lenovoGalleryProducts = [];
let msiGalleryProducts = [];
let hpGalleryProducts = [];
let dellGalleryProducts = [];



for (let i = 0; i < 3; i++) {
    macbookGalleryProducts.push(mac[i]);
    surfaceGalleryProducts.push(surface[i]);
    acerGalleryProducts.push(acer[i]);
    asusGalleryProducts.push(asus[i]);
    lenovoGalleryProducts.push(lenovo[i]);
    msiGalleryProducts.push(msi[i]);
    hpGalleryProducts.push(hp[i]);
    dellGalleryProducts.push(dell[i]);
}
renderProducts(macbookGalleryProducts, macbookGallery);
renderProducts(surfaceGalleryProducts, surfaceGallery);
renderProducts(asusGalleryProducts, asusGallery);
renderProducts(lenovoGalleryProducts, lenovoGallery);
renderProducts(acerGalleryProducts, acerGallery);
renderProducts(msiGalleryProducts, msiGallery);
renderProducts(hpGalleryProducts, hpGallery);
renderProducts(dellGalleryProducts, dellGallery);


let list = [];
export const PRODUCT = list.concat(mac, surface, acer, lenovo, asus, dell, hp, msi);



renderProducts(acer, acerPageBlock);
renderProducts(mac, macbookPageBlock);
renderProducts(surface, surfacePageBlock);
renderProducts(asus, asusPageBlock);
renderProducts(hp, hpPageBlock);
renderProducts(msi, msiPageBlock);
renderProducts(dell, dellPageBlock);
renderProducts(lenovo, lenovoPageBlock);
renderProducts(PRODUCT, allProductsPageBlock);



//BONUS SCROLL TO TOP
let scrollToTop = document.getElementById("scroll-to-top");


scrollToTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
})

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "flex";
    } else {
        scrollToTop.style.display = "none";
    }
};