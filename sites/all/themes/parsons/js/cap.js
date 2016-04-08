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
});
