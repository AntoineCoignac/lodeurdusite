
document.addEventListener("DOMContentLoaded", (event) => {
    var cards = document.getElementsByClassName("card")
    var submit = document.getElementById("submitButton")


    var addSelected = function() {
        for(let card of document.getElementsByClassName("card")) {
            card.classList.remove("selected");
        }
        this.classList.add("selected");
        document.getElementById("submitButton").disabled = false;
        document.getElementById("cardID").value = document.getElementsByClassName("selected")[0].id;

    };



    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', addSelected, false);
    }
})




