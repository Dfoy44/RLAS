<?php


require('db_login.php');


// 1. Create a local database connection
$connection = mysqli_connect($DB_SERVER,$DB_USER,$DB_PASS);
if (!$connection) {
    die("Database connection failed: " . mysqli_error());
}
else { 
//	echo "Connected successfully"; 
}

// 2. Select ifarm db to use 
$db_select = mysqli_select_db($connection, $DB_NAME);
if (!$db_select) {
    die("Database selection failed:". mysqli_error());
}
else { 
//	echo " - Selected successfully"; 
}

// 3. modify the query based on parameters

$queryString = "SELECT * from members where 1=1 ";

if(isset($_GET['email']))
{
         $queryString = $queryString . " and email LIKE '%" .$_GET['email'] ."%'";	 
}

if(isset($_GET['firstname']))
{
         $queryString = $queryString . " and firstname LIKE '%" .$_GET['firstname'] . "%'";
}

if(isset($_GET['surname']))
{
         $queryString = $queryString . " and surname LIKE '%" .$_GET['surname'] . "%'";
}

//echo $queryString;

// 4. return all rows

$result = mysqli_query($connection, $queryString) or die('Could not query');

if(mysqli_num_rows($result)){ 

//  echo "Here is the Data:";   
  
//  $return=mysqli_fetch_assoc($result);
    
	while($return=mysqli_fetch_assoc($result)){
		
		$rows[] = $return;
		
	}
			
        echo json_encode($rows);
		
		
    
 
}

mysqli_close($connection);


?>

