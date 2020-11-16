<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tuts</title>
</head>
<body>
    
    <form method="GET">
        <input type="text" name="fname">
        <button type="submit">SUBMIT</button>
    </form>

    <?php

        $name = "akhil";

        echo $name;

        echo "<br />";

        // 

        echo $name . " is a handsome fellow!";

        // 
        echo "<br />";
        
        $fname = $_GET['fname'];
        echo $fname . " is a good guy";
        

    ?>


</body>
</html>