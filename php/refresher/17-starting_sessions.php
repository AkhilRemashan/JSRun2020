<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tuts</title>
</head>
<body>

    <ul>
        <li><a href="index.php">Page 1</a></li>
        <li><a href="14-function.php">Page 2</a></li>
    </ul>

    <h4>main page</h4>

    <br /><br />

    <?php

        $_SESSION['login'] = "akil006";
        echo $_SESSION['login'];

        if (!isset($_SESSION['login'])) {
            echo "you're not logged in";
        }
        else{
            echo "you're logged in";
        }
        
    ?>


</body>
</html>