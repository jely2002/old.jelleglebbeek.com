<?php

$response = "";

//Receive the RAW post data.
$content = trim(file_get_contents("php://input"));

function json_decode_nice($json, $assoc = FALSE){
    $json = str_replace(array("\n","\r"),"",$json);
    $json = preg_replace('/([{,]+)(\s*)([^"]+?)\s*:/','$1"$3":',$json);
    return json_decode($json,$assoc);
}

//Attempt to decode the incoming RAW post data from JSON.
$decoded = json_decode_nice($content);

$response = $decoded->response;

$post_data = http_build_query(
    array(
        'secret' => 'Key not included because of security reasons.',
        'response' => $response,
        'remoteip' => $_SERVER['REMOTE_ADDR']
    )
);
$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => $post_data
    )
);
$context  = stream_context_create($opts);
$response = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
$result = json_decode($response);
if (!$result->success) {
  echo 'false';
} else {
  echo 'true';
}
?>
