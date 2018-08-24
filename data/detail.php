<?php
  header("Content-Type:application/json;charset=utf-8");
  require('init.php');
  @$pageNo = $_REQUEST['pageNo'];
  $offset = ($pageNo-1)*5;
  $sql = "SELECT * FROM t_detail LIMIT $offset,5";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_all($result,MYSQLI_ASSOC);
  $str = json_encode($row);
  echo $str;
?>