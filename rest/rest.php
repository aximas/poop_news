<?php 

$allowed_methods = array(
    'rpn'
);



class RPN {
    public static function General() {
        $page = $_GET['page'] ?? 1;
        $category = $_GET['category'] ?? 'general';
        $country = $_GET['country'] ?? 'us';
        $pagesize = $_GET['pageSize'] ?? 10;
        
        // $url = "https://newsdata.io/api/1/news?page={$page}&category={$category}&language={$language}&apikey=pub_".API_KEY;
        $url = "https://newsapi.org/v2/top-headlines?category={$category}&country={$country}&pageSize={$pagesize}&page={$page}&apiKey=".API_KEY;

        echo curl_get_contents($url);    
    }

    public static function Everything() {
        $page = $_GET['page'] ?? 1;
        $language = $_GET['language'] ?? 'en';
        $pagesize = $_GET['pageSize'] ?? 10;
        $sources = $_GET['sources'] ?? 'CNN';
        
        $url = "https://newsapi.org/v2/everything?language={$language}&sources={$sources}&pageSize={$pagesize}&page={$page}&apiKey=".API_KEY;

        echo curl_get_contents($url);    
    }
   
    public static function Sources() {
        
        $url = "https://newsapi.org/v2/top-headlines/sources?apiKey=".API_KEY;
        
        echo curl_get_contents($url);    
    }

    public static function Search() {
        $page = $_GET['page'] ?? 1;
        $pagesize = $_GET['pageSize'] ?? 10;
        $searchquery = $_GET['searchQuery'];
        
        $url = "https://newsapi.org/v2/top-headlines?q={$searchquery}&pageSize={$pagesize}&page={$page}&apiKey=".API_KEY;
        
        echo curl_get_contents($url);    
    }
}