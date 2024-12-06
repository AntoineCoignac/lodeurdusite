<?php
$cards = [[
        [
            'name' => 'Cheveux',
            'image' => '../img/cheveux.jpg',
            'type' => 'human'
        ],
        [
            'name' => 'Algues marines',
            'image' => '../img/algues.jpg',
            'type' => 'ocean'
        ]
    ],
    [
        [
            'name' => 'Système lymphatique',
            'image' => '../img/lymphatique.jpg',
            'type' => 'human'
        ],
        [
            'name' => 'Mangroves',
            'image' => '../img/mangroves.jpg',
            'type' => 'ocean'
        ]
    ],
    [
        [
            'name' => 'Squelette',
            'image' => '../img/skull.jpg',
            'type' => 'human'
        ],
        [
            'name' => 'Récifs coralliens',
            'image' => '../img/recif.jpg',
            'type' => 'ocean'
        ]
    ],
    [
        [
            'name' => 'Digestion',
            'image' => '../img/digestion.webp',
            'type' => 'human'
        ],
        [
            'name' => 'Volcan sous-marins',
            'image' => '../img/volcan.jpg',
            'type' => 'ocean'
        ]
    ],
    [
        [
            'name' => 'Peau',
            'image' => '../img/peau.jpg',
            'type' => 'human'
        ],
        [
            'name' => "Surface de l'océan",
            'image' => '../img/surface_ocean.jpg',
            'type' => 'ocean'
        ]
    ],
    [
        [
            'name' => 'Poumons',
            'image' => '../img/poumons.jpg',
            'type' => 'human'
        ],
        [
            'name' => 'Phytoplancton',
            'image' => '../img/phytoplancton.jpg',
            'type' => 'ocean'
        ]
    ]


];

$randomNumber = rand(0, count($cards) - 1);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WatZat</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body class="blue">
    <div class="container">
        <div class="cards">
            <?php foreach ($cards[$randomNumber] as $card): ?>
                <div class="card">
                    <img src="<?php echo $card['image']; ?>" alt="<?php echo $card['name']; ?>">
                    <p class="name"><?php echo $card['name']; ?></p>
                </div>
            <?php endforeach; ?>
        </div>
        <a href="./" class="button">Get new cards</a>
    </div>
    <script src="./gfx.js">
    </script>
</body>
</html>