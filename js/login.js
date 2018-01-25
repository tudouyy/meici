function $(id){
	return document.getElementById(id);
}
window.onload = function(){
	
	//1)	用户名手机或邮箱
	$("userId").onblur = function(){		
	   var regUser = /^\d{11}$/;
		var userId = $("userId").value;
		if(userId==""){
			$("Msg").innerHTML = "请输入用户名";
		}else{
			if(!regUser.test(userId)){
				$("Msg").innerHTML = "用户名必须为邮箱或手机号";
			}
		}
	}
	
	//2.密码
	$("passId").onblur = function(){		
	   var str1= $("passId").value;
	   if(6>str1.length||str1.length>20){
	   		$("Msg").innerHTML = "用户名或密码错误 ";
	   }
	}
	
}