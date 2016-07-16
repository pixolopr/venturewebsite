<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 header('Access-Control-Allow-Origin: *'); 
 
 class Photos extends PIXOLO_Controller { 
 
 	 function __construct(){ 
 	 	 parent::__construct(); 
 
 	 	 $this->load->model('Photo_model', 'model'); 
 	 } 

 	 public function index() 
 	 { 
 	 	 $message['json']=$this->model->get_all(); 
 	 	 $this->load->view('json', $message); 
 	 } 
     
     
    
    public function load6photos(){
        $message['json']=$this->model->load6photos();
		$this->load->view('json', $message);
    }
     public function load16photos(){
     $message['json']=$this->model->load16photos();
		$this->load->view('json', $message);
     }
    public function next8photos(){
        $n = $this->input->get("count");
        $message['json']=$this->model->next8photos($n);
		$this->load->view('json', $message);
     }
 }