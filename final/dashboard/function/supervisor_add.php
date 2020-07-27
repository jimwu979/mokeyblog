<?php
$
$name = $_POST['name'];
$company = $_POST['company'];
$position = $_POST['position'];
$newImage = "./source/". $newId;
// $ = $_POST[''];
// $ = $_POST[''];



// include('connMysql.php');
$newId = $_GET['id'];
$newTitle = $_POST['title'];
$newContent = $_POST['content'];
$newImage = "./source/item_". $newId .".png";

$sql_query = "INSERT INTO step1 (title, content, image) VALUES ('". $newTitle ."','". $newContent ."','". $newImage ."')";
mysqli_query($db_link, $sql_query);
move_uploaded_file($_FILES['image']['tmp_name'], "./source/item_". $newId .".png");
    
?>