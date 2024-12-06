<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WatZat</title>
    <link rel="icon" type="image/x-icon" href="img/icons/logo.svg">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form class="form">
        <div class="field">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" required>
        </div>
        <button type="button" class="captcha-form-button">
            <span class="captcha-form-checkbox"></span>
            <span class="captcha-form-text">I'm a gros bot</span>
        </button>
        <button type="submit" disabled>
            Continue
        </button>
    </form>
    <?php include 'captcha.php';?>
    <script src="script.js"></script>
</body>
</html>