<?php
	// funtion to check is JSON is complete
    function isJson($string) {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }
    $data=$_POST['data'];
    echo "hello JSON";
    echo isJson($data);
    $dat=json_encode($data);
    // compare $data with in MySQL db.
    include 'connectdb.php'
?>
