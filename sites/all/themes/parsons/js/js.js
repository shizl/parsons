jQuery(document).ready(function(){

jQuery('#block-block-2 .free').click(function(){


 jQuery('body').overlay({
	 //preventDefault();
	  effect: 'fade',
	  opacity: 0.6,
	  closeOnClick:true, 
	 onShow: function() {


     	jQuery('.for-freetiaokuan').show();

	 },
	onHide: function() {

         jQuery('.for-freetiaokuan').hide();
	}, 
	});


});


jQuery('.region-footer .block-menu-block').click(function(){
        var width = jQuery(window).width()+17;
        if(width<=640){
   	jQuery(this).find('.content').toggle();
	var display1 = jQuery(this).find('.content').css('display');

	if(display1 == 'none'){

		jQuery(this).find('h2').css('background-image','url(/sites/all/themes/parsons/images/2.png)');


	}else{

		jQuery(this).find('h2').css('background-image','url(/sites/all/themes/parsons/images/1.png)');

	}
}
    });
jQuery(window).resize(function(){
var width = jQuery(window).width()+17;
if (width<=640 ){
jQuery('.region-footer .block-menu-block .content').css('display','none');
 jQuery('.region-footer .block-menu-block h2').css('background-image','url(/sites/all/themes/parsons/images/2.png)');
}else{

jQuery('.region-footer .block-menu-block .content').css('display','block');
jQuery('.region-footer .block-menu-block h2').css('background-image','none');

}
});


});
