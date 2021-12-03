let registerPassWord = document.getElementById("register__user-pass"),
    registerUserName = document.getElementById("register__user-name"),
    registerPassWordConfirm = document.getElementById("register__user-confirm"),
    registerSubmitBtn = document.querySelector("form>button"),
    registerAppendPassword = document.querySelector("form>div>i"),
    overlay = document.querySelector(".overlay"),
    notification = document.querySelector(".purchase-notification");

function validatePassWord() {
    if (registerPassWord.value == 0) {
        registerPassWord.setCustomValidity("Enter your password")
        registerPassWord.classList.add("input-error");
        registerSubmitBtn.style.cursor = "not-allowed";
    } else if (registerUserName.value == 0) {
        registerUserName.classList.add("input-error");
        registerUserName.setCustomValidity("Enter your user name")
    } else if (registerPassWord.value != registerPassWordConfirm.value) {
        registerPassWordConfirm.setCustomValidity("Passwords Don't Match");
        registerPassWordConfirm.classList.add("input-error");
    } else {
        registerUserName.classList.remove("input-error");
        registerPassWord.classList.remove("input-error");
        registerPassWordConfirm.classList.remove("input-error");
        registerUserName.setCustomValidity("");
        registerPassWord.setCustomValidity("");
        registerPassWordConfirm.setCustomValidity("");
        registerSubmitBtn.style.cursor = "pointer";
        registerSubmitBtn.addEventListener("click", function() {
            overlay.classList.add("overlay-display");
            notification.classList.add("purchase-notification-display");
        })
    }
}

function appendPassword() {
    if (registerPassWord.getAttribute("type") == "password") {
        registerPassWord.setAttribute("type", "text");
    } else {
        registerPassWord.setAttribute("type", "password");
    }
    registerAppendPassword.classList.toggle("fa-eye-slash");
}

registerAppendPassword.addEventListener("click", appendPassword);
registerPassWord.addEventListener("focusout", validatePassWord);
registerPassWordConfirm.addEventListener("focusout", validatePassWord);
registerUserName.addEventListener("focusout", validatePassWord);
registerSubmitBtn.addEventListener("click", validatePassWord);