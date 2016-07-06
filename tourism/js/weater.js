;(function($){
	$.ajax({
		url:"js/weater.json",
		type:"post",
		success:function(data){
			console.log(data);
			weater(data);
		},
		error:function(){
			alert("连接失败")
		}
	})
	function weater(data){
		var html="";
		 html+='<ul class="weater_uls">';
		$.each(data,function(key,val){
		    $.each(data.weater,function(k,v){
			  html+='<li><a href="weaterxq.html"><p>'+v.content+'<br><span>'+v.span+'</span></p></a></li>';
		    })
			
		})
         html+='</ul>';
         $(".main div").html(html);
         menuPage.refresh();
	}
})(Zepto)