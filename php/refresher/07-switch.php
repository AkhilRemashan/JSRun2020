<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tuts</title>
</head>
<body>
    

    <?php

        $x = "hey";
        
        switch ($x) {
            case 1:
               echo "it's one!";
            break;
            case "hey":
                echo "it's a hey!";
            break; 
            default:
                echo "what's x?";
        }

    ?>


</body>
</html>