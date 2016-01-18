<!doctype html>
<html>
	<head>
		<title>Registration Page</title>
		<link rel="StyleSheet" type="text/css" href="register.css">
		<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Tangerine">
		<script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
		<script type="text/javascript" src="register.js"></script>
	</head>
	<body>
		<div id="header">
			<Button onClick="index.html" id="logo" >
				{HACK IN THE NORTH LOGO}
			</Button>
		</div>
		<div id="left_area">
			<br>
			<br>
			Sign in using google and facebook here.
		</div>
		<div id="box_area">
			<form method="POST">
				<br>
				<div class="inputs">
					First Name:    
					<br>
					<input class="fields" type="text" name="username" value="" required>
				</div>
				<br>
				<br>
				<br>
				<div class="inputs">
					Last name:
					<br>
					<input class="fields" type="text" name="lastname" value="" required>
				</div>
				<br>
				<br>
				<br>
				<div class="inputs">
					Email:
					<br>
					<input class="fields" type="email" name="email" value="" required>
				</div>
				<br>
				<br>
				<br>
				<div class="inputs">
					Password:
					<br>
					<input class="fields" type="password" name="password" value="" required>
				</div>
				<br>
				<br>
				<br>
				<div class="inputs">
				<br>
			</form>
		</div>
	</body>
</html>
