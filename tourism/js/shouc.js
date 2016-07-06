//在本地存储中如果没存储过收藏，则存储一个空收藏
    var ls=window.localStorage;
    if(!ls.getItem("fav7w")){
      ls.setItem("fav7w","[]");
    }
    

    //收藏
         $("#favBtn").on("click",function(){
            //获取到要收藏的内容，当前的标题
            var favContent=$("#title").text();
            console.log(favContent);

            //在本地存储中存储数据
            saveLocalStorage(favContent);
         })

     //在本地存储中存储数据
        function saveLocalStorage(favContent){
          //判断是否已经收藏过
          var ls=window.localStorage;
          var afav=JSON.parse(ls.getItem("fav7w"));
          //console.log(afav);
          if($.inArray(favContent,afav)>-1){
            //在
            alert("已收藏");
          }else{
            //存储
            afav.unshift(favContent);
            ls.setItem("fav7w",JSON.stringify(afav));
            alert("收藏成功！");
          }
        };
        getFav();
       //从本地存储中取出收藏的内容显示到页面中
             /* function getFav(){
                var ls=window.localStorage;
                aCon=JSON.parse(ls.getItem("fav7w"));
               // ls.setItem("fav7w","[]");
                if(aCon.length==0){
                  $("<li>没有收藏的内容</li>").appendTo("#fav_list");
                }else{
                  $("#fav_list").html("");
                  $.each(aCon,function(i,ele){
                     $("<li><a href='#detail' data-from='favorite' data-item='yunqian_1' data-tit='"+ele+"'>"+ele+"</a></li>").prependTo("#fav_list");
                  })
                }
              }*/
       /* $(function(){
        	$("#favBtn").click(function(){
        		var name=$("#title").val();
        		console.log(name)
        		$.ajax("collections.html",{name:name},function(data){
        			console.log(data)
        		})
        	})
        })*/
//从本地存储中取出收藏的内容显示到页面中
function getFav(){
	var ls=window.localStorage;
	aCon=JSON.parse(ls.getItem("fav7w"));
	console.log(aCon);
	$.ajax("collections.html",{aCon:aCon},function(data){
		$("#com_text").html("");
		$.each(aCon,function(i,ele){
			console.log(ele)
			$('<li><a href=""><dl><dd><h3>"+ele.title+"</h3><span>收藏时间：2016-06-13 13:19</span></dd><dt><img src="img/'+ele.img+'" alt=""></dt></dl></a></li>').prependTo("#com_text");
		})
		console.log(ele.title)
	})
}