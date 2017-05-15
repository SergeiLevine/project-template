<?php
header('Access-Control-Allow-Origin: *');

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dberror1 = "Could not connect to the database";
$dberror2 = "Could not select databse";
$database = "megilot_database";

$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$database) or die($dberror1);

$query = "SELECT * FROM coordinates";

$fetch_sql_query = mysqli_query($conn,$query)  or die ("Could not find user");

	while($row = mysqli_fetch_assoc($fetch_sql_query))
	{
	echo $row['latitude'];
	echo " ";
	echo $row['longitude']."<br>";
	}

	




?>