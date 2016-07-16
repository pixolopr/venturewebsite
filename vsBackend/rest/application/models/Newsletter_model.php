<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 class Newsletter_model extends PIXOLO_Model 
 { 

 
 	 //Write functions here 
      public function load4newsletters(){
        $query = $this->db->query("SELECT * FROM `newsletters` ORDER BY `date` desc LIMIT 0,4")->result();
        return $query;
     }
     
     public function load8newsletters(){
        $query = $this->db->query("SELECT * FROM `newsletters` ORDER BY `date` desc LIMIT 0,8")->result();
        return $query;
     }
     
     public function next4newsletters($n){
         $q = "SELECT * FROM `newsletters` ORDER BY `date` desc LIMIT ".$n.",4";
        $query = $this->db->query($q)->result();
        return $query;
     }
 } 
 
 ?>