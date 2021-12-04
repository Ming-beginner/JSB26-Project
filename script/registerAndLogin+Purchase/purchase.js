let nameInput = document.querySelector(".name-input");
let addressInput = document.querySelector(".address-input");
let phoneInput = document.querySelector(".phone-input");
let purchaseBtn = document.querySelector(".purchase-btn");
let overlay = document.querySelector(".overlay");
let notification = document.querySelector(".purchase-notification");
nameInput.addEventListener("focusout", function() {
    handleInput(nameInput);
})
addressInput.addEventListener("focusout", function() {
    handleInput(addressInput);
});
phoneInput.addEventListener("focusout", function() {
    handleInput(phoneInput);
})
purchaseBtn.addEventListener("click", function() {
    overlay.classList.add("overlay-display");
    notification.classList.add("purchase-notification-display");
})


function handleInput(inputNode) {
    if (inputNode.value == 0) {
        inputNode.classList.add("input-error");
        purchaseBtn.disabled = true;
        purchaseBtn.style.cursor = "not-allowed";
    } else {
        inputNode.classList.remove("input-error");
        purchaseBtn.disabled = false;
        purchaseBtn.style.cursor = "pointer";
    }
}