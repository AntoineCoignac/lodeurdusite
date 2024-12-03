document.addEventListener("DOMContentLoaded", (event) => {
    const captchaFormButton = document.querySelector(".captcha-form-button");
    const captchaWrapper = document.querySelector(".captcha-wrapper");

    captchaFormButton.addEventListener("click", function(){
        captchaWrapper.classList.add("show");
    })
});
