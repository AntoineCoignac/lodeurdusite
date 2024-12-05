<?php
// Inclure le fichier de la classe Card
include("Card.php");

// Créer des cartes d'exemple
$cards = [
    new Card("Titre 1", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg"),
    new Card("Titre 2", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg"),
    new Card("Titre 3", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg"),
    new Card("Titre 4", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg"),
    new Card("Titre 5", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg"),
    new Card("Titre 6", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg"),
    new Card("Titre 7", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg"),
    new Card("Titre 8", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg"),
    new Card("Titre 9", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg"),
];
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Who Is It? Game</title>
    <link href="style2.css" rel="stylesheet" />
</head>
<body>
<div class="container">
    <div class="current-player">Current Player: [Player Name]</div>
    <div class="instruction">Player [1|2], ask a question to Player [2|1] and try to guess the card.</div>
    <div class="card-grid">
        <?php foreach ($cards as $card): ?>
            <div class="card" onclick="toggleSelect(this)">
                <h3><?php echo htmlspecialchars($card->getDescription()); ?>
                    <a href="#" class="info-btn"><?php echo $card->isRevoked() ? "X" : "i"; ?></a>
                </h3>
                <img src="<?php echo htmlspecialchars($card->getImage()); ?>" alt="Image">
            </div>
        <?php endforeach; ?>
    </div>

    <div class="buttons">
        <button onclick="revokeSelected()">Revoke</button>
        <button onclick="guessSelected()">Guess</button>
    </div>
</div>
<script>
    // Fonction pour gérer la sélection d'une carte
    function toggleSelect(cardElement) {
        cardElement.classList.toggle('selected');
    }

    // Fonction pour révoquer les cartes sélectionnées
    function revokeSelected() {
        const selectedCards = document.querySelectorAll('.card.selected');
        selectedCards.forEach(card => {
            card.classList.add('revoke');
            card.classList.remove('selected');
        });
    }

    // Fonction pour deviner une carte
    function guessSelected() {
        const selectedCards = document.querySelectorAll('.card.selected');
        if (selectedCards.length === 1) {
            alert("You guessed a card!");
            selectedCards.forEach(card => card.classList.remove('selected'));
        } else {
            alert("Please select only one card!");
        }
    }

    // Fonction pour mettre à jour l'état du bouton "Guess"
    function updateGuessButton() {
        const selectedCards = document.querySelectorAll('.card.selected');
        const guessButton = document.getElementById('guessButton');

        // Active le bouton si exactement une carte est sélectionnée
        if (selectedCards.length === 1) {
            guessButton.disabled = false;
        } else {
            guessButton.disabled = true;
        }
    }
</script>
</body>
</html>
