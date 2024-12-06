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

if ($_POST["origin"] == "revoke") {
    $revokedElements = json_decode($_POST["revokedElements"]);
    foreach ($cards as $card) {
        foreach ($revokedElements as $key => $revoked) {
            if ($revoked == $card->getIndex()) {
                $card->setRevoked(true);
                unset($revokedElements[$key]);
                break;
            }
        }
    }
    header("Location: guessboard.php?player=" . ($_POST["player"] == 1 ? 2 : 1));
}
if ($_POST["origin"] == "guess") {
    $guessedCardID = intval($_POST["cardID"]);
    $currentPlayer = intval($_POST["player"]);

    // Trouve la carte sélectionnée par l'autre joueur
    $opponentSelectedCard = null;
    foreach ($cards as $card) {
        if ($card->getSelected()) {
            $opponentSelectedCard = $card;
            break;
        }
    }

    // Vérifie si la carte devinée est correcte
    $isCorrect = $opponentSelectedCard && $opponentSelectedCard->getIndex() == $guessedCardID;

    // Retourne la réponse au client
    header("Content-Type: application/json");
    echo json_encode([
        "correct" => $isCorrect,
        "nextPlayer" => $currentPlayer == 1 ? 2 : 1,
    ]);
    exit;
}
die();


