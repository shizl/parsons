jQuery(document).ready(function(){
var width = jQuery('.node-product .brands-images .item').width();
jQuery('.node-product .brands-images .item').css('height',width+'px');

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


jQuery('.region-footer .block-menu-block h2').click(function(){
        var width = jQuery(window).width()+17;
        if(width<=640){
   	jQuery(this).parent().find('.content').toggle();
	var display1 = jQuery(this).parent().find('.content').css('display');

	if(display1 == 'none'){

		jQuery(this).css('background-image','url(/sites/all/themes/parsons/images/2.png)');


	}else{

		jQuery(this).css('background-image','url(/sites/all/themes/parsons/images/1.png)');

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




jQuery(window).resize(function(){
   
var width = jQuery('.node-product .brands-images .item').width();
jQuery('.node-product .brands-images .item').css('height',width+'px');

});



video_html1 = jQuery(".home-video .video-content1").html();
video_html2 = jQuery(".home-video .video-content2").html();
video_html3 = jQuery(".home-video .video-content3").html();

jQuery('.home-video .video-button .button1').click(function(){

if(jQuery(".home-video .video-content1").html()==""){
  jQuery(".home-video .video-content1").html(video_html1);
}

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

jQuery('.home-video .video-button .button2').click(function(){

if(jQuery(".home-video .video-content2").html()==""){
  jQuery(".home-video .video-content2").html(video_html2);
}
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

jQuery('.home-video .video-button .button3').click(function(){

if(jQuery(".home-video .video-content3").html()==""){
  jQuery(".home-video .video-content3").html(video_html3);
}

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

jQuery('.morelink').click(function(){

   nid = jQuery(this).attr('data-id');
   	jQuery.post("/morelink", {nid:nid},function(data){
		jQuery('#more-link-content .content').html(data.body);
		jQuery('#more-link-content .title').html(data.title);
	
	nids = new Array;
	jQuery('.page-bottom-slider .slides li').each(function(){
		if(jQuery(this).attr('class')!='clone'){
			id = jQuery(this).find('.morelink').attr('data-id');
			nids.push(id);
		}
	});

		prv_id = '';
		next_id = '';
		for(var item in nids) {
		   if(nids[item]==nid){
			if((nids.length)-1>item){
			 next_id = nids[parseInt(item)+1];
			}
	
			if(item>0){
			prv_id = nids[parseInt(item)-1];
			}
		   }
		}
		jQuery('#more-link-content .prv').attr('data-id',prv_id);
		jQuery('#more-link-content .next').attr('data-id',next_id);

		 if(jQuery('#more-link-content .prv').attr('data-id')!=''){
			jQuery('#more-link-content .prv').css({'color':'#208a38','cursor':'pointer'});
		  }else{
			jQuery('#more-link-content .prv').css({'color':'inherit','cursor':'inherit'});	
		  }
		 if(jQuery('#more-link-content .next').attr('data-id')!=''){
			jQuery('#more-link-content .next').css({'color':'#208a38','cursor':'pointer'});
		  }else{
			jQuery('#more-link-content .next').css({'color':'inherit','cursor':'inherit'});	
		  }


	    jQuery('body').overlay({
		 //preventDefault();
		  effect: 'fade',
		  opacity: 0.6,
		  closeOnClick:true, 
		 onShow: function() {
	     	jQuery('#more-link-content').show();
		 },
		onHide: function() {
		 jQuery('#more-link-content').hide();
		}, 
	    });

	     },'json');

});


jQuery('.morelink2').click(function(){

   nid = jQuery(this).attr('data-id');
   	jQuery.post("/morelink", {nid:nid},function(data){
		jQuery('#more-link-content2 .content').html(data.body);
		jQuery('#more-link-content2 .title').html(data.title);
	
	nids = new Array;
	jQuery('.view-culture .views-row ').each(function(){
		
			id = jQuery(this).find('.views-field-nothing .field-content .morelink2').attr('data-id');
			nids.push(id);
		
	});

		prv_id = '';
		next_id = '';
		for(var item in nids) {
		   if(nids[item]==nid){
			if((nids.length)-1>item){
			 next_id = nids[parseInt(item)+1];
			}
	
			if(item>0){
			prv_id = nids[parseInt(item)-1];
			}
		   }
		}
		jQuery('#more-link-content2 .prv').attr('data-id',prv_id);
		jQuery('#more-link-content2 .next').attr('data-id',next_id);

		 if(jQuery('#more-link-content2 .prv').attr('data-id')!=''){
			jQuery('#more-link-content2 .prv').css({'color':'#208a38','cursor':'pointer'});
		  }else{
			jQuery('#more-link-content2 .prv').css({'color':'inherit','cursor':'inherit'});	
		  }
		 if(jQuery('#more-link-content2 .next').attr('data-id')!=''){
			jQuery('#more-link-content2 .next').css({'color':'#208a38','cursor':'pointer'});
		  }else{
			jQuery('#more-link-content2 .next').css({'color':'inherit','cursor':'inherit'});	
		  }


	    jQuery('body').overlay({
		 //preventDefault();
		  effect: 'fade',
		  opacity: 0.6,
		  closeOnClick:true, 
		 onShow: function() {
	     	jQuery('#more-link-content2').show();
		 },
		onHide: function() {
		 jQuery('#more-link-content2').hide();
		}, 
	    });

	     },'json');

});




jQuery('#more-link-content .control span').click(function(){

 if(jQuery(this).attr('data-id')!=''){
      

    nid = jQuery(this).attr('data-id');
   	jQuery.post("/morelink", {nid:nid},function(data){
		jQuery('#more-link-content .content').html(data.body);
		jQuery('#more-link-content .title').html(data.title);
	
	nids = new Array;
	jQuery('.page-bottom-slider .slides li').each(function(){
		if(jQuery(this).attr('class')!='clone'){
			id = jQuery(this).find('.morelink').attr('data-id');
			nids.push(id);
		}
	});

		prv_id = '';
		next_id = '';
		for(var item in nids) {
		   if(nids[item]==nid){
			if((nids.length)-1>item){
			 next_id = nids[parseInt(item)+1];
			}
	
			if(item>0){
			prv_id = nids[parseInt(item)-1];
			}
		   }
		}
		jQuery('#more-link-content .prv').attr('data-id',prv_id);
		jQuery('#more-link-content .next').attr('data-id',next_id);

		 if(jQuery('#more-link-content .prv').attr('data-id')!=''){
			jQuery('#more-link-content .prv').css({'color':'#208a38','cursor':'pointer'});
		  }else{
			jQuery('#more-link-content .prv').css({'color':'inherit','cursor':'inherit'});	
		  }
		 if(jQuery('#more-link-content .next').attr('data-id')!=''){
			jQuery('#more-link-content .next').css({'color':'#208a38','cursor':'pointer'});
		  }else{
			jQuery('#more-link-content .next').css({'color':'inherit','cursor':'inherit'});	
		  }

	     },'json');

    
  }

});


jQuery('#more-link-content2 .control span').click(function(){

 if(jQuery(this).attr('data-id')!=''){
      

    nid = jQuery(this).attr('data-id');
   	jQuery.post("/morelink", {nid:nid},function(data){
		jQuery('#more-link-content2 .content').html(data.body);
		jQuery('#more-link-content2 .title').html(data.title);
	
	nids = new Array;
	jQuery('.view-culture .views-row ').each(function(){
		
			id = jQuery(this).find('.views-field-nothing .field-content .morelink2').attr('data-id');
			nids.push(id);
		
	});

		prv_id = '';
		next_id = '';
		for(var item in nids) {
		   if(nids[item]==nid){
			if((nids.length)-1>item){
			 next_id = nids[parseInt(item)+1];
			}
	
			if(item>0){
			prv_id = nids[parseInt(item)-1];
			}
		   }
		}
		jQuery('#more-link-content2 .prv').attr('data-id',prv_id);
		jQuery('#more-link-content2 .next').attr('data-id',next_id);

		 if(jQuery('#more-link-content2 .prv').attr('data-id')!=''){
			jQuery('#more-link-content2 .prv').css({'color':'#208a38','cursor':'pointer'});
		  }else{
			jQuery('#more-link-content2 .prv').css({'color':'inherit','cursor':'inherit'});	
		  }
		 if(jQuery('#more-link-content2 .next').attr('data-id')!=''){
			jQuery('#more-link-content2 .next').css({'color':'#208a38','cursor':'pointer'});
		  }else{
			jQuery('#more-link-content2 .next').css({'color':'inherit','cursor':'inherit'});	
		  }

	     },'json');

    
  }

});





jQuery('#more-link-content .close').click(function(){

jQuery("body .overlay").remove();
jQuery('#more-link-content').hide();
 jQuery("body").removeClass("overlay-trigger");
 jQuery("body").css({"overflow":"inherit"});

});

jQuery('.for-freetiaokuan .closee').click(function(){

jQuery("body .overlay").remove();
jQuery('.for-freetiaokuan').hide();
 jQuery("body").removeClass("overlay-trigger");
 jQuery("body").css({"overflow":"inherit"});

});

jQuery('#more-link-content2 .close').click(function(){

jQuery("body .overlay").remove();
jQuery('#more-link-content2').hide();
 jQuery("body").removeClass("overlay-trigger");
 jQuery("body").css({"overflow":"inherit"});

});

jQuery('.year_filter a').each(function(){
  url = window.location.href;
   url_request = jQuery(this).attr('href');
   new_request = url_request.substr(url_request.indexOf('?'));

  if(url.indexOf(new_request)>0){
	jQuery(this).addClass('active');
   }else{
	jQuery(this).removeClass('active');
   }

});


views_row = 1;
jQuery('.about-overview .views-row').each(function(){

   if(views_row>1){
	jQuery(this).hide();
    }
 views_row++;

});


if(jQuery('.about-overview .views-row:last').is(":visible")){
		jQuery('.about-overview .more-link').hide();
	}

init_views_row = 2;
jQuery('.about-overview .more-link').click(function(){

 i = 0;
jQuery('.about-overview .views-row').each(function(){
   if(i<init_views_row){
	jQuery(this).fadeIn(800);	
    }
 i++;
});

init_views_row = init_views_row+1;
	if(jQuery('.about-overview .views-row:last').is(":visible")){
		jQuery('.about-overview .more-link').hide();
	}

});

jQuery('.view-culture .view-header li a').each(function(){

var url = document.URL;
var href = jQuery(this).attr('href');

if(url.indexOf(href)>0){

jQuery(this).addClass('active');
}

});

jQuery('.view-about-us.view-id-about_us.view-display-id-page_4 .view-header li a').each(function(){

var url = document.URL;
var href = jQuery(this).attr('href');

if(url.indexOf(href)>0){

jQuery(this).addClass('active');
}

});

});

function video_close1(){
jQuery(".home-video .video-content1").html('');
jQuery("body .overlay").remove();
jQuery('.home-video .video-content1').hide();
 jQuery("body").removeClass("overlay-trigger");
 jQuery("body").css({"overflow":"inherit"});
}
function video_close2(){
jQuery(".home-video .video-content2").html('');
jQuery("body .overlay").remove();
jQuery('.home-video .video-content2').hide();
 jQuery("body").removeClass("overlay-trigger");
 jQuery("body").css({"overflow":"inherit"});
}
function video_close3(){
jQuery(".home-video .video-content3").html('');
jQuery("body .overlay").remove();
jQuery('.home-video .video-content3').hide();
 jQuery("body").removeClass("overlay-trigger");
 jQuery("body").css({"overflow":"inherit"});
}

