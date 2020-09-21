<?php 

$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_secret = '6LcLrc0ZAAAAAAvBixxy91Drul93Cmzsu6FdYdRK';
$recaptcha_response = $_POST['recaptcha_response'];

//Make and decode POST request:
$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
$recaptcha = json_decode($recaptcha);

//如果驗證成功，就進一步計算使用者分數，官方回饋分數為 0-1，分數愈接近 1 就是正常，低於 0.5 以下就有可能是機器人了
if($recaptcha->success==true){
   if($recaptcha->score >= 0.5) {
       echo 'Pass !';
   } else {
       echo 'Spammer';
   }  
} else {
  echo 'Connection failed';
}



// code 來源：  https://bojack.pixnet.net/blog/post/46667961-%E3%80%90%E7%A8%8B%E5%BC%8F%E3%80%91%E6%95%B4%E5%90%88-recaptcha-v3-%E5%88%B0-php-%E7%A8%8B%E5%BC%8F
    
?>