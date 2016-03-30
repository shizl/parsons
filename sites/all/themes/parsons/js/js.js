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

jQuery(window).resize(function(){
   
var width = jQuery('.node-product .brands-images .item').width();
jQuery('.node-product .brands-images .item').css('height',width+'px');

});

});
