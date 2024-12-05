<?php
include("Card.php");
$card = new Card("Titre", "https://www.legrand.fr/sites/default/files/styles/640x360/public/cables-etincelles-640x360_0.jpg?itok=v8zzKEAg");
echo $card->render();

$card->setRevoked(true);
echo $card->render();
?>