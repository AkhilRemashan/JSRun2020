<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tuts</title>
</head>
<body>
    

    <?php

       $hello = "hey, akhil!";

        //  string length
        echo strlen($hello);
        echo "<br />";

        // word count
        echo str_word_count($hello);
        echo "<br />";

        // str reverse
        echo strrev($hello);
        echo "<br />";

        // str position
        echo strpos($hello, "akhil");
        echo "<br />";

        // str replace
        echo str_replace("akhil", "there", $hello);
   

    ?>


</body>
</html>