<?php
session_start();
class jwtHelper {	
	private $_key = "c.6y7";

	public function isValidToken() {
		if(!isset($_SESSION["token"])) return false;
		
		// 回傳的是payload
		if(is_array(self::parseJwt())) {
			return true;
		}
		else {
			return false;
		}	
	}
	
	public function generateToken(string $user_id) {
		$payload = array(
			"id"=>$user_id
		);
		
		self::encode($payload,"c.6y7");
	}
	
	// 解析jwt
	private function parseJwt() {
		return self::decode($_SESSION["token"],"c.6y7");
	}
	
	// 產生簽章
	private static function signature(string $input, string $key, string $alg)
	{
		return hash_hmac($alg, $input, $key);
	}
	
	public static function encode(array $payload, string $key, string $alg = 'SHA256')
	{
		$key = md5($key);
		$jwt = base64_encode(json_encode(['typ' => 'JWT', 'alg' => $alg])) . '.' . base64_encode(json_encode($payload));
		
		// 將token存入session
		$_SESSION["token"] = $jwt . '.' . self::signature($jwt, $key, $alg);
	}
	
	public static function decode(string $jwt,string $key)
	{
		$tokens = explode('.', $jwt);
		$key    = md5($key);
		
		// 結構有誤，JWT應由[header.payload.signature]三個部分組成
		if (count($tokens) != 3)
			return false;
		list($header64, $payload64, $sign) = $tokens;
		
		$header = json_decode(base64_decode($header64), JSON_OBJECT_AS_ARRAY);
		if (empty($header['alg']))
			return false;
		
		if (self::signature($header64 . '.' . $payload64, $key, $header['alg']) !== $sign)
			return false;
		
		$payload = json_decode(base64_decode($payload64), JSON_OBJECT_AS_ARRAY);
		$time = time();

		// 驗時戳
		if (isset($payload['exp']) && $payload['exp'] < $time)
			return false;
		
		return $payload;
	}
}
?>