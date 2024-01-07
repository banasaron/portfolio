<?php 

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail-> isSMTP();
$mail-> SMTPAuth = true;

$mail-> Host = "smtp.gmail.com";
$mail-> SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail-> Port = 587;

$mail->Username = "aronbanas.kontakt@gmail.com";
$mail->Password = "htituvxcmyulvpgt";

$mail->setFrom($email, $name);
$mail->addAddress("aronbanas.kontakt@gmail.com", "Aron");

$mail->Subject = $subject;
$mail->isHTML(true);
$mail->Body = "
    <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #4285f4;
                }
                p {
                    line-height: 1.6;
                    font-size: 1.2em;
                }
            </style>
        </head>
        <body>
            <div class='container'>
                <h1>$subject</h1>
                <p>Imię i nazwisko użytkownika: <b>$name</b></p>
                <p>Email użytkownika: <b>$email</b></p>
                <blockquote>$message</blockquote>
            </div>
        </body>
    </html>
";

try {
    $mail->send();
    echo "
    <script>
        document.location.href = 'index.html';
        alert('Wiadomość została pomyślnie wysłana!');
    </script>
    ";
} catch (Exception $e) {
    echo "<script> alert('Wiadomość nie może zostać wysłana.<br> Opis błędu: {$mail->ErrorInfo}'); </script>";
}
?>