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

    // Rendre le bouton draggable
    captchaContinueButton.setAttribute("draggable", "true");

    let savedText = ""

    captchaContinueButton.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", "");
        captchaContinueButton.classList.add("dragging");
        savedText = captchaContinueButton.textContent;
        captchaContinueButton.textContent = "Get me out of here";
    });

    captchaContinueButton.addEventListener("dragend", (event) => {
        const captchaPopup = document.querySelector(".captcha-popup");
        const rect = captchaPopup.getBoundingClientRect();
        
        // Vérifier si le bouton est en dehors de la popup
        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            captchaIsDone = true;
            captchaFormButton.classList.add("completed");
            submitButton.disabled = false;
            captchaWrapper.classList.remove("show"); 
        }

        captchaContinueButton.classList.remove("dragging");
        captchaContinueButton.textContent = savedText;
    });
});
