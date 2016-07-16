<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 header('Access-Control-Allow-Origin: *'); 
 
 class Newsletters extends PIXOLO_Controller { 
 
 	 function __construct(){ 
 	 	 parent::__construct(); 
 
 	 	 $this->load->model('Newsletter_model', 'model'); 
 	 } 

 	 public function index() 
 	 { 
 	 	 $message['json']=$this->model->get_all(); 
 	 	 $this->load->view('json', $message); 
 	 } 
     
     public function load4newsletters(){
        $message['json']=$this->model->load4newsletters();
		$this->load->view('json', $message);
    }
     public function load8newsletters(){
     $message['json']=$this->model->load8newsletters();
		$this->load->view('json', $message);
     }
    public function next4newsletters(){
        $n = $this->input->get("count");
        $message['json']=$this->model->next4newsletters($n);
		$this->load->view('json', $message);
     }
 }