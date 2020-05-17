<?php            
			
			
			// Insert members page 
            
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                echo "<h1 class='text-center'>Insert Member</h1>";
                echo "<div class='container'>";   

                // Get variables from the form
    
                $user       = $_POST['username'];
                $pass       = $_POST['password']; // Here it will get the password  
                $email      = $_POST['email'];    // If it empty it will not send 
                $name       = $_POST['full'];

                $hashPass = sha1($_POST['password']); // If the user write password it will hashed
                                                      // And If it full it will send 
                // Validate The Form
    
                $formErrors = array();
    
                if (strlen($user) < 4) {
    
                    $formErrors[] = 'The username cannt be less than <strong>4 characters</strong>';
                }
    
                if (strlen($user) > 20) {
    
                    $formErrors[] = 'The username cannt be greater than <strong>20 characters</strong>';
                }
    
                if (empty($user)) {
    
                    $formErrors[] = 'The UserName Cannt Be Empty';
                }

                if (empty($pass)) {
    
                    $formErrors[] = 'The Password Cannt Be Empty';
                }                
    
                if (empty($name)) {
    
                    $formErrors[] = 'The Full Name Cannt Be Empty';
                }
    
                if (empty($email)) {
    
                    $formErrors[] = 'The Email Cannt Be Empty';
                }

   
                // Loop into error array and echo it in div
    
                foreach($formErrors as $error) {
    
                    echo "<div class='alert alert-danger'>" . $error . "</div>" ;
                }
    
                // Check out if there's no error proceed the update operation
    
                if (empty($formErrors)) {

                    // Check if the user is exist in database

                    $check = checkItem("UserName", "users", $user);

                    if ($check == 1) {

                        $theMsg = '<div class="alert alert-danger">Sorry This User Is Exist</div>';

                        redirectHome($theMsg, 'back');

                    } else {
    
                        // Insert Userinfo in database
        
                        $stmt = $con->prepare("INSERT INTO 
                                                    users(Username, Password, Email, FullName, RegStatus, Date)
                                                VALUES(:vuser, :vpass, :vmail, :vname, 1, now()) ");  // Those names you can choose what you want like variables
                                                                                                    // We use those names just to link those names with us
                                                                                                    // :zuser = Username :zpass = Password / ...
                        $stmt->execute(array(                                                       // now() it is function billeting in databaes

                            // Here we make biending with those variables 

                            'vuser' => $user,    // $user = $_POST['username'] coming from FORM
                            'vpass' => $hashPass, 
                            'vmail' => $email,
                            'vname' => $name
                        ));                                                               
                            
                        // Echo success massage
        
                        $theMsg = "<div class='alert-success'>". $stmt->rowCount() . " Record Inserted</div>";

                        redirectHome($theMsg, 'back');

                    }    
        
                }
    
            } else {

                echo "<div class='container'>";
    
                    $theMsg = '<div class="alert alert-danger">Sorry You Cant Browse This Page Directly</div>';

                    // This function you is made it in function.php

                    redirectHome($theMsg, 'back');

                echo "</div> ";
            }
    
            echo "</div>";   