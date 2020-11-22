<!DOCTYPE html>
<html>
<head>
    <?php include('component/head.php'); ?>
    <link rel="stylesheet" href="css/index.css">
    <title>連猴子都會用的後台系統</title>
</head>
<body>
    <div class="container">
		<?php 
		include('function/jwtUtility.php');
		include('function/loginVerify.php');
		$user_acc = empty($_POST['user_acc']) ? null : $_POST['user_acc'];
		$user_pass = empty($_POST['user_pass']) ? null : $_POST['user_pass'];
		
		if($user_acc!==null && $user_pass!==null) {
			$isValidAcc = isValidAcc($_POST["user_acc"],$_POST["user_pass"]);
			if($isValidAcc) {
				jwtHelper::generateToken($isValidAcc);
			}
		}

		if(jwtHelper::isValidToken()) {
			include('content/index.html');
			include('component/endOfBody.php');
		}
		else {
			header("Location:login.php");
		}
		?>
    </div>
    <script src='plugin/jquery.js'></script>
    <script src='js/main.js'></script>
    <script src='js/index.js'></script>
</body>
</html>