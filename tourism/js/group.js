;(function($){
	$.ajax({
		url:"js/dataJSON.json",
		type:"post",
		success:function(data){
           group(data);
		},
		error:function(){
			alert("连接失败")
		}
	})
	function group(data){
		var html='';
		html+='<ul class="group_left">';
		console.log(data[0])
		$.each(data[0],function(key,val){
			console.log(val)
			$.each(val,function(i,v){

				    html+='<li><a href="groupxq.html">'+
							'<dl>'+
					       '<dt><img src="img/'+v.img+'" alt=""></dt>'+
					       '<dd>'+v.text+'</dd>'+
					    '</dl>'+
					    '<p><a href="">'+v.content+'</a><span>'+v.price+'</span></p>'+
					'</a></li>'; 
			})
		})
		html+='</ul>'; 
		$(".group_Left").html(html);

     
     var arr='';
		arr+='<ul class="group_right">';
		console.log(data[1])
		$.each(data[1],function(key,val){
			console.log(val)
			$.each(val,function(it,vt){
                   console.log(vt)
				    arr+='<li><a href="groupxq.html">'+
							'<dl>'+
					       '<dt><img src="img/'+vt.img+'" alt=""></dt>'+
					       '<dd>'+vt.text+'</dd>'+
					    '</dl>'+
					    '<p><a href="">'+vt.content+'</a><span>'+vt.price+'</span></p>'+
					'</a></li>'; 
			})
		})
		arr+='</ul>'; 
		$(".group_Right").html(arr);
		menuPage.refresh();

	}

	$(".group_uls li").on("click","a",function(){
		var _href=$(this).attr("href");
		console.log(_href)
		$(this).parents("li").addClass("on").siblings().removeClass("on");
            $(_href).css({
            	"-webkit-transform":"translate3d(0,0,0)"
            }).siblings().css({
            	"-webkit-transform":"translate3d(100%,0,0)"
            })
	})
})(Zepto)