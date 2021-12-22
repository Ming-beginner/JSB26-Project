import { MAC as mac } from "./module/mac.js";
import { SURFACE as surface } from "./module/surface.js";
import { ACER as acer } from "./module/acer.js";
import { ASUS as asus } from "./module/asus.js";
import { LENOVO as lenovo } from "./module/lenovo.js";
import { DELL as dell } from "./module/dell.js";
import { HP as hp } from "./module/hp.js";
import { MSI as msi } from "./module/msi.js";
import renderProducts from "./module/renderProducts.js";

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


for (let i = 0; i < 4; i++) {
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

//BONUS RENDER PREVIEW
let overlay = document.querySelector(".preview__block");
PRODUCT.forEach(function(item) {
    let htmls =
        `
    <div class="preview preview-id-${item.id} animate__animated animate__fadeInUp">
        <button class="preview__close preview__close-${item.id}"><i id="preview__close-icon" class="fas fa-times"></i></button>
        <img src="${item.imageLink}" alt="">
        <div class="preview__content">
            <div class="preview__text">
                <h2>${item.name}</h2>
                <p>${item.feature}</p>
                <div class="preview__price">
                    <h3>${item.price}</h3>
                    <p>${item.oldPrice}</p>
                </div>
            </div>
            <div class="preview__button-block">
                <button onclick="window.location.href='./purchaseSite.html'" class="preview__buy-now">Buy Now</button>
                <button class="preview__add-to-cart">Add To Cart</button>
            </div>
        </div>
    </div>
    `
    document.querySelector(".preview__block").innerHTML += htmls;
})

for (let i = 1; i <= PRODUCT.length; i++) {
    function addAndRemoverPreview(method) {
        if (method === "remove") {
            document.querySelector(`.preview-id-${i}`).classList.remove("preview-display");
            overlay.classList.remove("preview__block-display");
        } else if (method === "add") {
            document.querySelector(`.preview-id-${i}`).classList.add("preview-display");
            overlay.classList.add("preview__block-display");
        }
    }
    let laptops = document.querySelectorAll(`.laptop-${i}`);
    for (let j of laptops) {
        j.addEventListener('click', function(e) {
            if (e.target.nodeName != "BUTTON") {
                addAndRemoverPreview("add");
            }
            document.querySelector(`.preview__close-${i}`).addEventListener("click", function() {
                addAndRemoverPreview("remove");
            })
            overlay.addEventListener("click", function(e) {
                console.log(e.target);
                if (e.target.isEqualNode(overlay)) {
                    addAndRemoverPreview("remove");
                }
            })
        })
    }
}