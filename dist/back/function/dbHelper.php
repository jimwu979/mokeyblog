<?php
include('connMysql.php');

class dbHelper {	
	private $mysqli;
	
	public function __construct() {
		// db connection instance
		$this->mysqli = Database::getInstance()->getConnection();
	}

	/*
	Get rows from tableName
	*/
	public function getRows($tableName) {					
		$sql = "SELECT * FROM ".$tableName;
		$result = mysqli_query($this->mysqli, $sql);
		return $result;
	}

	/*
	Get rows by condition
	*/
	public function getRowsbyCondition($sqlQuery) {		
		$result = mysqli_query($this->mysqli, $sqlQuery);
		return $result;
	}
	
	// TO DO: insert and update helper
}
?>