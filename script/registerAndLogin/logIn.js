let logInPassword = document.getElementById("log-in__user-pass"),
  logInAppendPassword = document.querySelector(".login>i");

logInAppendPassword.addEventListener("click", function () {
  if (logInPassword.getAttribute("type") == "password") {
    logInPassword.setAttribute("type", "text");
  } else {
    logInPassword.setAttribute("type", "password");
  }
  logInAppendPassword.classList.toggle("fa-eye-slash");
});
