<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 header('Access-Control-Allow-Origin: *'); 
 
 class Videos extends PIXOLO_Controller { 
 
 	 function __construct(){ 
 	 	 parent::__construct(); 
 
 	 	 $this->load->model('Video_model', 'model'); 
 	 } 

 	 public function index() 
 	 { 
 	 	 $message['json']=$this->model->get_all(); 
 	 	 $this->load->view('json', $message); 
 	 } 
     
     public function load3videos(){
        $message['json']=$this->model->load3videos();
		$this->load->view('json', $message);
    }
     public function load6videos(){
     $message['json']=$this->model->load6videos();
		$this->load->view('json', $message);
     }
    public function next3videos(){
        $n = $this->input->get("count");
        $message['json']=$this->model->next3videos($n);
		$this->load->view('json', $message);
     }
 }