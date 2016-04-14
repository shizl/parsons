jQuery(document).ready(function(){
 div_length=jQuery(".field-name-field-image .field-items .field-item").length;
 if(div_length<=3){
  jQuery(".field-name-field-image .bt-left").hide();
  jQuery(".field-name-field-image .bt-right").hide();
}

jQuery('.field-name-field-image').append('<input type="button" style="cursor:pointer" class="bt-left" ><input type="button" style="cursor:pointer" class="bt-right">');
	if(jQuery("#main").width()>319 && jQuery("#main").width()<640){

	var w=jQuery("#main").width();
	}else if(jQuery("#main").width()>=640&&jQuery("#main").width()<960){

	var w=jQuery("#main").width()/2+10;
}else if(jQuery("#main").width()>961){
	var w=473;
}
			get_totalwidth(w);
		resizeM();
	jQuery(window).resize(function(){
 div_length=jQuery(".field-name-field-image .field-items .field-item").length;
 if(div_length<=3){
  jQuery(".field-name-field-image .bt-left").hide();
  jQuery(".field-name-field-image .bt-right").hide();
}
 resizeM();

	});
 jQuery(".bt-left").click(function(){
				jQuery(this).attr("disabled",true);
						subWidth=jQuery('.field-name-field-image .field-items').width();
					w=parseInt(jQuery('.field-name-field-image .field-items .field-item').css('width'))+parseInt(jQuery('.field-name-field-image .field-items .field-item').css('margin-right'));
					var  leftwidth =parseInt(jQuery('.field-name-field-image .field-items') .css("margin-left"));
					 if( leftwidth<  jQuery("#main").width()-subWidth+w ){
							jQuery('.field-name-field-image .field-items') .css("margin-left",0);
							leftwidth =0;
					}	   
					jQuery(".field-name-field-image .field-items").animate({"margin-left":(leftwidth-w)+'px'});
				setTimeout('jQuery(".bt-left").attr("disabled",false);',1000);
	});
	jQuery(".bt-right").click(function(){
				jQuery(this).attr("disabled",true);
				subWidth=jQuery('.field-name-field-image .field-items').width();
				w=parseInt(jQuery('.field-name-field-image .field-items .field-item').css('width'))+parseInt(jQuery('.field-name-field-image .field-items .field-item').css('margin-right'));
				var  leftwidth =parseInt(jQuery('.field-name-field-image .field-items') .css("margin-left"));
					 if( leftwidth>=0){
						jQuery('.field-name-field-image .field-items') .css("margin-left",-subWidth+w*3);
						leftwidth =-subWidth+w*3;
					}
				  
				jQuery(".field-name-field-image .field-items").animate({"margin-left":(leftwidth+w)+'px'});
				setTimeout('jQuery(".bt-right").attr("disabled",false);',1000);
	});

});

function resizeM(){
	if(jQuery("#main").width()>319 && jQuery("#main").width()<640){
	/*subHeight=jQuery('.field-name-field-image .field-items .field-item').height();
	disHeight=subHeight*3;
	dnum=jQuery(".field-name-field-image .field-items .field-item").length;
	h=dnum*subHeight;
	jQuery('.field-name-field-image .field-items').css('height',h+'px');

	jQuery('.field-name-field-image').css('height',disHeight+'px');
jQuery('.field-name-field-image .field-items') .css("margin-left",0);
if(jQuery(".next_click").html()==null){
	   jQuery(".field-name-field-image").append("<p class=\"prev_click\" onclick='pre_()'>1</p>");
	   jQuery(".field-name-field-image").append("<p class=\"next_click\" onclick='next_()'>2</p>");
}
*/
jQuery('.field-name-field-image').css('height',"auto");
jQuery('.field-name-field-image .field-items').css("height","auto");
if(jQuery(".next_click").html()!=null){
	   jQuery(".prev_click").remove();
	   jQuery(".next_click").remove();
}
	var w=jQuery("#main").width();
  
var itemcount=jQuery('.field-name-field-image .field-items .field-item:last').index()+1;
	subWidth=itemcount*w;
jQuery('.field-name-field-image .field-items').css("width",subWidth);
	jQuery('.field-name-field-image .field-items .field-item').css('width',w+'px');
jQuery('.field-name-field-image .field-items') .css("margin-left",-w*3);

	}else if(jQuery("#main").width()>=640&&jQuery("#main").width()<960){

	jQuery('.field-name-field-image').css('height',"auto");
jQuery('.field-name-field-image .field-items').css("height","auto");
if(jQuery(".next_click").html()!=null){
	   jQuery(".prev_click").remove();
	   jQuery(".next_click").remove();
}
	var w=jQuery("#main").width()/2;
  
var itemcount=jQuery('.field-name-field-image .field-items .field-item:last').index()+1;
	subWidth=itemcount*(w+10);
jQuery('.field-name-field-image .field-items').css("width",subWidth);
	jQuery('.field-name-field-image .field-items .field-item').css('width',(w-10)+'px');
jQuery('.field-name-field-image .field-items') .css("margin-left",-(w+10)*3);

	}else if(jQuery("#main").width()>961){
	var w=473;
	jQuery('.field-name-field-image .field-items .field-item').css('width','453px');
jQuery('.field-name-field-image .field-items') .css("margin-left",-w*3);
if(jQuery(".next_click").html()!=null){
	   jQuery(".prev_click").remove();
	   jQuery(".next_click").remove();
}

	width = 0;
	 c_width = 0;
jQuery('.field-name-field-image .field-items').css("height","auto");
	jQuery('.field-name-field-image .field-items .field-item').each(function(){
		c_width = c_width +473;
	});
	jQuery('.field-name-field-image .field-items ').css({'width':c_width+'px'});
	}
}

			function get_totalwidth(w) {

var desshow='.field-name-field-image .field-items';
var rtotalwidth=0;
				var sfirst=jQuery(desshow+" .field-item:first");
				var slast=jQuery(desshow+" .field-item:last");
				var lastid=jQuery(desshow+" .field-item:last").index();
				if(lastid>0){
				
				var num=lastid%3;
				
				if(lastid<3){
				jQuery(".bt-left").attr("disabled","disabled");
				jQuery(".bt-right").attr("disabled","disabled");
				}
				if(3-num<3){
					 for(i=1;i<=3-num;i++){
						var descon=jQuery(desshow).html();
						jQuery(desshow).html(descon+'<div class=" .field-item">'+jQuery(desshow + "  .field-item").html()+'</div>');	
					 }
					 var nlast=jQuery(desshow+" .field-item:last");
					 jQuery(desshow+" .field-item:first").before('<div class="'+nlast.prev("div").prev("div").attr('class')+'">'+nlast.prev("div").prev("div").html()+'</div><div class="'+nlast.prev("div").attr('class')+'">'+nlast.prev("div").html()+'</div><div class="'+nlast.attr('class')+'">'+nlast.html()+'</div>');	
				}else {
					 var nlast=jQuery(desshow+" .field-item:last");
					 jQuery(desshow+" .field-item:first").before('<div class="'+nlast.prev("div").prev("div").attr('class')+'">'+nlast.prev("div").prev("div").html()+'</div><div class="'+nlast.prev("div").attr('class')+'">'+nlast.prev("div").html()+'</div><div class="'+nlast.attr('class')+'">'+nlast.html()+'</div>');	
				}
					rtotalwidth=0;
					jQuery(desshow+" .field-item").each(function(){
						rtotalwidth+=parseInt(jQuery(this).css('width'))+20;
					});
						
					jQuery(desshow).css("width",rtotalwidth);
					jQuery('.field-name-field-image .field-items') .css("margin-left",-w*3);
				}
			}			

height = 0;
function  pre_(){
 height_item = jQuery('.field-name-field-image .field-items .field-item').height();
total_height = jQuery(".field-name-field-image .field-items").height();
 _top =  parseInt(total_height) /2;
 if( height<=0 && height > parseInt( '-'+_top)){
height = height- height_item;
jQuery(".field-items").animate({top:height+'px'});
}
}
function  next_(){
 height_item = jQuery('.field-name-field-image .field-items .field-item').height();
total_height = jQuery(".field-name-field-image .field-items").height();
 _top =  parseInt(total_height) /2;
if(height<0){
height=height+height_item;
jQuery(".field-items").animate({top:height+'px'});
}
}
