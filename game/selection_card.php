<?php
session_start();
// Inclure le fichier de la classe Card
include("Card.php");
include("utils.php");
// Créer des cartes d'exemple
$cards = [
    new Card("Titre 1", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg", true),
    new Card("Titre 2", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg", true),
    new Card("Titre 3", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg", true),
    new Card("Titre 4", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg", true),
    new Card("Titre 5", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg", true),
    new Card("Titre 6", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg", false),
    new Card("Titre 7", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg", false),
    new Card("Titre 8", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg", true),
    new Card("Titre 9", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg", true),
];


$_SESSION['cards'] = $cards;

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="selection_card.js"></script> 
    <title>Card selection</title>
</head>
<body>
    <div>
        <?php
            /*if (isPlayer2()) {
                echo $_GET['player2'];
            }
            else {
                echo $_GET['player1'];
            }*/
        ?>
    </div>
    <div class="container">
        <h2 class="name-player">Select your card</h2>
        <div class="grid-container">
            <?php showCards($cards);
                ?>
            <form action="submit.php" method="POST" id="submit">
                <input type="hidden" name="cardID" id="cardID"></input>
                <input type="hidden" name="player" id="player"/>
                <input type="hidden" name="origin" id="origin"/>
                <button type="submit" id="submitButton" disabled="disabled">Select card</button>
            </form>
        </div>
    </div>

</body>
</html>