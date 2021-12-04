let registerPassWord = document.getElementById("register__user-pass"),
    registerUserName = document.getElementById("register__user-name"),
    registerPassWordConfirm = document.getElementById("register__user-confirm"),
    registerSubmitBtn = document.querySelector("form>button"),
    registerAppendPassword = document.querySelector("form>div>i"),
    overlay = document.querySelector(".overlay"),
    notification = document.querySelector(".notification");

registerUserName.addEventListener("focusout", function() {
    handleInput(registerUserName);
})
registerPassWord.addEventListener("focusout", function() {
    handlePasswordInput(registerPassWord);
})

registerAppendPassword.addEventListener("click", appendPassword);
registerPassWordConfirm.addEventListener("keyup", validatePassWord);
registerSubmitBtn.addEventListener("click", appendNotification)

function validatePassWord() {
    if (registerPassWord.value != registerPassWordConfirm.value) {
        registerSubmitBtn.disabled = true;
        registerSubmitBtn.style.cursor = "not-allowed";
        registerPassWordConfirm.classList.add("input-error");
    } else {
        registerSubmitBtn.disabled = false;
        registerSubmitBtn.style.cursor = "pointer";
        registerPassWordConfirm.classList.remove("input-error");
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

function appendNotification() {
    notification.classList.add("notification-display");
    overlay.classList.add("overlay-display");
}

function handleInput(inputNode) {
    if (inputNode.value == 0) {
        inputNode.classList.add("input-error");
        registerSubmitBtn.disabled = true;
        registerSubmitBtn.style.cursor = "not-allowed";
    } else {
        inputNode.classList.remove("input-error");
        registerSubmitBtn.disabled = false;
        registerSubmitBtn.style.cursor = "pointer";
    }
}

function handlePasswordInput(inputNode) {
    if (inputNode.value == 0 || inputNode.value.length < 8) {
        inputNode.classList.add("input-error");
        registerSubmitBtn.disabled = true;
        registerSubmitBtn.style.cursor = "not-allowed";
    } else {
        inputNode.classList.remove("input-error");
        registerSubmitBtn.disabled = false;
        registerSubmitBtn.style.cursor = "pointer";
    }
}