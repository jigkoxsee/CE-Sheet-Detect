<?php
$file_val   = urlencode('dcom.html');
$id_val     = urlencode('6');

$str= "?savedfile=".$file_val."&id=".$id_val;

$ch=curl_init();
curl_setopt($ch,CURLOPT_URL,'runDetect.php'.$str);
curl_exec($ch);

$file_val   = urlencode('dcomlab.html');
$id_val     = urlencode('7');
curl_setopt($ch,CURLOPT_URL,'runDetect.php'.$str);
curl_exec($ch);


$file_val   = urlencode('interface.html');
$id_val     = urlencode('150');
curl_setopt($ch,CURLOPT_URL,'runDetect.php'.$str);
curl_exec($ch);

$file_val   = urlencode('probstat.html');
$id_val     = urlencode('154');
curl_setopt($ch,CURLOPT_URL,'runDetect.php'.$str);
curl_exec($ch);

$file_val   = urlencode('dsa.html');
$id_val     = urlencode('158');
curl_setopt($ch,CURLOPT_URL,'runDetect.php'.$str);
curl_exec($ch);

curl_close($ch);

?>