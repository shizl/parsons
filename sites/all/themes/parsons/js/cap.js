jQuery(document).ready(function(){
if(jQuery("body").hasClass("i18n-zh-hant")){
			jQuery("#edit-captcha-response").attr("placeholder","輸入驗證碼");
}else if(jQuery("body").hasClass("i18n-zh-hans")){
      jQuery("#edit-captcha-response").attr("placeholder","输入验证码");
}else if(jQuery("body").hasClass("i18n-en")){
     jQuery("#edit-captcha-response").attr("placeholder","CAPTCHA");
}
if(jQuery("body").hasClass("i18n-zh-hant")){
      jQuery("#block-webform-client-block-105 .webform-submit").attr("value","提交");
}
jQuery(".facebook-con").click(function(){
     jQuery(".facebook-list").fadeToggle(100);
     jQuery(".wechat-list").css("display","none");
     jQuery(".arrow-facebook").fadeToggle(100);
     jQuery(".arrow-wechat").css("display","none");
});
jQuery(".wechat-con").click(function(){
     jQuery(".wechat-list").fadeToggle(100);
     jQuery(".facebook-list").css("display","none");
     jQuery(".arrow-wechat").fadeToggle(100);
     jQuery(".arrow-facebook").css("display","none");
});
jQuery(".wechat-sh").mouseenter(function(){
     jQuery(".img-sh").fadeIn(200);
jQuery(".wechat-sh").mouseleave(function(){
     jQuery(".img-sh").fadeOut(200);
});
});
jQuery(".wechat-zb").mouseenter(function(){
     jQuery(".img-zb").fadeIn(200);
jQuery(".wechat-zb").mouseleave(function(){
     jQuery(".img-zb").fadeOut(200);
});
});
jQuery(".wechat-hk").mouseenter(function(){
     jQuery(".img-hk").fadeIn(200);
jQuery(".wechat-hk").mouseleave(function(){
     jQuery(".img-hk").fadeOut(200);
});
});
jQuery(".wechat-bj").mouseenter(function(){
     jQuery(".img-bj").fadeIn(200);
jQuery(".wechat-bj").mouseleave(function(){
     jQuery(".img-bj").fadeOut(200);
});
});
jQuery(".wechat-gd").mouseenter(function(){
     jQuery(".img-gd").fadeIn(200);
jQuery(".wechat-gd").mouseleave(function(){
     jQuery(".img-gd").fadeOut(200);
});
});
jQuery(".wechat-fj").mouseenter(function(){
     jQuery(".img-fj").fadeIn(200);
jQuery(".wechat-fj").mouseleave(function(){
     jQuery(".img-fj").fadeOut(200);
});
});
});
