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

$db_select = mysqli_select_db($connection, $DB_NAME);
if (!$db_select) {
    die("Database selection failed:". mysqli_error());
}
else { 
//	echo " - Selected successfully"; 
}

// 3. modify the query based on parameters

$queryString = "";

if(isset($_GET['userName']))
{
		 $queryString = "SELECT * from Users where username = '" .$_GET['userName'] . "' and password = '" .$_GET['password'] . "' ";
}



if(isset($_GET['trysAndAssists']))
{
         $queryString = "SELECT * from Players";
        
}

if(isset($_GET['matchData']))
{
          $queryString = "SELECT * from MatchData";
}

if(isset($_GET['teamData']))
{
          $queryString = "SELECT * from Players";
	//	  $queryString = $queryString . " where TeamName = '" .$_GET['teamData'] ."'";
}

if(isset($_GET['tryScorer']))
{
          $queryString = "UPDATE Players SET Trys = Trys + 1";
		  $queryString = $queryString . " Where Name = '" .$_GET['tryScorer'] ."'";
}

if(isset($_GET['tackler']))
{
          $queryString = "UPDATE Players SET tackles = tackles + 1";
		  $queryString = $queryString . " Where Name = '" .$_GET['tackler'] ."'";
}

if(isset($_GET['gameStarter']))
{
          $queryString = "UPDATE Users SET Games = Games + 1";
		  $queryString = $queryString . " Where username = '" .$_GET['gameStarter'] ."'";
}

if(isset($_GET['gameWinner']))
{
          $queryString = "UPDATE Users SET won = won + 1";
		  $queryString = $queryString . " Where username = '" .$_GET['gameWinner'] ."'";
}

if(isset($_GET['gameLoser']))
{
          $queryString = "UPDATE Users SET lost = lost + 1";
		  $queryString = $queryString . " Where username = '" .$_GET['gameLoser'] ."'";
}

// 4. return all relative rows

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

