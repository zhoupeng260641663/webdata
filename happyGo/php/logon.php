<?php

header("content-type:text/html;charset=utf-8");
$con = @mysql_connect('localhost', 'root', '');
if (!$con) {
	die('连接失败' . mysql_error());
}
mysql_select_db('happygo');
mysql_query('SET NAMES UTF8');

if (isset($_GET['phoneyz'])){
	$phoneyz = @$_GET['phoneyz'];
	
}
$query1 =@ "select * from account where phone='$phoneyz'";

$result = mysql_query($query1);
//如果$result有结果，代表用户名存在数据库中
if (mysql_fetch_array($result)) {
	echo '该手机号码已经注册';
}

mysql_close($con);
?>