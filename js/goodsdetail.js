 
 (function(){
	//左侧边栏点击跳转
     $('.prev').on('click',function() {
        $('.scroll_img').animate({top:'-84px'},1000)
    });
    $('.next').on('click',function() {
        $('.scroll_img').animate({top:'0'},1000)
    });
    
    
	//底部点击跳转
     $('.box_prev_m').on('click',function() {
        $('.box_uls').animate({left:'-1048px'},1000)
    });
    $('.box_next_m').on('click',function() {
        $('.box_uls').animate({left:'0'},1000)
    });
 	
    
 	
   	$("#box").mousemove((evt)=>{
		let offset=$("#box").offset();
		let smallBoxWidth=80;
		let smallBoxHeight=80;
		let left=parseInt(evt.pageX)-parseInt(offset.left);
		let top=parseInt(evt.pageY)-parseInt(offset.top);
		let smallBoxLeft=left-smallBoxWidth/2;
		let smallBoxTop=top-smallBoxHeight/2;
		if(smallBoxLeft>=$("#box").width()-$("#smallBox").width()){
			smallBoxLeft=$("#box").width()-$("#smallBox").width();
		}else if(smallBoxLeft<=0){
			smallBoxLeft=0;
		}
		if(smallBoxTop>=$("#box").height()-$("#smallBox").height()){
			smallBoxTop=$("#box").height()-$("#smallBox").height();
		}else if(smallBoxTop<=0){
			smallBoxTop=0;
		}
		$("#smallBox").css({"left":smallBoxLeft});
		$("#smallBox").css({"top":smallBoxTop});

		$("#imges").css({"left":-2*smallBoxLeft});
		$("#imges").css({"top":-2*smallBoxTop});
	});
	
	
 })(jQuery);