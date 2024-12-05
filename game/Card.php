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
        $revokedClass = $this->revoked ? " revocation" : "";

        return "
    <div style='
        border: 1px solid #ccc; 
        border-radius: 8px; 
        width: 250px; 
        text-align: center; 
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); 
        margin: 10px; 
        overflow: hidden; 
        font-family: Arial, sans-serif; 
        position: relative; 
        " . ($this->revoked ? "filter: brightness(0.7);" : "") . "'>
        
        <h3 style='
            margin: 0; 
            padding: 15px; 
            background-color: #f4f4f4; 
            border-bottom: 1px solid #ddd; 
            font-size: 18px; 
            font-weight: bold; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            position: relative;'>
            
            " . htmlspecialchars($this->description) . "
            
            <a href='" . ($this->revoked ? "#" : "#") . "' style='
                position: absolute; 
                right: 10px; 
                top: 50%; 
                transform: translateY(-50%); 
                text-decoration: none; 
                background-color: " . ($this->revoked ? "#aaa" : "#003366") . "; 
                color: white; 
                padding: 5px 10px; 
                border-radius: 50%; 
                font-size: 12px; 
                font-weight: bold; 
                pointer-events: " . ($this->revoked ? "none" : "auto") . ";'>
                i
            </a>
        </h3>
        
        <img src='" . htmlspecialchars($this->image) . "' 
            alt='Image' 
            style='
                display: block; 
                width: 100%; 
                height: auto;'>
    </div>
    ";
    }



}