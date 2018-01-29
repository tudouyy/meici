 
 (function(){
	//底部点击跳转
     $('.box_prev_m').on('click',function() {
        $('.box_uls').animate({left:'-1048px'},1000)
    });
    $('.box_next_m').on('click',function() {
        $('.box_uls').animate({left:'0'},1000)
    });
    
    calculation();
    //点加号   改变当前加号父元素下的子元素  小计 的值
    $(".adds").click(function(){
      //获取当前文本框中的数量
    var num=parseInt($(this).prev().val());
    //获取当前行的单价
    var price=parseInt($(this).parent().parent().prev().last().text().split('￥')[1]);
      num+=1;
      //当前数量+1
      $(this).prev().val(num);
      //计算当前行的 小计=数量*单价
      var subTotal=num*price;
      $(this).parent().parent().next().last().text("￥ "+subTotal+".00");
      $(this).parent().parent().next().last().text().split("￥ ")[1]=subTotal;
    });

    //点减号   改变当前加号父元素下的子元素  小计 的值
    $(".minus").click(function(){
      //获取当前文本框中的数量
      var num=parseInt($(this).next().val());
      //获取当前行的单价
      var price=parseInt($(this).parent().parent().prev().last().text().split('￥')[1]);
      if(num>0){
          num-=1;
          //当前数量+1
          $(this).next().val(num);
          //计算当前行的 小计=数量*单价
          var subTotal=num*price;
          $(this).parent().parent().next().last().text("￥ "+subTotal+".00");
          $(this).parent().parent().next().last().text().split("￥ ")[1]=subTotal;
        }
    });

      function calculation(){
        //已选商品数量  所有的num之和
        var totalNum=0;
        var totalPrice=0;
        //循环  求出goodslist下每一行中的数量总和
        for(var i=0;i<$(".goodslist").children.length;i++){
           totalNum+=parseInt($(".goodslist").children(i).children("li").eq(3).children("div").children("input").val());
        }
        //将值赋给已选商品数量
        $(".choosenum").text(totalNum);

        //循环   求出goodslist下每一行中的小计之和
        for(var i=0;i<$(".goodslist").children.length;i++){
            totalPrice+=parseInt($(".goodslist").children(i).children("li").eq(4).text().split("￥")[1]);
        }
        //将值赋给商品总价
        $(".total_num").text(totalPrice+".00");
      }

    
    /*var price = $('.unit-price').text().split('￥')[1];
    var total = $('.subtotal').text().split('￥')[1];
    $('.adds').click(function(){
        var index = $('.adds').index($(this));
        var goodsNum = $('.add_num').eq(index).val();
        $('.add_num').eq(index).val(parseInt(goodsNum)+1);
        var everyPrice = parseInt($('.singlePrice').eq(index).html())*goodsNum;
        $('.everyPrice').eq(index).html(everyPrice);
		
    })
    
	 $('.minus').on('click',function(){
        var index = $('.minus').index($(this));
        var goodsNum = $('.add_num').eq(index).val();
        $('.add_num').eq(index).val(parseInt(goodsNum)-1);
        var everyPrice = parseInt($('.singlePrice').eq(index).html())*goodsNum;
        $('.everyPrice').eq(index).html(everyPrice);
        
    })*/
    //删除商品
    $('.shop-delete').on('click',function(){
       var as = $('.shop-delete').index($(this));  
       $('.lists').eq(as).css({display:'none'});
    })


	//全选框
   $('.select-all').click(function() {
       if(this.checked){
           $("[type='checkbox']").attr("checked",'true');
       }else{
        $("[type='checkbox']").removeAttr("checked");
       }    
   })
 
 })(jQuery);
 
