<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends PIXOLO_Controller {

function __construct()
 	 {
 	 	 parent::__construct();

 	 	 //LOAD MODEL
	$this->load->model('User_Model', 'model');

	//DATABSE INFO//
	//ALL TABLES LIST FOR MENU
	 $this->tables = $this->model->gettablelist();
     $this->load->helper('url');
    
    
    
 	 }
    
	public function index()
	{
		$this->load->view('login');
	}

    public function login()
    {
         $this->load->view('login') ;

      }
     public function logincheck()
     {
         $data['email']=$this->input->get('email');

         $data['password']=  sha1($this->input->get('password'));

         $userdata = $this->db->query("select * from `users` where `email`='$data[email]' and `password`='$data[password]' and `access` = '1'")->row();

         if(count($userdata)){
            $data = array(
                'id' => $userdata->id,
                'name' => $userdata->name,
                'email' => $userdata->email,
                'password' => $userdata->password,
                'isloggedin'=>true
            );
            $this->session->set_userdata($data);
             print_r($data);
             redirect('welcome/dashboard');
            }else{
                $this->session->set_flashdata('error', 'email and password dont match');
                redirect('welcome/login');
            };
         }

         public function logout()
         {
            $this->session->sess_destroy();
            redirect('welcome/login');
         }

         public function dashboard()
         {
             //CHECK LOGIN SESSION
            if($this->session->userdata('isloggedin') != 1)
            {
                redirect('Welcome/login');
            }else{
                $this->sessiondata = $this->session->get_userdata();
            };
             $message['usercount'] = $this->model->getusercount();
             $message['newscount'] = $this->model->getnewscount();
            $this->load->view('dashboard', $message);
         }

}
