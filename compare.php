<?php
	// funtion to check is JSON is complete
    function isJson($string) {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }
    $data=$_POST['data'];
    echo "hello JSON";
    echo isJson($data)."\n";
    $data=json_encode($data,true);


    // compare $data with in MySQL db.
$con=mysqli_connect("localhost","root","forgetpassword","ziko");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
else
  echo "Connect DB success";
//comparator
$subject_id=6; //TODO(ziko):get value from post method
$year=2013; //TODO(ziko):same above
// MySQL for testing
$result = mysqli_query($con,"SELECT * FROM tbl_sheet WHERE subject_id ='".$subject_id."' AND year ='".$year."'");
echo "<br/>";
while($row = mysqli_fetch_array($result))
  {
  echo $row['orientation'] . " " . $row['link'];
  echo "<br/>";
  }

mysqli_close($con);
?>
