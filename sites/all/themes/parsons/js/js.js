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




jQuery('.region-footer .block-menu-block').each(function(){

var width = jQuery(window).width();

if (parseInt(width)<=640 ){

jQuery('.region-footer .block-menu-block h2').click(function(){



jQuery(this).parent().find('.content').toggle();



});
}
});

jQuery('.region-footer .block-menu-block h2').click(function(){

var display1 = jQuery(this).parent().find('.content').css('display');
if(display1 == 'none'){

jQuery(this).css('background-image','url(/sites/all/themes/parsons/images/2.png)');
//alert(11);

}else{

jQuery(this).css('background-image','url(/sites/all/themes/parsons/images/1.png)');
//alert(22);
}
});


});
