jQuery(document).ready(function(){
jQuery('.field-name-field-image').append('<input type="button" style="cursor:pointer" class="bt-left" ><input type="button" style="cursor:pointer" class="bt-right">');
var   old_item_length=jQuery(".field-name-field-image .field-items .field-item").length;
	if(jQuery("#main").width()>319 && jQuery("#main").width()<640){
	var w=jQuery("#main").width();
if(old_item_length>1){
            jQuery(".field-name-field-image .bt-left").show();
						jQuery(".field-name-field-image .bt-right").show();
			}else{
					jQuery(".field-name-field-image .bt-left").hide();
						jQuery(".field-name-field-image .bt-right").hide();
			}
	}else if(jQuery("#main").width()>=640&&jQuery("#main").width()<960){
       if(old_item_length>2){
            jQuery(".field-name-field-image .bt-left").show();
						jQuery(".field-name-field-image .bt-right").show();
			}else{
					jQuery(".field-name-field-image .bt-left").hide();
						jQuery(".field-name-field-image .bt-right").hide();
			}
	var w=jQuery("#main").width()/2+10;
}else if(jQuery("#main").width()>961){

			if(old_item_length>3){
            jQuery(".field-name-field-image .bt-left").show();
						jQuery(".field-name-field-image .bt-right").show();
			}else{
					jQuery(".field-name-field-image .bt-left").hide();
						jQuery(".field-name-field-image .bt-right").hide();
			}
	var w=473;
}
			get_totalwidth(w);
		resizeM(old_item_length);
	jQuery(window).resize(function(){

 resizeM(old_item_length);

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

					 if( leftwidth>-w){
						jQuery('.field-name-field-image .field-items') .css("margin-left",-subWidth+w*3);
						leftwidth =-subWidth+w*3;
					}
				 
				jQuery(".field-name-field-image .field-items").animate({"margin-left":(leftwidth+w)+'px'});
				setTimeout('jQuery(".bt-right").attr("disabled",false);',1000);
	});

});

function resizeM(old_item_length){
	if(jQuery("#main").width()>319 && jQuery("#main").width()<640){

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
if(old_item_length>1){
            jQuery(".field-name-field-image .bt-left").show();
						jQuery(".field-name-field-image .bt-right").show();
			}else{
					jQuery(".field-name-field-image .bt-left").hide();
						jQuery(".field-name-field-image .bt-right").hide();
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
var lastid=parseInt(jQuery(".field-name-field-image .field-items .field-item:last").index())+1;

				if(lastid>3){
					jQuery('.field-name-field-image .field-items') .css("margin-left",-(w+10)*3);
				}
if(old_item_length>2){
            jQuery(".field-name-field-image .bt-left").show();
						jQuery(".field-name-field-image .bt-right").show();
			}else{
					jQuery(".field-name-field-image .bt-left").hide();
						jQuery(".field-name-field-image .bt-right").hide();
			}

	}else if(jQuery("#main").width()>961){
	
					jQuery('.field-name-field-image').css('height',"auto");
				jQuery('.field-name-field-image .field-items').css("height","auto");
				if(jQuery(".next_click").html()!=null){
						 jQuery(".prev_click").remove();
						 jQuery(".next_click").remove();
				}
					var w=jQuery("#main").width()/3;
					
				var itemcount=jQuery('.field-name-field-image .field-items .field-item:last').index()+1;
					subWidth=itemcount*(w+10);
				jQuery('.field-name-field-image .field-items').css("width",subWidth);
					jQuery('.field-name-field-image .field-items .field-item').css('width',(w-10)+'px');
				var lastid=parseInt(jQuery(".field-name-field-image .field-items .field-item:last").index())+1;

								if(lastid>3){
									jQuery('.field-name-field-image .field-items') .css("margin-left",-(w+10)*3);
								}
			if(old_item_length>3){
            jQuery(".field-name-field-image .bt-left").show();
						jQuery(".field-name-field-image .bt-right").show();
			}else{
					jQuery(".field-name-field-image .bt-left").hide();
						jQuery(".field-name-field-image .bt-right").hide();
			}

	}

}

			function get_totalwidth(w) {

			var desshow='.field-name-field-image .field-items';
				var rtotalwidth=0;
				var sfirst=jQuery(desshow+" .field-item:first");
				var slast=jQuery(desshow+" .field-item:last");
				var lastid=parseInt(jQuery(desshow+" .field-item:last").index())+1;

				if(lastid>=3){
						
						 var nlast=jQuery(desshow+" .field-item:last");
						 jQuery(desshow+" .field-item:first").before('<div class="'+nlast.prev("div").prev("div").attr('class')+'">'+nlast.prev("div").prev("div").html()+'</div><div class="'+nlast.prev("div").attr('class')+'">'+nlast.prev("div").html()+'</div><div class="'+nlast.attr('class')+'">'+nlast.html()+'</div>');
						jQuery('.field-name-field-image .field-items') .css("margin-left",-w*3);
				}
					rtotalwidth=0;
					jQuery(desshow+" .field-item").each(function(){
						rtotalwidth+=parseInt(jQuery(this).css('width'))+20;
					});
						
					jQuery(desshow).css("width",rtotalwidth);
					
				
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
