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

jQuery('.home-video .video-button .button1').click(function(){

 jQuery('body').overlay({
	 //preventDefault();
	  effect: 'fade',
	  opacity: 0.6,
	  closeOnClick:true, 
	 onShow: function() {
     	jQuery('.home-video .video-content1').show();
	 },
	onHide: function() {
         jQuery('.home-video .video-content1').hide();
	}, 
	});


});

jQuery('.home-video .video-content1 .close1').click(function(){

jQuery("body .overlay").remove();
jQuery('.home-video .video-content1').hide();
 jQuery("body").removeClass("overlay-trigger");
 jQuery("body").css({"overflow":"inherit"});

});


jQuery('.home-video .video-button .button2').click(function(){

 jQuery('body').overlay({
	 //preventDefault();
	  effect: 'fade',
	  opacity: 0.6,
	  closeOnClick:true, 
	 onShow: function() {
     	jQuery('.home-video .video-content2').show();
	 },
	onHide: function() {
         jQuery('.home-video .video-content2').hide();
	}, 
	});


});

jQuery('.home-video .video-content2 .close2').click(function(){

jQuery("body .overlay").remove();
jQuery('.home-video .video-content2').hide();
 jQuery("body").removeClass("overlay-trigger");
 jQuery("body").css({"overflow":"inherit"});

});


jQuery('.home-video .video-button .button3').click(function(){

 jQuery('body').overlay({
	 //preventDefault();
	  effect: 'fade',
	  opacity: 0.6,
	  closeOnClick:true, 
	 onShow: function() {
     	jQuery('.home-video .video-content3').show();
	 },
	onHide: function() {
         jQuery('.home-video .video-content3').hide();
	}, 
	});


});

jQuery('.home-video .video-content3 .close3').click(function(){

jQuery("body .overlay").remove();
jQuery('.home-video .video-content3').hide();
 jQuery("body").removeClass("overlay-trigger");
 jQuery("body").css({"overflow":"inherit"});

});



});
