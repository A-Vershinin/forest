<?php

$method = $_SERVER['REQUEST_METHOD'];

$c = true;
if ( $method === 'POST' ) {
	$form_subject  = trim($_POST["form_subject"]);
	$form_name   = trim($_POST["form_name"]);
	$form_email  = trim($_POST["form_email"]);
	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
 $host = 'a.verhsinin@gmail.ru';
 $dbname = 'avershinin';
 $user = 'avershinin';
 $pass = 'QAMuXiMi';

    $conn = mysqli_connect($host, $user, $pass, $dbname);

    if ( ! $conn ) {
        die( "Connection failed: " . mysqli_connect_error() );
    }

    $sql = sprintf(
        "INSERT INTO `my_mail` (user_name, user_email, user_text)
        VALUES ('%s', '%s', '%s')",
        $form_name,
        $form_email,
        $form_subject
    );

    if ( ! mysqli_query( $conn, $sql ) ) {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close( $conn );
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );
