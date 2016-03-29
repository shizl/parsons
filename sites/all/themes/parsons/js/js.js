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

jQuery('.region-footer .block-menu-block h2').click(function(){
var width = jQuery(window).width()

if (parseInt(width)<=640 ){

jQuery(this).parent().find('.content').toggle();

}

});

});

});
