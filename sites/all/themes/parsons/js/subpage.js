jQuery(document).ready(function(){
 div_length=jQuery(".field-name-field-image .field-items .field-item").length;
 if(div_length<=3){
  jQuery("#block-block-13").css("display","none");
}
		resizeM();
	jQuery(window).resize(function(){
 div_length=jQuery(".field-name-field-image .field-items .field-item").length;
 if(div_length<=3){
  jQuery("#block-block-13").css("display","none");
}
 resizeM();
	});
	if(jQuery("#main").width()>319 && jQuery("#main").width()<640){
	var w=jQuery("#main").width()/2+10;
	}else if(jQuery("#main").width()>=640&&jQuery("#main").width()<960){
	var w=jQuery("#main").width()/2+10;
}else if(jQuery("#main").width()>961){
	var w=460;
}
 jQuery(".bt-left").click(function(){
jQuery(this).attr("disabled",true);
		subWidth=jQuery('.field-name-field-image .field-items').width();
	 var  leftwidth =parseInt(jQuery('.field-name-field-image .field-items') .css("margin-left"));
	 if( leftwidth>=  jQuery("#main").width()-subWidth+w ){
				jQuery(".field-name-field-image .field-items").animate({"margin-left":(leftwidth-w)+'px'});
	}
setTimeout('jQuery(".bt-left").attr("disabled",false);',1000);
	});
	jQuery(".bt-right").click(function(){
jQuery(this).attr("disabled",true);
	 var  leftwidth =parseInt(jQuery('.field-name-field-image .field-items') .css("margin-left")); 
	 if( leftwidth<0){
				jQuery(".field-name-field-image .field-items").animate({"margin-left":(leftwidth+w)+'px'});
	}
setTimeout('jQuery(".bt-right").attr("disabled",false);',1000);
	});


});

function resizeM(){
	if(jQuery("#main").width()>319 && jQuery("#main").width()<640){
	subHeight=jQuery('.field-name-field-image .field-items .field-item').height();
	disHeight=subHeight*3;
	dnum=jQuery(".field-name-field-image .field-items .field-item").length;
	h=dnum*subHeight;
	jQuery('.field-name-field-image .field-items').css('height',h+'px');

	jQuery('.field-name-field-image').css('height',disHeight+'px');

if(jQuery(".next_click").html()==null){
	   jQuery(".field-name-field-image").append("<p class=\"prev_click\" onclick='pre_()'>1</p>");
	   jQuery(".field-name-field-image").append("<p class=\"next_click\" onclick='next_()'>2</p>");
}
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

	}else if(jQuery("#main").width()>961){
if(jQuery(".next_click").html()!=null){
	   jQuery(".prev_click").remove();
	   jQuery(".next_click").remove();
}
	width = 0;
	 c_width = 0;
jQuery('.field-name-field-image .field-items').css("height","auto");
	jQuery('.field-name-field-image .field-items .field-item').each(function(){
		c_width = c_width +460;
	});
	jQuery('.field-name-field-image .field-items ').css({'width':c_width+'px'});
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
