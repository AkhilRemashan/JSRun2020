<?php
    include_once 'includes/dbh.inc.php'
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
    // direct sql command selecting users
    $sql = "SELECT * FROM users";

    // connecting db using mysqli_query
    $result = mysqli_query($conn, $sql);

    // checking if connection established 
    $resultCheck = mysqli_num_rows($result);

    if ($resultCheck > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo $row['user_uid'] . "<br>";
        }
    }
?>
    
</body>
</html>