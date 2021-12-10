let logInPassword = document.getElementById("log-in__user-pass"),
    logInAppendPassword = document.querySelector(".login>i"),
    logInUsername = document.querySelector("#log-in__user-name"),
    logInSubmitBtn = document.querySelector("form>button"),
    overlay = document.querySelector(".overlay"),
    notification = document.querySelector(".notification");

logInAppendPassword.addEventListener("click", appendPassword);
logInSubmitBtn.addEventListener("click", appendNotification);

logInUsername.addEventListener("keyup", function() {
    handleInput(logInUsername);
});
logInPassword.addEventListener("keyup", function() {
    handlePasswordInput(logInPassword);
});

function appendNotification() {
    notification.classList.add("notification-display");
    overlay.classList.add("overlay-display");
}

function appendPassword() {
    if (logInPassword.getAttribute("type") == "password") {
        logInPassword.setAttribute("type", "text");
    } else {
        logInPassword.setAttribute("type", "password");
    }
    logInAppendPassword.classList.toggle("fa-eye-slash");
}

function handleInput(inputNode) {
    if (inputNode.value == 0) {
        inputNode.classList.add("input-error");
        logInSubmitBtn.disabled = true;
        logInSubmitBtn.style.cursor = "not-allowed";
    } else {
        inputNode.classList.remove("input-error");
        logInSubmitBtn.disabled = false;
        logInSubmitBtn.style.cursor = "pointer";
    }
}

function handlePasswordInput(inputNode) {
    if (inputNode.value == 0 || inputNode.value.length < 8) {
        inputNode.classList.add("input-error");
        logInSubmitBtn.disabled = true;
        logInSubmitBtn.style.cursor = "not-allowed";
    } else {
        inputNode.classList.remove("input-error");
        logInSubmitBtn.disabled = false;
        logInSubmitBtn.style.cursor = "pointer";
    }
}