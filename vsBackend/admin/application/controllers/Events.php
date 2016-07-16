<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');

class Events extends PIXOLO_Controller {
function __construct()

{	parent::__construct();

	//LOAD MODEL
	$this->load->model('Event_model', 'model');

	//DATABSE INFO//
	//ABOUT THIS TABLE
	$this->table=$this->model->getschemainfo();
	$this->tablename = 'events';
	//ALL TABLES LIST FOR MENU
	 $this->tables = $this->model->gettablelist();

	//CHECK LOGIN SESSION
	if($this->session->userdata('isloggedin') != 1)
	{
		redirect('Welcome/login');
 	}else{
		$this->sessiondata = $this->session->get_userdata();
 	};

		$this->load->helper(array('form', 'url'));

		//PAGINATION STUFF
 		$this->load->library('pagination');
		$this->perpagedata = 10;

		//SPECIFIES IN WHAT ORDER TO ARRANGE DATA
		$this->order = '';

	}

	public function index()
	{
		$message['json']=$this->model->get_all();
		$this->load->view('json', $message);
	}

    public function create(){
        $message['users']=$this->model->getschemainfo();
         $message['inputtype']="insert";
         foreach($message['users'] as $field)
         {
             $field->value = '';
         };
         foreach($this->table as $fields)
         {
              //GET ALL NAMES FOR THE DROPDOWN VALUES
              if(substr($fields->COLUMN_COMMENT,0,8) == 'dropdown')
              {
                  $dcol = $fields->COLUMN_NAME;
                  $dropdetails = explode('|', substr($fields->COLUMN_COMMENT,9));
                  $dtab = $dropdetails[0];
                  $dfld = $dropdetails[1];
                  $dropdown[$fields->COLUMN_NAME] =$this->db->query("SELECT `id`,`$dfld` as `name` FROM `$dtab`")->result();
                  $message['dropdown'] = $dropdown;
              };
         };
        $this->load->model('Tag_model');
        $message['tags'] = $this->Tag_model->get_all();
         $this->load->view('createevent',$message);
    }
    
    public function eventdatainsertion($insertdata, $inserttype, $id, $tagarray)
      {
          
        foreach($this->table as $fields)
        {

            if(substr($fields->COLUMN_COMMENT,0,4)!='file'&& $fields->COLUMN_COMMENT!='id' && $fields->COLUMN_COMMENT!='now')
            {
                 //INSERT PASSWORD FIELD AFTER HASHING
                 if($fields->COLUMN_COMMENT=='password')
                 {
                       $data[$fields->COLUMN_NAME]=sha1($insertdata[$fields->COLUMN_NAME]);
                 }else
                 {
                     //INSERT DATE FIELD
                     if($fields->COLUMN_COMMENT=='date'){
                         $data[$fields->COLUMN_NAME] = date('Y-m-d', strtotime($insertdata[$fields->COLUMN_NAME]));
                     }else{
                         //INSERT TIME FIELD
                         if($fields->COLUMN_COMMENT=='time')
                         {
                             $data[$fields->COLUMN_NAME] = $insertdata[$fields->COLUMN_NAME].":00";
                         }else{
                             //INSERT INSERTUSER FIELD
                             if($fields->COLUMN_COMMENT=='insertuser')
                             {
                                 $data[$fields->COLUMN_NAME]=$this->session->userdata('id');
                             }else{
                                 $data[$fields->COLUMN_NAME]=$insertdata[$fields->COLUMN_NAME];
                             };
                         }
                     }
                }
            }else {
            if(substr($fields->COLUMN_COMMENT,0,4)=='file')
            {
                
               $allowedtype = substr($fields->COLUMN_COMMENT,6);
               $allowedtype = str_replace(",.","|",$allowedtype);
                
$config = array();
                print_r($config);
               $config['upload_path'] = '../uploads/';
               $config['allowed_types'] = '*';/*$allowedtype ;*/
               $config['max_size']	= '200000';
               $config['max_width']  = '5000';
               $config['max_height']  = '5000';

               $newFileName = $_FILES[$fields->COLUMN_NAME]['name'];
               $extention = explode(".", $newFileName);
               $newFileName = $extention[0];
               $fileExt = array_pop($extention);
               $filename = md5(time().$newFileName).".".$fileExt;
                
                print_r($filename);

               //set filename in config for upload
               $config['file_name'] = $filename;               
            
            
            $this->upload->initialize($config);
              
            if ( ! $this->upload->do_upload($fields->COLUMN_NAME))
              {
                $error = array('error' => $this->upload->display_errors());
                  print_r($error);
              }
              else
              {
                $data[$fields->COLUMN_NAME] = $filename;
                  print_r($filename);
              }
                $this->upload = null;
            };
          };
        };

        if($inserttype=="insert"){
            $this->model->insert($data);
            $num_inserts = $this->db->affected_rows();
            $message['insertedid'] = $this->db->insert_id();
            print_r($num_inserts);            
        }else{
            $message['insertedid']=$this->model->update($id, $data);
            $this->model->cleartags($message['insertedid']);
        };
        foreach($tagarray as $tagid){
            $this->model->addeventtag($message['insertedid'], $tagid);
        }
        redirect("$this->tablename/getdataview");
      }
    
    public function insertdata(){
        foreach($this->table as $fields)
         {
            $inputdata[$fields->COLUMN_NAME] = $this->input->post($fields->COLUMN_NAME);
         };
        $this->eventdatainsertion($inputdata, "insert", null, $_POST['result']);
    }
}