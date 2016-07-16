<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 class Event_model extends PIXOLO_Model 
 { 

 
 	 //Write functions here 
      public function load4events(){
        $query1 = $this->db->query("SELECT *, IF(`timestamp` > now(), 'true', 'false') AS `status` FROM `events` WHERE `timestamp` > now() ORDER BY `timestamp` desc LIMIT 0,2")->result();
        $query2 = $this->db->query("SELECT *, IF(`timestamp` > now(), 'true', 'false') AS `status` FROM `events` WHERE `timestamp` < now() ORDER BY `timestamp` desc LIMIT 0,2")->result();
          foreach($query2 as $ele){
         array_push($query1,$ele);
          }
        return $query1;
     }
     
     public function load8events(){
        $query = $this->db->query("SELECT *,IF(`timestamp` > now(), 'true', 'false') AS `status` FROM `events` ORDER BY `events`.`timestamp` desc LIMIT 0,8")->result();
         foreach($query as $row){
            $q = $this->db->query("SELECT * FROM `eventtag` INNER JOIN `tags` ON `eventtag`.`tagid` = `tags`.`id` WHERE `eventtag`.`eventid` = $row->id")->result();
             $row->tags = $q;
         }
        return $query;
     }
     public function next4events($n, $tagarray){
        if(count($tagarray) == 0)
        {
            $query = $this->db->query("SELECT *,IF(`timestamp` > now(), 'true', 'false') AS `status` FROM `events` ORDER BY `events`.`timestamp` desc LIMIT ".$n.",4")->result();
         foreach($query as $row){
            $q = $this->db->query("SELECT * FROM `eventtag` INNER JOIN `tags` ON `eventtag`.`tagid` = `tags`.`id` WHERE `eventtag`.`eventid` = $row->id")->result();
             $row->tags = $q;
         }
            return $query;
            
        }else{
            $in = "";
            foreach($tagarray as $key=>$tag)
            {
                if($key == 0)
                {
                    $in .= $tag;
                }else{
                    $in .= ",".$tag; 
                };
            }
            $query = $this->db->query("SELECT `events`.`id` AS `id`,`events`.`name` AS `name`,`events`.`venue` AS `venue`,`events`.`timestamp` AS `timestamp`,`events`.`purpose` AS `purpose`,`events`.`image` AS `image`, `events`.`guest_speaker` AS `guest_speaker`,COUNT(*) AS `count` FROM `events` INNER JOIN `eventtag` ON `events`.`id` = `eventtag`.`eventid` WHERE `eventtag`.`tagid` IN (".$in.") GROUP BY `events`.`name` HAVING COUNT(*) =".count($tagarray)." LIMIT ".$n." ,4")->result();
            foreach($query as $row){
            $q = $this->db->query("SELECT * FROM `eventtag` INNER JOIN `tags` ON `eventtag`.`tagid` = `tags`.`id` WHERE `eventtag`.`eventid` = $row->id")->result();
             $row->tags = $q;
         }
            return $query;
            
        };
     }
     
     public function tagfilter($tagarray){
        if(count($tagarray) == 0)
        {
            $query = $this->db->query("SELECT *, IF(`timestamp` > now(), 'true', 'false') AS `status` FROM `events` ORDER BY `events`.`timestamp` desc LIMIT 0,8")->result();
         foreach($query as $row){
            $q = $this->db->query("SELECT * FROM `eventtag` INNER JOIN `tags` ON `eventtag`.`tagid` = `tags`.`id` WHERE `eventtag`.`eventid` = $row->id")->result();
             $row->tags = $q;
         }
            return $query;
            
        }else{
            $in = "";
            foreach($tagarray as $key=>$tag)
            {
                if($key == 0)
                {
                    $in .= $tag;
                }else{
                    $in .= ",".$tag; 
                };
               //
            }
            $query = $this->db->query("SELECT IF(`events`.`timestamp` > now(), 'true', 'false') AS `status`, `events`.`id` AS `id`,`events`.`name` AS `name`,`events`.`venue` AS `venue`,`events`.`timestamp` AS `timestamp`,`events`.`purpose` AS `purpose`,`events`.`image` AS `image`, `events`.`guest_speaker` AS `guest_speaker`,COUNT(*) AS `count` FROM `events` INNER JOIN `eventtag` ON `events`.`id` = `eventtag`.`eventid` WHERE `eventtag`.`tagid` IN (".$in.") GROUP BY `events`.`name` HAVING COUNT(*) =".count($tagarray))->result();
            foreach($query as $row){
            $q = $this->db->query("SELECT `tags`.`name`,`tags`.`id` FROM `eventtag` INNER JOIN `tags` ON `eventtag`.`tagid` = `tags`.`id` WHERE `eventtag`.`eventid` = $row->id")->result();
             $row->tags = $q;
         }
            return $query;
            
        };
     }
 } 
 
 ?>