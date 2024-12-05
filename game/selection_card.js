
document.addEventListener("DOMContentLoaded", (event) => {
    var cards = document.getElementsByClassName("card")

    var addSelected = function() {
        for(let card of document.getElementsByClassName("card")) {
            card.classList.remove("selected");
        }
        this.classList.add("selected");
    };

    for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', addSelected, false);
    }
})
