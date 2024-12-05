<?php
function getOnlyHumanOrOcean($cards, $bool) {
    return array_filter($cards, function($card) use ($bool) {
        return $card->isHuman() === $bool;
    });
}

function isPlayer2()
{
    return isset($_GET['player']) and $_GET['player'] == 2;
}

function showCards($cards) {
    foreach (getOnlyHumanOrOcean($cards, isPlayer2()) as $card):
        echo $card->render();
    endforeach;
}

function printPlayerName() {
    //TODO: allez chercher le vrai nom
    echo isPlayer2() ? "2" : "1";
}

function printOtherPlayerName() {
    //TODO: allez chercher le vrai nom
    echo isPlayer2() ? "1" : "2";
}