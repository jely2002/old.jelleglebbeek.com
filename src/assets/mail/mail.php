<?php

    if(isset($_POST['first_name']) && isset($_POST['last_name']) && isset($_POST['email']) && isset($_POST['message'])) {

    $email_to = "contact@jelleglebbeek.com";
    $email_subject = "New form entry";

    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email_from = $_POST['email'];
    $message = $_POST['message'];

    $email_message = "Form details below.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
echo 'true';
} else {
  echo 'false';
}
?>
