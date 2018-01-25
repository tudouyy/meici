 
 (function(){
	//底部点击跳转
     $('.box_prev_m').on('click',function() {
        $('.box_uls').animate({left:'-1048px'},1000)
    });
    $('.box_next_m').on('click',function() {
        $('.box_uls').animate({left:'0'},1000)
    });
 
 })(jQuery);
 
