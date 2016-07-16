<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 class Video_model extends PIXOLO_Model 
 { 

 
 	 //Write functions here 
     public function load3videos(){
        $query = $this->db->query("SELECT * FROM `videos` ORDER BY `id` desc LIMIT 0,3")->result();
        return $query;
     }
     
     public function load6videos(){
        $query = $this->db->query("SELECT * FROM `videos` ORDER BY `id` desc LIMIT 0,6")->result();
        return $query;
     }
     
     public function next3videos($n){
         $q = "SELECT * FROM `videos` ORDER BY `id` desc LIMIT ".$n.",3";
        $query = $this->db->query($q)->result();
        return $query;
     }
 } 
 
 ?>