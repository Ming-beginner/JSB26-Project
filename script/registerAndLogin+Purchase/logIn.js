let logInPassword = document.getElementById("log-in__user-pass"),
    logInAppendPassword = document.querySelector(".login>i"),
    loginUsername = document.querySelector("#log-in__user-name"),
    logInSubmitBtn = document.querySelector("form>button");
logInPassword.addEventListener("focusout", function() {
    if (logInPassword.value == 0) {
        logInPassword.classList.add("input-error");
        logInSubmitBtn.disabled = true;
        logInSubmitBtn.style.cursor = "not-allowed";
    } else {
        logInPassword.classList.remove("input-error");
        logInSubmitBtn.disabled = false;
        logInSubmitBtn.style.cursor = "pointer";
    }
})
loginUsername.addEventListener("focusout", function() {
    if (loginUsername.value == 0) {
        loginUsername.classList.add("input-error");
        logInSubmitBtn.disabled = true;
        logInSubmitBtn.style.cursor = "not-allowed";
    } else {
        loginUsername.classList.remove("input-error");
        logInSubmitBtn.disabled = false;
        logInSubmitBtn.style.cursor = "pointer";
    }
})
logInAppendPassword.addEventListener("click", function() {
    if (logInPassword.getAttribute("type") == "password") {
        logInPassword.setAttribute("type", "text");
    } else {
        logInPassword.setAttribute("type", "password");
    }
    logInAppendPassword.classList.toggle("fa-eye-slash");
});