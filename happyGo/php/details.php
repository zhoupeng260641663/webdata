<?php
	header('content-type:text/html;charset=uft-8');
	
	$con=@mysql_connect('localhost','root','');
	if(!$con){
		die('连接失败'.mysql_error());
	}
	$imgid=$_GET['imgid'];
	mysql_select_db('happygo');
	mysql_query('SET NAMES UTF8');
	
	$query="select * from todayTV where imgid=$imgid";
	$result=mysql_query($query);
	$arr=array();
	
	for($i=0;$i<mysql_num_rows($result);$i++){

		$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
		
	}
	echo json_encode($arr);
	mysql_close($con);
?>