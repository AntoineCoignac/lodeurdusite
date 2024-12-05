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
        <?php
        // Afficher chaque carte avec un identifiant unique
        foreach ($cards as $index => $card):
            echo $card->render();  // Passer l'index pour chaque carte
        endforeach;
        ?>
    </div>

    <div class="buttons">
        <button onclick="revokeSelected()">Revoke</button>
        <button id="guessButton" onclick="guessSelected()" disabled>Guess</button>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
