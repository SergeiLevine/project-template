<?php
header('Access-Control-Allow-Origin: *');

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


	if(isset($_POST["Latitude"]) && isset($_POST["Longitude"]) && isset($_POST["Timestamp"]))
	{
		$param1=$_POST["Latitude"];
		$param2=$_POST["Longitude"];
		$param3=$_POST["Timestamp"];
		$sql = "INSERT INTO coordinates (latitude, longitude, time)
				VALUES (,$param1, $param2, $param3)";
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