let nameInput = document.querySelector(".name-input");
let addressInput = document.querySelector(".address-input");
let purchaseBtn = document.querySelector(".purchase-btn");
let overlay = document.querySelector(".overlay");
let notification = document.querySelector(".purchase-notification");
nameInput.addEventListener("focusout", function() {
    if (nameInput.value == 0) {
        nameInput.classList.add("input-error");
        purchaseBtn.disabled = true;
        purchaseBtn.style.cursor = "not-allowed";
    } else {
        nameInput.classList.remove("input-error");
        purchaseBtn.disabled = false;
        purchaseBtn.style.cursor = "pointer";
    }
})
addressInput.addEventListener("focusout", function() {
    if (addressInput.value == 0) {
        addressInput.classList.add("input-error");
        purchaseBtn.disabled = true;
        purchaseBtn.style.cursor = "not-allowed";
    } else {
        addressInput.classList.remove("input-error");
        purchaseBtn.disabled = false;
        purchaseBtn.style.cursor = "pointer";
    }
})
purchaseBtn.addEventListener("click", function() {
    overlay.classList.add("overlay-display");
    notification.classList.add("purchase-notification-display");
})