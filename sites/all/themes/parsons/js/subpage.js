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
if(jQuery(document).width()>319&&jQuery(document).width()<961){
subHeight=jQuery('.field-name-field-image .field-items .field-item').height();
disHeight=subHeight*3;
dnum=jQuery(".field-name-field-image .field-items .field-item").length;
h=dnum*284;
jQuery('.field-name-field-image .field-items').css('height',h+'px');
jQuery('.field-name-field-image').css('height',disHeight+'px');
alert(disHeight);
}
});
