<?php
// Inclure le fichier de la classe Card
include("Card.php");
include("utils.php");

// Créer des cartes d'exemple
session_start();
$cards = $_SESSION["cards"];

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
    <div class="current-player">Current Player: <?php printPlayerName() ?></div>
    <div class="instruction">Player <?php printPlayerName() ?>, ask a question to Player <?php printOtherPlayerName() ?>     and try to guess the card.</div>
    <div class="card-grid">
        <?php
        showCards($cards);
        ?>
    </div>

    <div class="buttons">
        
        <form action="submit.php" method="POST" id="submit">
            <input type="hidden" name="player" id="player"/>
            <input type="hidden" name="origin" id="origin"/>
            <input type="hidden" name="revokedElements" id="revokedElements"/>
            <button type="button" onclick="revokeSelected()">Revoke</button>
            <button type="button" id="guessButton" onclick="guessSelected()" disabled="disabled">Guess</button>        </form>
    
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
