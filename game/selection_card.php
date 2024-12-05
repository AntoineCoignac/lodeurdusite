<?php
session_start();
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
            // echo $_SESSION["player-1"];
        ?>
    </div>
    <div class="container">
        <h2 class="name-player">Select your card</h2>
        <div class="grid-container">
            <?php foreach ($cards as $card):
                        echo $card->render();
                    endforeach; 
                ?>
            <form action="submit.php" method="POST" id="submit">
                <input type="hidden" name="cardID" id="cardID"></input>
                <button type="submit" id="submitButton" disabled=true>Select card</button>
            </form>
        </div>
    </div>

</body>
</html>