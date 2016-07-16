<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width:device-width, initial-scale:1">
    <title>Venture Startups Admin Panel</title>
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="<?php echo base_url('/assets/materialize/css/materialize.css'); ?>" rel="stylesheet">
    <link href="<?php echo base_url('/assets/admin.css'); ?>" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
</head>

<body>
    <nav>
        <div class="navbar-wrapper">
            <div id="menu" class="left center">
                <div id="nav-icon3">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                </div>
            </div>
            <a href="#" class="brand-logo center">Venture Startups Admin Panel</a>
            <ul class="right hide-on-med-and-down">
                <li>
                    <a class="dropdown-button left" href="#" data-activates='dropdown1'>
                        <i class="material-icons md-36 left" style="margin:5% 0%">person</i>
                        <p class="nomarg left " ><?php echo ucfirst($this->sessiondata['email']); ?></p>
                        <i class="material-icons left" style="margin-top:12%">arrow_drop_down</i>
                    </a>
                    <ul id="dropdown1" class="dropdown-content">
                        <li>
                            <a href="<?php echo site_url('/welcome/logout'); ?>">
                                <i class="material-icons md-36 left nomarg">power_settings_new</i>
                                Logout
                            </a>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    </nav>
    <div class="admin_panel"></div>

    <div>
        <ul class="side-nav">
            <li><a href="<?php echo site_url('/').'welcome/dashboard'; ?>">Dashboard</a></li>

            <?php foreach($this->tables as $tablename) { ?>
            <li><a href="<?php echo site_url('/').$tablename->TABLE_NAME.'/getdataview'; ?>"><?php echo $tablename->TABLE_NAME; ?></a></li>
            <?php }; ?>

        </ul>

    </div>

    <div class="container">
    <h2>Welcome <?php echo ucfirst($this->sessiondata['email']); ?>,</h2>
    <h3>this is your dashboard for the website www.venturestartups.in</h3>

    <div class="row">
        <div class="col-md-6" style="text-align:center">
            <i class="material-icons" style="font-size:100px;">face</i>
            
            <h3>Number of Users</h3>
            <h4><?php echo $usercount->count; ?></h4>
        </div>
        <div class="col-md-6"  style="text-align:center">
            <i class="material-icons" style="font-size:100px;">insert_drive_file</i>
            
            <h3>Number of Newsletters</h3>
            <h4><?php echo $newscount->count; ?></h4>
        </div>
         
        

    </div>
    <div>
        <h3>Manage your website section</h3>
    </div>
    <div class="row">
       <a href="<?php echo site_url('/').'users/getdataview'; ?>" class="col-md-2" style="text-align:center">
           <i class="material-icons" style="font-size:80px;">face</i>
           <h4>Users</h4>
       </a>
       <a  href="<?php echo site_url('/').'nesletters/getdataview'; ?>" class="col-md-2" style="text-align:center">
           <i class="material-icons" style="font-size:80px;">insert_drive_file</i>
           <h4>Newspapers</h4>
       </a>
       <a  href="<?php echo site_url('/').'photos/getdataview'; ?>" class="col-md-2" style="text-align:center">
           <i class="material-icons" style="font-size:80px;">wallpaper</i>
           <h4>Photos</h4>
       </a>
       <a  href="<?php echo site_url('/').'videos/getdataview'; ?>" class="col-md-2" style="text-align:center">
           <i class="material-icons" style="font-size:80px;">videocam</i>
           <h4>Videos</h4>
       </a>
       <a  href="<?php echo site_url('/').'tags/getdataview'; ?>" class="col-md-2" style="text-align:center">
           <i class="material-icons" style="font-size:80px;">book</i>
           <h4>Tags</h4>
       </a>
       <a  href="<?php echo site_url('/').'events/getdataview'; ?>" class="col-md-2" style="text-align:center">
           <i class="material-icons" style="font-size:80px;">&#xE878;</i>
           <h4>Events</h4>
       </a>
        
        
        
        
        
        
    </div>
    
    </div>





    <script type="text/javascript" src="<?php echo base_url('/assets/materialize/js/jquery.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url('/assets/materialize/js/materialize.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url('/assets/main.js'); ?>"></script>
    
    <div style="height:50px"></div>
</body>


</html>
