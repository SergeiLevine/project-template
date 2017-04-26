<?php

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


$username=$_POST['user'];
$password=$_POST['pass'];
$password_hash=md5($password);
$query="SELECT id
		FROM users_login
		WHERE username='$username' AND password='$password_hash'";
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
		$user_id=$row["id"];
		echo "welcome buddy!";
		//$_SESSION["user_id"]=$user_id;
		//header('Location: localhost/myfirstfile.php');
	}	

}
else
{
	
	printf("error: %s\n",mysqli_error($conn));
}
