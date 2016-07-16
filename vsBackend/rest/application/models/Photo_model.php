<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 class Photo_model extends PIXOLO_Model 
 { 

 
 	 //Write functions here 
     public function load6photos(){
        $query = $this->db->query("SELECT * FROM `photos` ORDER BY `id` desc LIMIT 0,6")->result();
        return $query;
     }
     
     public function load16photos(){
        $query = $this->db->query("SELECT * FROM `photos` ORDER BY `id` desc LIMIT 0,16")->result();
        return $query;
     }
     
     public function next8photos($n){
         $q = "SELECT * FROM `photos` ORDER BY `id` desc LIMIT ".$n.",8";
        $query = $this->db->query($q)->result();
        return $query;
     }
 } 
 
 ?>