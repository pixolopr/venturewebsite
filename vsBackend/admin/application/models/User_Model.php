<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 class User_model extends PIXOLO_Model 
 { 

 
 	 //Write functions here 
     public function getusercount(){
         $query = $this->db->query("SELECT count(*) AS 'count' FROM `users`")->row();
         return $query;
     }
     public function getnewscount(){
         $query = $this->db->query("SELECT count(*) AS 'count' FROM `newsletters`")->row();
         return $query;
     }
 } 
 
 ?>