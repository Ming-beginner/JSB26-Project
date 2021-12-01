let registerPassWord = document.getElementById("register__user-pass"),
    registerPassWordConfirm = document.getElementById("register__user-confirm"),
    registerSubmitBtn = document.querySelector("form>button");
    registerAppendPassword = document.querySelector("form>div>i");
function validatePassWord(){
    if(registerPassWord.value != registerPassWordConfirm.value){
        registerPassWordConfirm.setCustomValidity("Passwords Don't Match");
        registerPassWordConfirm.classList.add("input-error");
        return false;
    }else{
        registerPassWordConfirm.setCustomValidity("");
        registerPassWordConfirm.classList.remove("input-error");
    }
}
function appendPassword(){
    console.log(123)
    if (registerPassWord.getAttribute("type") == "password") {
        registerPassWord.setAttribute("type", "text");
    } else {
        registerPassWord.setAttribute("type", "password");
      }
}

registerAppendPassword.addEventListener("click", function(){
    if (registerPassWord.getAttribute("type") == "password") {
        registerPassWord.setAttribute("type", "text");
    } else {
        registerPassWord.setAttribute("type", "password");
    }
    registerAppendPassword.classList.toggle("fa-eye-slash")
} );
registerSubmitBtn.addEventListener("click", validatePassWord);
registerPassWordConfirm.addEventListener("focusout", validatePassWord);