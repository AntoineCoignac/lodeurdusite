<?php

class Card
{
    private $description;
    private $image;
    private $revoked;
    private $winningCard;
    private $selected;

    public function __construct($_description, $_image)
    {
        $this->description = $_description;
        $this->image = $_image;
        $this->revoked = false;
        $this->winningCard = false;
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

    public function render()
    {
        // Vérifier si la carte est "revoked"
        $revokedClass = $this->revoked ? " revoked" : "";

        return "
    <div class='card$revokedClass'>
        
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




}