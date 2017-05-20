<?php
header('Access-Control-Allow-Origin: *');
include 'head.php';

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dberror1 = "Could not connect to the database";
$dberror2 = "Could not select databse";
$database = "megilot_database";

$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$database) or die($dberror1);

$event_id = read_from_ses('event_id');
//getting all the user_id of users participating in the event
$query_users = "SELECT user_id FROM event__$event_id";


$run_query=mysqli_query($conn,$query_users);

$query_num_of_participants=mysqli_num_rows($run_query);

	if($query_num_of_participants==0)
	{
		echo 'No participants yet';
	}
	else
	{

		$i = 1;
		$query_users_coordinates = "";
		while($participants = mysqli_fetch_assoc($run_query))
		{
			$participants = $participants['user_id'];
			$query_users_coordinates .= "SELECT user_name, latitude, longitude
				FROM event__$event_id__$participants";
			if($i < $query_num_of_participants)
			{
				
				$query_users_coordinates .= " UNION ALL ";	
			}
			$i++;
		}
		
		//getting all the usernames with their coordinates
		$run_query=mysqli_query($conn,$query_users_coordinates);
		$query_num_rows=mysqli_num_rows($run_query);
		
		//small arrays of users that will go into one big array for ease of json sending
		$data = array(array());	
		$j = -1;
		$temp = "";
		while($participants = mysqli_fetch_assoc($run_query))
		{
			if($temp != $participants)
				$j++;
			
			array_push($data[$j],array('user_name' => $participants['user_name'], 'latitude' => $participants['latitude'], 'longitude' => $participants['longitude']));
			

		}
		
		echo json_encode($data);
		
		
	}

?>