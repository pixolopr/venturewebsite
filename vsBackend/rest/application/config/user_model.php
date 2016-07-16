<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 class User_Model extends PIXOLO_Model 
 { 

 
 	 public function signinuser($email, $password)
 	 {
 	 	$query = $this->db->query("SELECT * FROM `users` WHERE `email`= '$email'");
 		
 		if ($query->num_rows() > 0)
 			{
            $query = $query->row();
            if(sha1($password) == $query->password){
                return $query;
            }else{
                return false;
            };
 		     
 			}
 		else
 		   {
	 		   	 return false;
             
 		   	}
 	 }
     
     public function checkuser($email, $password, $contact)
 	 {
 	 	$query = $this->db->query("SELECT * FROM `users` WHERE `email`='$email'");
 		
 		if ($query->num_rows() > 0)
 			{
 		         return false;
 			}
 		else
 		   {
	 		   	 return true;
             
 		   	}
 	 }
     
     public function subscribe($email){
         $query = $this->db->query("SELECT * FROM `users` WHERE `email`='$email'");
 		
 		if ($query->num_rows() > 0)
 			{
 		        $query = $this->db->query("UPDATE `users` SET `subscription`=1 WHERE `email`='$email'");
                return $query;
 			}
 		else
 		   {
	 		   	 return false;
             
 		   	}
         
     }
 } 
 
 ?>