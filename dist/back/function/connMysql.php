<?php
/*
* create db connection(singleton)
*/
class Database {	
	// db connection info
	private $_host = "localhost";
	private $_username = "dev";
	private $_password = "1j4xji4ek6";
	private $_database = "blog";
	
	//The single instance
	private static $_instance; 
	private $_connection;

	/*
	Get an instance of the Database
	@return Instance
	*/
	public static function getInstance() {
		if(!self::$_instance) { // If no instance then make one
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	// Constructor
	private function __construct() {
		$this->_connection = new mysqli($this->_host, $this->_username, 
			$this->_password, $this->_database);
	
		// Error handling
		if(mysqli_connect_error()) {
			trigger_error("資料庫連線錯誤: " . mysqli_connect_error(),
				 E_USER_ERROR);
		}
	}

	// Magic method clone is empty to prevent duplication of connection
	private function __clone() { }

	// Get mysqli connection
	public function getConnection() {
		return $this->_connection;
	}
}
?>