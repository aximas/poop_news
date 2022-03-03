<?php 
define('API_KEY', '762bdd86d8c04845ac68e0c1bd4b61a2');

function JSON($arr = array()) {
    return json_encode($arr);
}

function apiError($msg) {
    echo JSON(array(
        'error' => true,
        'message' => $msg
    ));
}

function camelcase($str, $delimiter = '_') {
    return str_replace($delimiter, '', ucwords($str, $delimiter));
}

