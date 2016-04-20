(function($){

	$(document).ready(function(){
		$('.result-content').perfectScrollbar();
		$('.showCities').perfectScrollbar();

	// 百度地图API功能
		var map = new BMap.Map("allmap");    // 创建Map实例
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
		map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
		map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
		var myGeo = new BMap.Geocoder();

		var allow_cities=$("#allow_cities").val().split(",");
		var showCities="";
		for(var i=0;i<allow_cities.length;i++){
			showCities+='<div class="line" data="'+allow_cities[i]+'">'+allow_cities[i]+'</div>';
		}
		
		$(".showCities").html(showCities);
		$('#sole-input').keyup(function(){
			var key=$(this).val();
			$(".showCities").show();
			if(key!=""){
				$(".showCities .line").each(function(){
					if($(this).attr("data").indexOf(key)==-1){
						$(this).hide();
					}
				});
			}else{
				$(".showCities .line").show();
			}
		$('.showCities').attr("tabindex",parseInt($('.showCities').attr("tabindex"))+1);
			
		
		});
		$('.type-line').click(function(){
			$('.type-line').removeClass("selected");
			$(this).addClass("selected");
			if($(this).hasClass("type-direct")){
				$(".line-direct").show();
				$(".line-outlets").hide();
			}else{
				$(".line-outlets").show();
				$(".line-direct").hide();
			}

			var addressData=$('#sole-input').val();
			var contents="";
			if($('.line-outlets').html()==undefined || $('.line-outlets').is(":hidden")){
				$('.line-direct .shop-address').each(function(){
					addressData+=(addressData!=""? ",":"")+$(this).html();
					contents+=(addressData!=""? "|":"")+'<div style="width:250px;max-height:290px;overflow-y:auto;font-size:12px;">'+$(this).parent("div").html()+'</div>';
				});
				var myIcon = new BMap.Icon('/sites/all/modules/baidu_map/source/direct.png', new BMap.Size(80,30));
				
				$('.line-direct .img-direct').click(function(){
					leftopenInfo('<div style="width:250px;max-height:290px;overflow-y:auto;">'+$(this).prev("div").html()+'</div>',$(this).attr("data").split(','),map);
				});
			}else{
				$('.line-outlets .shop-address').each(function(){
					addressData+=(addressData!=""? ",":"")+$(this).html();
					contents+=(addressData!=""? "|":"")+'<div style="width:250px;max-height:290px;overflow-y:auto;font-size:12px;">'+$(this).parent("div").html()+'</div>';
				});
				var myIcon = new BMap.Icon('/sites/all/modules/baidu_map/source/outlets.png', new BMap.Size(30,30));
				$('.line-outlets .img-outlets').click(function(){
					leftopenInfo('<div style="width:250px;max-height:290px;overflow-y:auto;">'+$(this).prev("div").html()+'</div>',$(this).attr("data").split(','),map);
				});
			}
			$('.result-content').attr("tabindex",parseInt($('.result-content').attr("tabindex"))+1);
			var adds = addressData;	
			
			bdGEO(keyword,adds,contents,0,myIcon);
		});
		$('.showCities .line').click(function () {
			$('#sole-input').val($(this).attr("data"));
			$('.showCities').hide();
		});
		$('#search-button').click(function(){
			$('.showCities').hide();
			var keyword=$('#sole-input').val();
			keyword=keyword.replace(/(^\s*)|(\s*$)/g, "");
			if(keyword.length>0 && allow_cities.indexOf(keyword)!=-1){
				$('#sole-input').removeClass("error");
				$.post("/baidu_map/search",{keyword:keyword},function(data){
							$('.result-content').html(data);
							$('.filter-result').show();
							if(data!=""){
								$('.result-content').show();
								if($(".line-direct").html()!=undefined && $(".line-outlets").html()!=undefined){
									if($('.shop-type .selected').hasClass("type-direct")){
										$(".line-outlets").hide();
										$(".line-direct").show();
									}else{
										$(".line-outlets").hide();
										$(".line-direct").show();
									}
								}else if($(".line-direct").html()!=undefined){
									$(".line-outlets").hide();
									$(".line-direct").show();
									if($('.shop-type .selected').hasClass("type-outlets")){
										$('.type-outlets').removeClass('selected');
										$('.type-direct').addClass('selected');
									}
								}else{
									$(".line-outlets").show();
									$(".line-direct").hide();
									if($('.shop-type .selected').hasClass("type-direct")){
										$('.type-direct').removeClass('selected');
										$('.type-outlets').addClass('selected');
									}
								}
								var addressData=keyword;
								var contents="";
								if($('.line-outlets').html()==undefined || $('.line-outlets').is(":hidden")){
									$('.line-direct .shop-address').each(function(){
										addressData+=(addressData!=""? ",":"")+$(this).html();
										contents+=(addressData!=""? "|":"")+'<div style="width:250px;max-height:290px;overflow-y:auto;font-size:12px;">'+$(this).parent("div").html()+'</div>';
									});
									var myIcon = new BMap.Icon('/sites/all/modules/baidu_map/source/direct.png', new BMap.Size(80,30));
									
									$('.line-direct .img-direct').click(function(){
										leftopenInfo('<div style="width:250px;max-height:290px;overflow-y:auto;font-size:12px;">'+$(this).prev("div").html()+'</div>',$(this).attr("data").split(','),map);
									});
								}else{
									$('.line-outlets .shop-address').each(function(){
										addressData+=(addressData!=""? ",":"")+$(this).html();
										contents+=(addressData!=""? "|":"")+'<div style="width:250px;max-height:290px;overflow-y:auto;font-size:12px;">'+$(this).parent("div").html()+'</div>';
									});
									var myIcon = new BMap.Icon('/sites/all/modules/baidu_map/source/outlets.png', new BMap.Size(30,30));
									$('.line-outlets .img-outlets').click(function(){
										leftopenInfo('<div style="width:250px;max-height:290px;overflow-y:auto;font-size:12px;">'+$(this).prev("div").html()+'</div>',$(this).attr("data").split(','),map);
									});
								}
	
								var adds = addressData;	
							
								bdGEO(keyword,adds,contents,0,myIcon);
								$('.result-content').attr("tabindex",parseInt($('.result-content').attr("tabindex"))+1);
								$('.no-content').hide();
							}else{
								$('.no-content').show();
								$('.result-content').hide();
							}
				});
			}else{
				$('.filter-result').hide();
				$('#sole-input').addClass("error");
			}
		});
	
		function bdGEO(keyword,adds,contents,index,myIcon){
			map.clearOverlays(); 
			var addsArray=adds.split(",");
			var contentArray=contents.split("|");
			//var add = addsArray[index];
			for(var i=0;i<addsArray.length;i++){
				geocodeSearch(addsArray[i],adds,contentArray[i],keyword,i,myIcon);
			}
		}
		function geocodeSearch(add,adds,content,keyword,index,myIcon){
			
			myGeo.getPoint(add, function(point){
				if (point) {
					if(add==keyword){
						map.centerAndZoom(keyword, 11);  
					}else{
						if($('.line-outlets').html()==undefined || $('.line-outlets').is(":hidden")){
							$('.line-direct .shop-map:eq('+(index-1)+')').attr("data",point.lng+','+point.lat);	
						}else{
							$('.line-outlets .shop-map:eq('+(index-1)+')').attr("data",point.lng+','+point.lat);
						}
						
						var marker = new BMap.Marker(new BMap.Point(point.lng,point.lat),{icon:myIcon});  // 创建标注
						map.addOverlay(marker); // 将标注添加到地图中
						addClickHandler(content,marker,map);
					}
				}
			}, keyword);

		}
		function addClickHandler(content,marker,map){
				marker.addEventListener("click",function(e){
					openInfo(content,e,map)}
				);
		}
		function openInfo(content,e,map){
			var opts = {
						width : 300,     // 信息窗口宽度
						height: 100,     // 信息窗口高度
						title : "" , // 信息窗口标题
						enableMessage:true//设置允许信息窗发送短息
					   };
			var p = e.target;
			
			var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
			var infoWindow = new BMap.InfoWindow(content);  // 创建信息窗口对象 
			map.openInfoWindow(infoWindow,point); //开启信息窗口
		}
		function leftopenInfo(content,p,map){
			
			var point = new BMap.Point(p[0], p[1]);
			var infoWindow = new BMap.InfoWindow(content);  // 创建信息窗口对象 
			map.openInfoWindow(infoWindow,point); //开启信息窗口
		}

		// 编写自定义函数,创建标注
		function addMarker(point,label){
			var marker = new BMap.Marker(point);
			map.addOverlay(marker);
			marker.setLabel(label);
		}

	});

})(jQuery);