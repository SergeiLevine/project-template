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
if (mysqli_connect_errno())
{
	printf("Connection failed: ",mysqli_connect_error());
	exit();
} 
$conn->select_db ( $mysql_db );
$query="SELECT event_id
		FROM events
		WHERE event_id = ( SELECT MAX(event_id) FROM events )";
if($run_query=mysqli_query($conn,$query))
{
	$query_num_rows=mysqli_num_rows($run_query);
	if($query_num_rows==0)
	{
		echo "there aren't any events open";
	}	
	else
	{
		$row=mysqli_fetch_array($run_query,MYSQLI_ASSOC); 
		$event_id=row["event_id"];// the latest event id
		$query1 = "CREATE TABLE `megilot_database`.`event__$event_id__$user_id` ( 
					id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
					user_name VARCHAR(50),
					latitude VARCHAR(30) NOT NULL,
					longitude VARCHAR(30) NOT NULL,
					timestamp TIMESTAMP); ) ENGINE = MyISAM";
		if(!mysqli_query($conn,$query1))
			printf("error: %s\n",mysqli_error($conn));
	}
}

?>