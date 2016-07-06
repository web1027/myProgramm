;(function($){
	$.ajax({
		url:"js/traver.json",
		type:"post",
		success:function(data){
			console.log(data);
			traver(data);
		},
		error:function(){
			alert("连接失败")
		}
	})
        
		function traver(data){
           var html="";
           html+='<ul class="traver_dls">';
           $.each(data,function(key,val){
           	$.each(data.traver,function(k,v){
           		 console.log(data);
           	 html+='<li><a href="traverxq.html">'+
							'<dl>'+
								'<dt><img src="img/'+v.img+'" alt=""></dt>'+
								'<dd>'+
									'<h5>'+v.title+'</h5>'+
									'<p>'+v.time+'</p>'+
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