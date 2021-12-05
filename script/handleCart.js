import { PRODUCT as product } from "./handleRenderProduct.js";

let cartBlock = document.querySelector(".cart__products");
let allPrice = 0;
let allPriceBlock = document.querySelector(".cart__buy>h6>span");
let shoppingCartBlock = document.querySelector(".cart");
let shoppingCart = document.querySelector("#shopping-cart>i");
let notification = document.querySelector(".notification");
let notificationClose = document.querySelector(".notification>button");
let clearAllInCartBtn = document.querySelector(".cart__clear");
let cartBuyBtn = document.querySelector(".cart__buy-btn");

let noProductText = "<p>There aren't any products in your cart!!</p>";
console.log(shoppingCart)
cartBlock.innerHTML = noProductText;

let cartProductList = product.forEach(function(item) {
    document.querySelector(`.laptop-${item.id}>.product__item--buy-block>.buy-block__add`).addEventListener("click", function() {
        appendNotification();
        let htmls = `
        <div class="cart__product cart__product-${item.id}">
            <img src="${item.imageLink}" alt="">
            <div class="cart__product--content">
                <h6>${item.name}</h6>
                <p>${item.price}</p>
            </div>
            <div class="cart__check-block">
                <button class="cart__clear-item cart__clear-item-${item.id}"><i class="fas fa-times"></i></button>
                <input class="cart__checkbox laptop-${item.id}-checkbox" type="checkbox" name="" id="">
            </div>
        </div>`
        if (cartBlock.contains(document.querySelector('.cart__products>p'))) {
            cartBlock.removeChild(document.querySelector('.cart__products>p'));
        }
        cartBlock.innerHTML += htmls;
    })
})


function deleteProductInCart() {
    let productDelBtn = document.querySelectorAll(".cart__clear-item");
    for (i of productDelBtn) {
        i.addEventListener("click", function(e) {
            if (e.target.parentElement.parentElement.parentElement.querySelector(".cart__checkbox").checked) {
                allPrice -= Number(e.target.parentElement.parentElement.parentElement.querySelector(".cart__product--content>p").textContent);
                allPriceBlock.innerHTML = allPrice;
            }
            e.target.parentElement.parentElement.parentElement.remove();
            if (cartBlock.innerHTML == 0) {
                cartBlock.innerHTML = noProductText;
            }
            console.log(allPrice);
            if (allPrice === 0) {
                cartBuyBtn.onclick = "";
                cartBuyBtn.style.cursor = "not-allowed";
            } else {
                cartBuyBtn.onclick = function() {
                    window.location.href = "./purchaseSite.html";
                };
                cartBuyBtn.style.cursor = "pointer";
            }
        })
    }

}

function updateAllPrice() {
    let buyCheckbox = document.querySelectorAll(".cart__checkbox");
    for (i of buyCheckbox) {
        i.addEventListener("click", function(e) {
            if (e.target.checked) {
                allPrice += Number(e.target.parentElement.parentElement.querySelector(".cart__product--content>p").textContent);
            } else {
                if (allPrice !== 0) {
                    allPrice -= Number(e.target.parentElement.parentElement.querySelector(".cart__product--content>p").textContent)
                }
            }
            allPriceBlock.innerHTML = allPrice;
            if (allPrice === 0) {
                cartBuyBtn.onclick = "";
                cartBuyBtn.style.cursor = "not-allowed";
            } else {
                cartBuyBtn.onclick = function() {
                    window.location.href = "./purchaseSite.html";
                };
                cartBuyBtn.style.cursor = "pointer";
            }
        })
    }
}

function handleSHoppingCartwhenClick() {
    if (cartBlock.innerHTML == 0) {
        cartBlock.innerHTML = noProductText;
        if (cartBlock.innerHTML == noProductText) {
            cartBuyBtn.onclick = "";
            cartBuyBtn.style.cursor = "not-allowed";
        }
    } else {
        if (allPrice === 0) {
            cartBuyBtn.onclick = "";
            cartBuyBtn.style.cursor = "not-allowed";
        } else {
            cartBuyBtn.onclick = function() {
                window.location.href = "./purchaseSite.html";
            };
            cartBuyBtn.style.cursor = "pointer";
        }
    }
}

function appendNotification() {
    notification.classList.add("cart-display");
    overlay.classList.add("overlay-display");
    scrollTo(0, 0);
}


clearAllInCartBtn.addEventListener("click", function() {
    cartBlock.innerHTML = noProductText;
    allPrice = 0;
    allPriceBlock.innerHTML = allPrice;
    cartBuyBtn.disabled = true;
    cartBuyBtn.style.cursor = "not-allowed";
})

notificationClose.addEventListener("click", function() {
    notification.classList.remove("cart-display");
    overlay.classList.remove("overlay-display");
});

shoppingCart.addEventListener("click", function(e) {
    shoppingCartBlock.classList.add("cart-display");
    handleSHoppingCartwhenClick();
    deleteProductInCart();
    updateAllPrice();
    console.log(shoppingCartBlock.parentElement);
    let container = shoppingCartBlock.parentElement;
    console.log(shoppingCart)
    container.addEventListener("click", function(e) {
        console.log(e.target)
        if (e.target != shoppingCart && e.target != shoppingCart.childNodes) {
            shoppingCartBlock.classList.remove("cart-display");
        }
    })
});
allPriceBlock.innerHTML = allPrice;