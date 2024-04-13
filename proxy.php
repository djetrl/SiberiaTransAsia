<?php
header("Access-Control-Allow-Origin: *");
$url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=ru";
$response = file_get_contents($url);
echo $response;
?>