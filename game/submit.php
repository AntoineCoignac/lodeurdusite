<?php

include("Card.php");
session_start();
$cards = $_SESSION['cards'];
foreach ($cards as $card):
    if ($card->getIndex() == intval($_POST["cardID"])) {
        $card->setSelected(true);
        break;
    }
endforeach;
header("Location: selection_card.php?player=2");
die();


