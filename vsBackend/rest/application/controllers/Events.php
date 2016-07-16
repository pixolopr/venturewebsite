<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 header('Access-Control-Allow-Origin: *'); 
 
 class Events extends PIXOLO_Controller { 
 
 	 function __construct(){ 
 	 	 parent::__construct(); 
 
 	 	 $this->load->model('Event_model', 'model'); 
 	 } 

 	 public function index() 
 	 { 
 	 	 $message['json']=$this->model->get_all(); 
 	 	 $this->load->view('json', $message); 
 	 } 
     
     public function load4events(){
        $message['json']=$this->model->load4events();
		$this->load->view('json', $message);
    }
     public function load8events(){
     $message['json']=$this->model->load8events();
		$this->load->view('json', $message);
     }
    public function next4events(){
        $n = $this->input->get("count");
        $tagarray = $this->input->get("tagarray");
        $tagarray = json_decode($tagarray);
        $message['json']=$this->model->next4events($n, $tagarray);
		$this->load->view('json', $message);
     }
     public function tagfilter(){
        $tagarray = $this->input->get('tagarray');
        $tagarray = json_decode($tagarray);
        $message['json'] = $this->model->tagfilter($tagarray);   
		$this->load->view('json', $message); 
     }
 }