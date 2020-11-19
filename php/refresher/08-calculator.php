<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tuts</title>
</head>
<body>
    

    <form method="get">

        <input type="text" name="num1" placeholder="First Number">
        <br><br>
        <input type="text" name="num2" placeholder="Second Number">
        <br><br>
        <select name="operator">
            <option>none</option>
            <option>add</option>
            <option>substract</option>
            <option>multiply</option>
            <option>divide</option>
        </select>
        <br><br>
        <button type="submit" name="submit" value="submit">Calculate</button>
    </form>

    <p>
        Answer: 
    </p>

    <?php

        if (isset($_GET['submit'])){
            $num1 = $_GET['num1'];
            $num2 = $_GET['num2'];
            $oper = $_GET['operator'];

            switch($oper) {
                case "none":
                    echo "choose an operator";
                break;
                case "add":
                    echo $num1 + $num2;
                break;
                case "substract":
                    echo $num1 - $num2;
                break;
                case "multiply":
                    echo $num1 * $num2;
                break;
                case "divide":
                    echo $num1 / $num2;
                break; 
                default:
                    echo "choose valid operator";
            }
        }

    ?>


</body>
</html>