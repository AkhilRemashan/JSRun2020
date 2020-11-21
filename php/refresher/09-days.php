<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tuts</title>
</head>
<body>
    

    <?php

        $day = date("w");

        switch($day) {
            case 1:
                echo "Its Monday!";
            break; 
            case 2:
                echo "Its Tuesday!";
            break; 
            case 3:
                echo "Its Wednesday!";
            break; 
            case 4:
                echo "Its Thursday!";
            break; 
            case 5:
                echo "Its Friday!";
            break; 
            case 6:
                echo "Its Saturday!";
            break; 
            case 0:
                echo "Yay, Sunday!!";
            break;  
        }

    ?>


</body>
</html>