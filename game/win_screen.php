<?php

if (isset($_POST['playerNumber'])) {
    session_start();
    //TODO: afficher gagnant
    echo "Gagnant" . $_POST['playerNumber'] . "<br>";
    $cards = $_SESSION['cards'];
    $isHuman = $_POST['playerNumber'] == 1;
    $linkedCard = null;
    $originalCard = null;
    foreach ($cards as $card) {
        if ($card->getIndex() == $_POST['cardID'] and $card->isHuman() == $isHuman) {
            $linkedCard = $card;
        } else if ($card->getIndex() == $_POST['cardID'] and !($card->isHuman() == $isHuman)) {
            $originalCard = $card;
        }
        if ($originalCard != null and $linkedCard != null) {
            break;
        }
    }
    echo $originalCard->getDescription() . "was linked to " . $linkedCard->getDescription() . ";";
}
