<?php
header('Access-Control-Allow-Origin: *');

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dberror1 = "Could not connect to the database";
$dberror2 = "Could not select databse";
$database = "megilot_database";

$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$database) or die($dberror1);
//getting the latest event from the events database
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
		CREATE TABLE  event_id (//creating table for the latest event with all the participants
			user_id INT(numOfParticipants) UNSIGNED AUTO_INCREMENT PRIMARY KEY	);
		$query1="SELECT user_id
				 FROM event_id";//select the id's of all the participants
		if($run_query1=mysqli_query($conn,$query1))		
		{
			$query_num_rows=mysqli_num_rows($run_query1);
			if($query_num_rows==0)
			{
				echo "there aren't any participants";
			}
			else
			{
				$row=mysqli_fetch_array($run_query1,MYSQLI_ASSOC); 
				$participant_id=row["user_id"];// each participant
				CREATE TABLE  participant_id (//creating table of cordinats for each participant
					id INT(200) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
					latitude VARCHAR(30) NOT NULL,
					longitude VARCHAR(30) NOT NULL,
					user VARCHAR(50),
					timestamp TIMESTAMP);	
				$query2 = "SELECT latitude,longitude,user,timestamp 
						   FROM participant_id
						   WHERE id = ( SELECT MAX(id) FROM participant_id )";
				if($run_query2=mysqli_query($conn,$query2))		
				{		
					$query_num_rows=mysqli_num_rows($run_query2);
					if($query_num_rows==0)
					{
						echo "there aren't any coordinates";
					}
					else
					{
						$data = array();
						while($row = mysqli_fetch_assoc($run_query2))
						{
								array_push($data,array('user' => $row['user'], 'latitude' => $row['latitude'], 'longitude' => $row['longitude']));
						}
						echo json_encode($data);
					}

	




?>