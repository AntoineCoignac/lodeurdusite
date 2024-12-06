document.addEventListener("DOMContentLoaded", (event) => {
    cards = document.querySelectorAll(".cards");

    function rotateElement(event, element) {
        // get mouse position
        const x = event.clientX;
        const y = event.clientY;
        // console.log(x, y)

        // find the middle
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
        // console.log(middleX, middleY)

        const maxRotation = 10;

        // get offset from middle as a percentage
        // and tone it down a little
        const offsetX = Math.max(-maxRotation, Math.min(maxRotation, ((x - middleX) / middleX) * 45));
        const offsetY = Math.max(-maxRotation, Math.min(maxRotation, ((y - middleY) / middleY) * 45));
        // console.log(offsetX, offsetY);

        // set rotation
        element.style.setProperty("--rotateX", offsetX + "deg");
        element.style.setProperty("--rotateY", -1 * offsetY + "deg");
    }

    cards.forEach(card => {
        document.addEventListener("mousemove", (e) => {
            rotateElement(e, card);
        });
    });

})