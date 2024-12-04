document.addEventListener("DOMContentLoaded", (event) => {
    const captchaFormButton = document.querySelector(".captcha-form-button");
    const captchaWrapper = document.querySelector(".captcha-wrapper");
    const captchaContinueButton = document.querySelector(".captcha-button-finish");
    const submitButton = document.querySelector(".form button[type='submit']");
    let captchaIsDone = false;

    captchaFormButton.addEventListener("click", function(){
        !captchaIsDone && captchaWrapper.classList.add("show");
    })

    captchaContinueButton.addEventListener("click", function(){
        captchaWrapper.classList.remove("show");
        captchaIsDone = true;
        captchaFormButton.classList.add("completed");
        submitButton.disabled = false;
    })
});
