<?php
    session_start();
    $cards = $_SESSION['cards'];
    var_dump($cards);
    echo count($cards);
    foreach ($cards as $card):
        echo $card->getIndex();
        echo intval($_POST["cardID"]);
        if($card->getIndex() == intval($_POST["cardID"])) {
            $card->setSelected(true);
            echo $card->getSelected();
            break;
        }
    endforeach; 
    echo var_dump($_POST);

?>