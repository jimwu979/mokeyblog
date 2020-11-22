<?php
	include('dbHelper.php');

	function isValidAcc(string $user_acc, string $user_pass) {
		$helper = new dbHelper();
		$sql = "SELECT user_pass,user_id FROM user WHERE user_acc='".$user_acc."';";

		$result = $helper->getRowsbyCondition($sql);
		$row = mysqli_fetch_row($result);
		
		if(hash('sha256',$user_pass.$user_acc) == $row[0])
			return $row[1];
		else 
			return false;
	}
?>