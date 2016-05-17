<?php 
 defined('BASEPATH') OR exit('No direct script access allowed'); 
 
 header('Access-Control-Allow-Origin: *'); 
 
 class Users extends PIXOLO_Controller { 
 
 	 function __construct(){ 
 	 	 parent::__construct(); 
 
 	 	 $this->load->model('User_Model', 'model'); 
 	 } 

 	 public function index() 
 	 { 
 	 	 $message['json']=$this->model->get_all(); 
 	 	 $this->load->view('json', $message); 
 	 } 
     
     public function signin()
     {
        $email = $this->input->get('email');
        $password = $this->input->get('password');
 	 	$message['json'] = $this->model->signinuser($email, $password);
 	 	$this->load->view('json', $message);
     }
     
      public function signup()
     {
        $email = $this->input->get('email');
        $password = $this->input->get('password');
        $contact = $this->input->get('contact');
 	 	$message['json'] = $this->model->signinuser($email, $password, $contact);
 	 	$this->load->view('json', $message);
     }
     
     
     
 }