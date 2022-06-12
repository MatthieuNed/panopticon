<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $host = "3wa";
        $username = "matthieuned";
        $password = "";
        $database = "Registration";
    
        $lastName = $_POST['lastName'];
            $firstName = $_POST['firstName'];
            $email = $_POST['email'];
            $comment = $_POST['comment'];
    
            $mysqli = new mysqli($host, $username, $password, $database);
    
                if ($mysqli->connect_error) {
          die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
        }  
        $statement = $mysqli->prepare("INSERT INTO users (lastName, firstName, email, comment) VALUES(?, ?)");
    
        $statement->bind_param('ss', $lastName, $firstName, $email, $comment); 
}
?>