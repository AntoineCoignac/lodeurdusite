// Fonction pour gérer la sélection d'une carte
function toggleSelect(cardElement) {
    // Ne pas permettre la sélection si la carte est révoquée
    if (cardElement.classList.contains('revoke')) {
        return;  // Si la carte est révoquée, on arrête la fonction
    }

    cardElement.classList.toggle('selected');
    updateGuessButton();
}

// Fonction pour révoquer les cartes sélectionnées
function revokeSelected() {
    const selectedCards = document.querySelectorAll('.card.selected');
    const totalCards = document.querySelectorAll('.card');
    const revokeCards = document.querySelectorAll('.card.revoke');
    checkRevokeCards = totalCards.length - (selectedCards.length + revokeCards.length);

    if(checkRevokeCards < 1) {
        alert("You only have one card left, guess it !");
        return;
    }

    selectedCards.forEach(card => {
        card.classList.add('revoke');  // Marquer la carte comme révoquée
        card.classList.remove('selected');  // Retirer la sélection de la carte
    });
    updateGuessButton();  // Vérifie si le bouton doit être activé ou non après la révocation

    document.getElementById("player").value = new URLSearchParams(window.location.search).get("player");
    document.getElementById("revokedElements").value = JSON.stringify(Array.from(selectedCards).map(card => card.id));
    document.getElementById("origin").value = "revoke";
    document.getElementById("submit").submit();

}

// Fonction pour deviner une carte
function guessSelected() {
    const selectedCards = document.querySelectorAll('.card.selected');

    // Vérifie que la carte sélectionnée n'est pas révoquée
    const validCards = Array.from(selectedCards).filter(card => !card.classList.contains('revoke'));

    if (validCards.length === 1) {
        const selectedCardID = validCards[0].id; // ID de la carte sélectionnée
        const playerNumber = new URLSearchParams(window.location.search).get("player");

        // Prépare les données à envoyer au serveur
        const formData = new FormData();
        formData.append("player", playerNumber);
        formData.append("origin", "guess");
        formData.append("cardID", selectedCardID);

        // Envoie une requête au serveur pour récupérer l'état "selected" de la carte
        fetch("submit.php", {
            method: "POST",
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.correct) {
                    alert("Bravo ! Vous avez deviné la bonne carte !");
                    // Rediriger ou traiter le résultat après l'alerte
                    window.location.href = `win_screen.php?winner=${playerNumber}&cardIDs${selectedCardID}`;
                } else {
                    alert("Ce n'est pas la bonne carte, à l'autre joueur !");
                    // Révoquer la carte incorrecte et passer au joueur suivant
                    const card = document.getElementById(selectedCardID);
                    card.classList.add('revoke'); // Révoquer la carte

                    window.location.href = `guessboard.php?player=${data.nextPlayer}`;
                }
            })
            .catch(error => {
                console.error("Erreur lors de la soumission :", error);
                alert("Une erreur s'est produite lors du guess.");
            });
    } else {
        alert("Veuillez sélectionner une seule carte valide pour deviner !");
    }
}

// Fonction pour mettre à jour l'état du bouton "Guess"
function updateGuessButton() {
    const selectedCards = document.querySelectorAll('.card.selected');
    const guessButton = document.getElementById('guessButton');

    // Active le bouton si exactement une carte valide est sélectionnée
    if (selectedCards.length === 1 && !selectedCards[0].classList.contains('revoke')) {
        guessButton.disabled = false;
    } else {
        guessButton.disabled = true;
    }
}

// Ajouter un gestionnaire d'événements pour chaque carte
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => toggleSelect(card));
});
