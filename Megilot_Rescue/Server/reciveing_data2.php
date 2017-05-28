<?php
header('Access-Control-Allow-Origin: *');
include 'head.php';
session_start();
$mysql_host='localhost';
$mysql_user='root';
$mysql_pass='';
$mysql_db='megilot_database';
$conn = new mysqli($mysql_host, $mysql_user, $mysql_pass);
$user_id = read_from_ses('user_id');
$event_id = read_from_ses('event_id');
$user_name = read_from_ses('username');
if (mysqli_connect_errno())
{
	printf("Connection failed: ",mysqli_connect_error());
	exit();
} 
$conn->select_db ( $mysql_db );

if(isset($_POST["Latitude"]) && isset($_POST["Longitude"]) && isset($_POST["Timestamp"]))
{
	$lat=$_POST["Latitude"];
	$lng=$_POST["Longitude"];
	$timeStamp=$_POST["Timestamp"];
	$sql = "INSERT INTO `event__$event_id__$user_id` (`id`,`user_name`,`latitude`, `longitude`, `time`)
			VALUES (NULL,'$user_name','$lat','$lng','$timeStamp')";
	if($run_query=mysqli_query($conn,$sql))
	{
		echo 'good job';
	}
	else
	{
		echo 'balls';
	}
}

	
?>