<?php
  header("Content-Type:text/plain;charset=utf-8");
  @$uname = $_REQUEST['uname']or die(-1);
  @$upwd = $_REQUEST['upwd']or die(-2);
  require('init.php');
  $sql = "SELECT * FROM t_login";
  $sql .= " WHERE uname = '$uname' AND";
  $sql .= " upwd = '$upwd'";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //如果用户名或密码有误返回NULL
  if(!$row){
    echo -3;
  }else{
    echo "1";
  }
?>
