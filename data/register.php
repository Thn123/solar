<?php

header('Content-Type:application/json;charset:utf-8');

@$uname = $_REQUEST['uname'];
@$upwd = $_REQUEST['upwd'];

if(empty($uname)||empty($upwd))
{
  echo '[]';
  return;
}

require('init.php');

$sql = "INSERT INTO t_login VALUES(NULL,'$uname','$upwd')";
$result = mysqli_query($conn,$sql);

$output = [];
if($result){//ִ�гɹ�
  $arr['msg'] = 'success';
  $arr['rid'] = mysqli_insert_id($conn);
  $output[] = $arr;
}
else
{
  $arr['msg'] = 'error';
  $output[] = $arr;
}

echo json_encode($output);

?>