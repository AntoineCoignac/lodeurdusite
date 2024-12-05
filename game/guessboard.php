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
    <style>
        /* Style général */
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        .card-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 20px;
        }

        .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            position: relative;
            transition: transform 0.3s ease;
            cursor: pointer;
        }

        .card:hover {
            transform: scale(1.05);
        }

        .card.selected {
            border: 2px solid #003366;
            box-shadow: 0 0 10px rgba(0, 51, 102, 0.5);
        }

        .card.revoke {
            filter: brightness(0.7);
        }

        .card h3 {
            margin: 0;
            padding: 15px;
            background-color: #f4f4f4;
            border-bottom: 1px solid #ddd;
            text-align: center;
            font-weight: bold;
        }

        .card img {
            width: 100%;
            height: auto;
        }

        .card .info-btn {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            background-color: #003366;
            color: white;
            padding: 5px 10px;
            border-radius: 50%;
            font-size: 12px;
            font-weight: bold;
            text-decoration: none;
        }

        .card .info-btn:hover {
            background-color: #005b99;
        }

        /* Boutons */
        .buttons {
            text-align: center;
            margin: 20px;
        }

        .buttons button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #003366;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .buttons button:hover {
            background-color: #005b99;
        }

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }


        /* Joueur courant */
        .current-player {
            font-size: 18px;
            color: #007BFF;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center; /* Centrage du texte */
        }

        /* Texte principal */
        .instruction {
            font-size: 16px;
            color: #333;
            margin-bottom: 30px;
            text-align: center; /* Centrage du texte */
        }

    </style>
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

    // Fonction pour deviner une carte (pour l'exemple, on affiche un message)
    function guessSelected() {
        const selectedCards = document.querySelectorAll('.card.selected');
        if (selectedCards.length > 0) {
            alert("You guessed a card!");
            selectedCards.forEach(card => card.classList.remove('selected'));
        } else {
            alert("Please select a card first!");
        }
    }
</script>

</body>
</html>
