<?php
	 header("Access-Control-Allow-Origin: *");
	
    $name= $_GET['name'];
   
        $email = $_GET['email'];
        $name = $_GET['name'];
        $message= $_GET['message'];
        $subject= $_GET['subject'];
    
    $body = 'Name: ' . $name . "\n\n" .'Subject: '. $subject. "\n\n". 'Email: ' . $email . "\n\n" . 'Message: ' . $message. "\n\n" . 'You cannot reply to this email';
    
    
    if (mail("ramkumar100@hotmail.com","Message from Venture Startups Website", $body, 'From: <hello@sprinterssportsclub.com>')) {
            echo 'true';
        } else { 
            echo 'false'; 
        };

        

 

?>