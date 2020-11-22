<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tuts</title>
</head>
<body>


    <?php

        $x = 10; //global scope

        function something() {
            $y = 23; //local scope
            echo $GLOBALS['x']; //calling a global scoped variable into $GLOBALS
        }

        something();


    ?>


</body>
</html>