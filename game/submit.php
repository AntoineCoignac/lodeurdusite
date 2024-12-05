<?php

include("Card.php");
session_start();
$cards = $_SESSION['cards'];
if ($_POST["origin"] == "selection") {
foreach ($cards as $card):
    if ($card->getIndex() == intval($_POST["cardID"])) {
        $card->setSelected(true);
        break;
    }
endforeach;
    if ($_POST["player"] == 2) {
        header("Location: guessboard.php?player=1");
    }
    else {
        header("Location: selection_card.php?player=2");
    }
}
die();


