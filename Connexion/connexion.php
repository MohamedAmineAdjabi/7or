<?php 
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    //database connection
    $conn = new mysqli('localhost','root','' ,'test');
    if($conn->connect_error){
        die('connection failed :'.$conn->connect_error);
    }else{
        $stmt =$conn->prepare("insert into registration(fullname,email,password) value" value(?,?,?));
        $stmt->bind_param("sss",$fullname,$email,$password);
        $stmt->execute();
        echo"registration successfully..."
        $stmt->close();
        $conn->close();
    }
?>