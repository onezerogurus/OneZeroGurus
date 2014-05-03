<?php
$firstname = $_POST['fname'];
$lastname = $_POST['lname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['street-address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$bussName = $_POST['business-name'];
$message = $_POST['message'];

$to = "basharfadil@gmail.com";
$subject = "$bussName Website Quote";
$message = "Full Name: $firstname $lastname \n\n
			Email: $email -- Phone: $phone \n\n
			Address: $address \n\n
			City: $city -- State: $state -- Zip Code: $zip \n\n
			Bussiness Name: $bussName \n\n
			Message: $message \n\n";
$from = "$email";
$headers = "From:" . $email;
mail($to,$subject,$message,$headers);
?>

<html>
	<head>
	</head>
	<body>
		<div>
			<h1>Email Has Been Sent</h1>
		</div>

		<a href="../index.html"><button> Back</button></a>
	</body>
</html>