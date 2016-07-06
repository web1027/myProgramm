;(function($){
	$.ajax({
		url:"js/ticket.json",
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
		console.log(data)
		$.each(data,function(key,val){
			console.log(val)
			$.each(val,function(i,v){
				    html+='<a href="ticketxq.html"><li>'+
							'<dl>'+
					       '<dt><img src="img/'+v.img+'" alt=""></dt>'+
					       '<dd>'+v.text+'</dd>'+
					    '</dl>'+
					    '<p><a href="">'+v.content+'</a><span>'+v.price+'</span></p>'+
					'</li></a>'; 
			})
		})
		html+='</ul>'; 
		$(".group_Left").html(html);
		menuPage.refresh();



	}

	
})(Zepto)