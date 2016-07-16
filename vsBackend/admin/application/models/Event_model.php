<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 class Event_model extends PIXOLO_Model 
 { 

 
 	 //Write functions here 
     
     public function cleartags($id){
        $query = $this->db->query("DELETE FROM `eventtag` WHERE `eventid` = ".$id);
     }
     
     public function addeventtag($eventid, $tagid){
        $query = $this->db->query("INSERT INTO `eventtag` (`eventid`, `tagid`) VALUES (".$eventid.",".$tagid.")");
     }
 } 
 
 ?>