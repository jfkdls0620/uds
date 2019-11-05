<?php
if (isset($_POST['cp'])) {
	$cp = $_POST['cp'];
	$rc = $_POST['rc'];


	if($cp){
		echo "[";
		for($i=1; $i <= $rc;$i++ ){
			if($i==1){
				echo "{\"idx\":\"페이지 (" . $cp . ")\",\"idx_parent\":\"0\",\"code_title\":\"(" . $i . ") 행 입니다.\",\"del_yn\":\"N\",\"insert_date\":\"" . date("Y-m-d") ."\",\"depth\":\"1\"}";
			} else{
				echo ",{\"idx\":\"페이지 (" . $cp . ")\",\"idx_parent\":\"0\",\"code_title\":\"(" . $i . ") 행 입니다.\",\"del_yn\":\"N\",\"insert_date\":\"" . date("Y-m-d") ."\",\"depth\":\"1\"}";
			}
		}
		echo "]";
	}
}
?>