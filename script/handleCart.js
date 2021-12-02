import { PRODUCT as product } from "./handleRenderProduct.js";

let cartBlock = document.querySelector(".cart__products");
let allPrice = 0;
let allPriceBlock = document.querySelector(".cart__buy>h6>span");
let shoppingCartBlock = document.querySelector(".cart");
let shoppingCart = document.getElementById("shopping-cart");
let notification = document.querySelector(".notification");
let notificationClose = document.querySelector(".notification>button");
let clearAllInCartBtn = document.querySelector(".cart__clear");


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
            allPriceBlock.innerHTML = allPrice
        })
    }
}

function appendNotification() {
    notification.classList.add("cart-display");
    overlay.classList.add("overlay-display");
    scrollTo(0, 0);
}


clearAllInCartBtn.addEventListener("click", function() {
    cartBlock.innerHTML = "";
    allPrice = 0;
    allPriceBlock.innerHTML = allPrice;
})

notificationClose.addEventListener("click", function() {
    notification.classList.remove("cart-display");
    overlay.classList.remove("overlay-display");
});

shoppingCart.addEventListener("click", function() {
    if (cartBlock.innerHTML == "") {
        cartBlock.innerHTML = "<p>There aren't any products in your cart!!</p>"
    }
    deleteProductInCart();
    updateAllPrice();
    shoppingCartBlock.classList.add("cart-display");
    shoppingCartBlock.addEventListener("mouseover", function() {
        shoppingCartBlock.classList.add("cart-display");
        shoppingCartBlock.addEventListener("mouseout", function() {
            shoppingCartBlock.classList.remove("cart-display");
        });
    });
});
allPriceBlock.innerHTML = allPrice + "đ";