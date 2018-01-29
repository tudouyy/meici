var num=$(".heshop_num").text();
var numshop= getCookie("numshop");
num=numshop;

//顶部滑过   app下载下拉
	$(".headerApp").mouseenter(function(){ 
		$(".codepic").fadeIn(200);
	});
	//鼠标移除  app下载上滑
	$(".headerApp").mouseleave(function(){
		$(".codepic").fadeOut(200);
	});
	
	//购物车链接滑过显示
	$(".shopping").bind("mouseenter",function(){
		$(".buyCar").show();
		var num=$(".heshop_num").text();
		if(num==0){
			$(".buygoods_have").hide();
            $(".buygoods_no").show();
		}else{
			$(".buygoods_have").show();
            $(".buygoods_no").hide();
		}
	});
	//购物车链接滑出时隐藏
	$(".shopping").bind("mouseleave",function () {
		$('.buyCar').hide();
		});
