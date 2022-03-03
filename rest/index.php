<?php
    require(__DIR__."/headers.php");

    require(__DIR__."/core.php");

    require(__DIR__."/rest.php");
 
    if(!isset($_GET['action'])) {
        apiError('No method specify');
    }
    elseif(!in_array($_GET['action'], $allowed_methods)) {
        apiError('Method is not allowed');
    }


    function curl_get_contents($url)
{
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);

    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}
    $type = $_GET['type'];
    $action = $_GET['action'];
    $page = $_GET['page'];
    $category = $_GET['category'];

    try {
        if($_GET['action'] && $_GET['type'] === 'top-news') {
           call_user_func(camelcase($action) . '::' . camelcase('general'));
        }
        elseif($_GET['action'] && $_GET['type'] === 'sources') {
            call_user_func(camelcase($action) . '::' . camelcase('sources'));
        }
        elseif($_GET['action'] && $_GET['type'] === 'everything') {
            call_user_func(camelcase($action) . '::' . camelcase('everything'));
        }
        elseif($_GET['action'] && $_GET['type'] === 'search-in-top') {
            call_user_func(camelcase($action) . '::' . camelcase('search'));
        }
       
    }
    catch(Exception $e) {
        apiError('Method is not exist');
    }

?>