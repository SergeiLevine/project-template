<?php
//require 'reciveing_data.php';
//require 'sending_data.php';
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
$query="SELECT permissions
		FROM users_login
		WHERE username='$username' AND password='$password'";
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
		if(row["permissions"]=="client")
		{
			header('Location: sending_data.php'
			echo "client logged in";
		}
		if(row["permissions"]=="master")
		{
			header('Location: reciving_data.php'
			echo "master logged in"
		}
	}	

}
else
{
	
	printf("error: %s\n",mysqli_error($conn));
}



?>