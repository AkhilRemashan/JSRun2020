<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tuts</title>
</head>
<body>


    <?php

        function perCent($num) {
            $perc = $num * 0.75;
            echo "Here's the 75% of what you entered: " . $perc;
        }

        $num = 100;
        perCent($num);


    ?>


</body>
</html>