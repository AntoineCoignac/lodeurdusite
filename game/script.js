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
        return;
    }

    selectedCards.forEach(card => {
        card.classList.add('revoke');  // Marquer la carte comme révoquée
        card.classList.remove('selected');  // Retirer la sélection de la carte
    });
    updateGuessButton();  // Vérifie si le bouton doit être activé ou non après la révocation
}

// Fonction pour deviner une carte
function guessSelected() {
    const selectedCards = document.querySelectorAll('.card.selected');

    // Vérifie que la carte sélectionnée n'est pas révoquée
    const validCards = Array.from(selectedCards).filter(card => !card.classList.contains('revoke'));

    if (validCards.length === 1) {
        alert("You guessed a card!");
        validCards.forEach(card => card.classList.remove('selected'));
    } else {
        alert("Please select only one valid card!");
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
