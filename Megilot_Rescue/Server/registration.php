<?php
header('Access-Control-Allow-Origin: *');
session_start();

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
$postdata=file_get_contents("php://input");
if($postdata!='')
{
	$request=json_decode($postdata);
	if($request->username!='' && $request->password!= '' && $request->permissions!='' && $request->name!= '')
	{	
		$query = "INSERT INTO users (username,password,name,permissions)
				VALUES('$request->username','$request->password','$request->name','$request->permissions')";
				echo " New user registerd";
	}
	
}