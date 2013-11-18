<?php
function fb_trigger($sheet_subject,$sheet_name,$sheet_link){
    echo $sheet_subject." Sheet : ".$sheet_name." :: ".$sheet_link."<br/>";
}

// funtion to check is JSON is complete
function isJson($string) {
    json_decode($string);
    return (json_last_error() == JSON_ERROR_NONE);
}
$data=$_POST['data'];
$data=json_decode($data,true);
if(isJson($data)){
    echo "JSON OK";
}
else
    echo "JSON FAIL";
echo "<br/>";

// compare $data with in MySQL db.
$con=mysqli_connect("localhost","root","forgetpassword","ziko");
// Check connection
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error()."<br/>";
}

//------comparator---------
$subject_id=$_POST['subject_id'];
$subject_year=date("Y");
$result = mysqli_query($con,"SELECT link FROM tbl_sheet WHERE subject_id ='".$subject_id."' AND year ='".$subject_year."'");
echo "<hr/>";

while($row = mysqli_fetch_array($result))
{
    foreach ($data as &$value) {
        if($row['link']==$value['link']){
            $value=null;
        }
    }
}
// insert new sheet to mySQL
foreach ($data as &$value) {
    if($value<>null){

        mysqli_query($con,"INSERT INTO ziko.tbl_sheet (id, orientation, subject_id, field_number, year, link)
        VALUES ('NULL', '$value[orientation]', '$subject_id', '$value[f_num]', '$subject_year', '$value[link]')");
        fb_trigger($subject_id,$value[orientation],$value[link]);

    }
}

mysqli_close($con);
?>
