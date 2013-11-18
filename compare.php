<?php
    function isJson($string) {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }
    echo "hello JSON<br/>";
    echo isJson($_POST['data']);
?>