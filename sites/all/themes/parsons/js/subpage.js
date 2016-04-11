jQuery(document).ready(function(){
 width = 0;
 c_width = 0;
 jQuery('.field-name-field-image .field-items .field-item').each(function(){
  c_width = c_width +460;
});
jQuery('.field-name-field-image .field-items ').css({'width':c_width+'px'});

   jQuery(".bt-left").click(function(){
   left =  c_width /2;
 if( width<=0 && width > parseInt( '-'+left)){
width = width-460;
      jQuery(".field-items").animate({left:width+'px'});
}
  });
jQuery(".bt-right").click(function(){
if(width< 0){
width = width+460;
      jQuery(".field-items").animate({left:width+'px'});
}
});
if(jQuery(document).width()>319&&jQuery(document).width()<640){
subHeight=jQuery('.field-name-field-image .field-items .field-item').height();
disHeight=subHeight*3;
dnum=jQuery(".field-name-field-image .field-items .field-item").length;
h=dnum*subHeight;
jQuery('.field-name-field-image .field-items').css('height',h+'px');

jQuery('.field-name-field-image').css('height',disHeight+'px');

jQuery(".field-name-field-image").append("<p onclick='pre_()'>1</p>");

jQuery(".field-name-field-image").append("<p onclick='next_()'>2</p>");


jQuery(window).resize(function(){
subHeight=jQuery('.field-name-field-image .field-items .field-item').height();
disHeight=subHeight*3;
dnum=jQuery(".field-name-field-image .field-items .field-item").length;
h=dnum*subHeight;
jQuery('.field-name-field-image .field-items').css('height',h+'px');

jQuery('.field-name-field-image').css('height',disHeight+'px');
});
}
if(jQuery(document).width()>=640&&jQuery(document).width()<960){
subWidth=jQuery('.field-name-field-image .field-items .field-item').width();
disWidth=subWidth*2;
dnum=jQuery(".field-name-field-image .field-items .field-item").length;
w=dnum*subWidth;
jQuery('.field-name-field-image .field-items').css('width',w+'px');
jQuery('.field-name-field-image').css('width',disWidth+'px');
alert(disWidth);
 jQuery(".bt-left").click(function(){
   left =  c_width /2;
 if( width<=0 && width > parseInt( '-'+left)){
width = width-460;
      jQuery(".field-items").animate({left:width+'px'});
}
});
jQuery(".bt-right").click(function(){
if(width< 0){
width = width+460;
      jQuery(".field-items").animate({left:width+'px'});
}
});
jQuery(window).resize(function(){
  subWidth=jQuery('.field-name-field-image .field-items .field-item').width();
  disWidth=subHeight*2;
  dnum=jQuery(".field-name-field-image .field-items .field-item").length;
  w=dnum*subWidth;
  jQuery('.field-name-field-image .field-items').css('width',w+'px');
  jQuery('.field-name-field-image').css('width',disWidth+'px');
});
}
});
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
