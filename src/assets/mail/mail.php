<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$first_name = $last_name = $email = $message = "";

//Receive the RAW post data.
$content = trim(file_get_contents("php://input"));

function json_decode_nice($json, $assoc = FALSE){
    $json = str_replace(array("\n","\r"),"",$json);
    $json = preg_replace('/([{,]+)(\s*)([^"]+?)\s*:/','$1"$3":',$json);
    return json_decode($json,$assoc);
}

//Attempt to decode the incoming RAW post data from JSON.
$decoded = json_decode_nice($content);

$first_name = $decoded->first_name;
$last_name = $decoded->last_name;
$email = $decoded->email;
$message = $decoded->message;

mail("contact@jelleglebbeek.com", "New form entry from " . $first_name, "Name: " . $first_name . " " . $last_name . "\n" . "E-mail: " . $email . "\n" . "Message: " . $message);

?>
