<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tuts</title>
</head>
<body>


    <?php

        // cookie 
        $_COOKIE("cookie_name", "cookie_value", time() + 86400);

        // session
        $_SESSION['session_name'] = "session_value_string";

    ?>


</body>
</html>