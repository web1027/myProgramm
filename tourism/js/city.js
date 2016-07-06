
;(function($){
	$.ajax({
       url:"js/city.json",
		type:"post",
		success:function(data){
           city(data);
		},
		error:function(){
			alert("连接失败")
		} 
	})
    
    function city(data){
    	console.log(data);
    	var html="";
    	html+='<ul class="city_uls">';
		console.log(data);
		$.each(data,function(key,val){
			console.log(val)
			$.each(val,function(k,v){
				console.log(v);
				html+='<li><a href="cityxq.html">'+
						'<dl>'+
							'<dt><img src="img/'+v.img+'" alt=""></dt>'+
							'<dd>'+
								'<h4>'+v.title+'</h4>'+
								'<p>'+v.text+'</p>'+
							'</dd>'+
						'</dl>'+
					'</a></li>';
			})
			
		})
		html+='</ul>';
		$(".main div").html(html);
		menuPage.refresh();
    }

})(Zepto)