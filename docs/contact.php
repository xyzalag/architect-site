<?php

$firstName = $_POST['firstName'];

$lastName = $_POST['lastName'];

$email = $_POST['email'];

$message = $_POST['message'];

mail ("vovamonin@gmail.com", "Contact from the site", $message, "From: $email\r\n");

echo "Thank You!";

 ?>

