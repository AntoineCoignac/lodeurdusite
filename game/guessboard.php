<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Who Is It? Game</title>
    <style>
        /* Style général */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f3f7fa;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        h1, h2 {
            margin: 0;
            padding: 10px 0;
        }

        h1 {
            font-size: 24px;
            color: #333;
        }

        h2 {
            font-size: 18px;
            color: #555;
        }

        .container {
            width: 80%;
            margin: 20px auto;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        /* Joueur courant */
        .current-player {
            font-size: 18px;
            color: #007BFF;
            font-weight: bold;
            margin-bottom: 20px;
        }

        /* Texte principal */
        .instruction {
            font-size: 16px;
            color: #333;
            margin-bottom: 30px;
        }

        /* Grille de cartes */
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin: 20px auto;
        }

        .card {
            background: #e7eff6;
            border: 2px solid #007BFF;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            color: #333;
            cursor: pointer;
            transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            background: #d9ecf9;
        }

        /* Boutons */
        .actions {
            margin-top: 30px;
        }

        button {
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #0056b3;
        }

        button:active {
            background-color: #00408a;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }

            button {
                width: 100%;
                margin-bottom: 10px;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <div class="current-player">Current Player: [Player Name]</div>
    <div class="instruction">Player [1|2], ask a question to Player [2|1] and try to guess the card.</div>
    <div class="grid">
        <!-- Grille de 9 cartes -->
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
        <div class="card">Card 4</div>
        <div class="card">Card 5</div>
        <div class="card">Card 6</div>
        <div class="card">Card 7</div>
        <div class="card">Card 8</div>
        <div class="card">Card 9</div>
    </div>
    <div class="actions">
        <button>Guess</button>
        <button>Revoke</button>
    </div>
</div>
</body>
</html>
