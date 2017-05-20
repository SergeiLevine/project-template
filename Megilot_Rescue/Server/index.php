
<?php

header('Access-Control-Allow-Origin: *');
//session_start();
include 'head.php';


$mysql_host='localhost';
$mysql_user='root';
$mysql_pass='';
$mysql_db='megilot_database';
$conn = new mysqli($mysql_host, $mysql_user, $mysql_pass);

if (mysqli_connect_errno())
{
	printf("Connection failed: ",mysqli_connect_error());
	exit();
} 

$conn->select_db ( $mysql_db );

if(isset($_POST['username']) &&isset($_POST['mypassword']))
{
	
	$username=$_POST['username'];
	$password=$_POST['mypassword'];
	if(!empty($username) && !empty($password))
	{
		$query="SELECT permissions,user_id
				FROM users
				WHERE username='$username' AND password='$password' ";
		
	}
}
$postdata=file_get_contents("php://input");
if($postdata!=''){
	
	$request=json_decode($postdata);
	if($request->username!='' && $request->password!= '')
	{	
		$query="SELECT permissions,user_id
				FROM users
				WHERE username='$request->username' AND password='$request->password'";
	}
	
}
	
if($run_query=mysqli_query($conn,$query))
{
	$query_num_rows=mysqli_num_rows($run_query);
	
	if($query_num_rows==0)
	{
		echo 'invalid username/password combination.';
		
	}
	else 
	{
		$row=mysqli_fetch_array($run_query,MYSQLI_ASSOC); 		
		$user_id=$row["user_id"];
		if($row["permissions"]==1)
		{
			write_to_ses('user_id',$user_id);
			echo json_encode('admin logged in');		
		}
		if($row["permissions"]==2)
		{
			write_to_ses('user_id',$user_id);
			write_to_ses('username',$username);
			echo 'client logged in';
		}
	}	

}
else
{
	
	printf("error: %s\n",mysqli_error($conn));
}



?>

