//顶部轮播图
var arr=["../img/index_slideshow_1.jpg","../img/index_slideshow_1.jpg","../img/index_slideshow_1.jpg","../img/index_slideshow_1.jpg","../img/index_slideshow_1.jpg"];
var ord=0;//的代表对当前 图片的序号，从0开始
var myTimer=null;


//事件处理程序
function initEvent(){
	//鼠标进入时停止
	$("#box").mouseenter(function(){
		stopPlay();
	});
	//鼠标离开时自动播放  
	$("#box").mouseleave(function(){ 
		autoPlay();
	});


	//点击左箭头实现向左跳转
	$("#leftArrow").click(function(){
		let transOrd=ord-1;
		transOrd>0?transOrd:arr.length-1;
		goImg(transOrd);
	});
	//点击右箭头实现向右跳转
	$("#rightArrow").click(function(){
		let transOrd=ord+1;
		transOrd>arr.length-1?0:ord+1;
		goImg(transOrd);
	});


}
//自动播放
function autoPlay(){
	myTimer=setInterval(function(){
		//记录进入时的图片序号
		let outOrd=ord;

		ord++
		if(ord>arr.length-1){
			ord=0;
		}
	//淡入淡出
	let $img=$("#box img");
	//淡入
	$img.eq(outOrd).animate({"opacity":0},2000);
	//淡出
	$img.eq(ord).animate({"opacity":1},2000);
	},3000);
}
//停止播放
function stopPlay(){
	window.clearInterval(myTimer);
}
//指定图片自动跳转
function goImg(transOrd){
	let outOrd=ord;
	ord=transOrd;
	if(ord>arr.length-1){
		ord=0;
	}
	//淡入淡出
	let $img=$("#box img");
	//淡入
	$img.eq(outOrd).animate({"opacity":0},2000);
	//淡出
	$img.eq(ord).animate({"opacity":1},2000);
}
//jQuery逻辑部分  
$(function(){

//顶部轮播图
	//绑定事件
	initEvent();
	//自动播放
	autoPlay();
//进入轮播图  箭头显示
$("#box").mouseenter(function(){
	//左
	$("#leftArrow").fadeIn(100);
	//右
	$("#rightArrow").fadeIn(100);
});
//移出轮播图  箭头隐藏
$("#box").mouseleave(function(){
	//左
	$("#leftArrow").fadeOut(100);
	//右
	$("#rightArrow").fadeOut(100);
});

//底部轮播图
function scroll(){
       $(".content ul").animate({"margin-left":"-200px"},function(){
         $(".content ul li:eq(0)").appendTo($(".content ul"))
         $(".content ul").css({"margin-left":0});
       });
}
setInterval(scroll,5000);
//左箭头
$(".leftArrow2").click(function(){
		scroll();
});
//右箭头
$(".rightArrow2").click(function(){
	scroll();
});

});