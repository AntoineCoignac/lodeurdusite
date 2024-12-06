<?php

class Card
{
    public static $globalIndex = 0;
    private $description;
    private $image;
    private $revoked;
    private $winningCard;
    private $selected;
    private $index;
    private $human;
    private $related;

    public function __construct($_description, $_image, $_human, $_related)
    {
        $this->description = $_description;
        $this->image = $_image;
        $this->revoked = false;
        $this->winningCard = false;
        $this->selected = false;
        $this->index = self::$globalIndex;
        $this->human = $_human;
        $this->related = $_related;
        self::$globalIndex++;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getImage()
    {
        return $this->image;
    }

    public function setImage($image)
    {
        $this->image = $image;
    }

    public function isRevoked()
    {
        return $this->revoked;
    }

    public function setRevoked($revoked)
    {
        $this->revoked = $revoked;
    }

    public function getWinningCard()
    {
        return $this->winningCard;
    }

    public function setWinningCard($winningCard)
    {
        $this->winningCard = $winningCard;
    }

    public function getSelected()
    {
        return $this->selected;
    }

    public function setSelected($bool)
    {
        $this->selected = $bool;
    }

    public function getIndex()
    {
        return $this->index;
    }

    public function setIndex($index) {
        $this->index = $index;
    }

    public function isHuman()
    {
        return $this->human;
    }

    public function setHuman($human) {
        $this->human = $human;
    }

    public function render()
    {
        // Vérifier si la carte est "revoked"
        $revokedClass = $this->revoked ? " revoke" : "";

        return "
    <div class='card$revokedClass' id='$this->index'>
        
        <h3 class='card-title'>
            " . htmlspecialchars($this->description) . "
            <a href='" . ($this->revoked ? "#" : "#") . "' class='info-btn" . ($this->revoked ? " disabled" : "") . "'>
                i
            </a>
        </h3>
        
        <img src='" . htmlspecialchars($this->image) . "' alt='Image' class='card-image'>
    </div>
    ";
    }

    public static function getCardsFromFile($filePath)
    {
        $jsonData = file_get_contents($filePath);

        $data = json_decode($jsonData, true);

        foreach ($data as $item) {
            $card = new Card($item['description'], $item['image'], $item['human'], $item['related']);
            $cards[] = $card;
        }
        return $cards;
    }



}