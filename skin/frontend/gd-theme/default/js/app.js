jQuery(document).foundation(),jQuery(document).ready(function(){function e(e){e.children().sort(function(){return Math.round(Math.random())-.5}).each(function(){jQuery(this).appendTo(e)})}jQuery(".callout.messages").slideDown({duration:1500,complete:function(){jQuery(".callout.messages").delay(7e3).slideUp(1500)}}),jQuery(".quantity .input-group").append('<span class="input-group-label plus"><i id="add1" class="fa fa-plus" /></span>').prepend('<span class="input-group-label minus"><i id="minus1" class="fa fa-minus" /></span>'),jQuery(".quantity .plus").click(function(){var e=parseInt(jQuery(".qty").val());e&&""!=e&&"NaN"!=e||(e=0),jQuery(".qty").val(e+1)}),jQuery(".quantity .minus").click(function(){var e=parseInt(jQuery(".qty").val());"NaN"==e&&(e=0),e>1&&jQuery(".qty").val(e-1)}),jQuery(".view-mode strong.grid").after('<i class="fa fa-th"></i>'),jQuery(".view-mode strong.list").after('<i class="fa fa-align-justify"></i>'),jQuery(".view-mode a.list").each(function(){"List"==jQuery(this).text()&&jQuery(this).text(""),jQuery(this).append('<i class="fa fa-align-justify"></i>')}),jQuery(".view-mode a.grid").each(function(){"Grid"==jQuery(this).text()&&jQuery(this).text(""),jQuery(this).append('<i class="fa fa-th"></i>')}),jQuery(".cookie-container").after('<div class="scrollToTop"></div>'),jQuery(".scrollToTop").append('<i class="fa fa-chevron-circle-up fa-2x"></i>'),jQuery(window).scroll(function(){jQuery(this).scrollTop()>100?jQuery(".scrollToTop").fadeIn():jQuery(".scrollToTop").fadeOut()}),jQuery(".scrollToTop").click(function(){return jQuery("html, body").animate({scrollTop:0},800),!1}),jQuery(".cookie-container").cookieBar({closeButton:".close-cookie"}),jQuery(".top-products-slider").on("initialize.owl.carousel",function(s){e(jQuery(".top-products-slider"))}),jQuery(".top-products-slider").owlCarousel({items:6,loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:3},1100:{items:4},1400:{items:6}}}),jQuery(".credentials-slider").on("initialize.owl.carousel",function(s){e(jQuery(".credentials-slider"))}),jQuery(".credentials-slider").owlCarousel({items:8,loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:2},600:{items:5},1e3:{items:8}}}),jQuery(".reviews-slider").on("initialize.owl.carousel",function(s){e(jQuery(".reviews-slider"))}),jQuery(".reviews-slider").owlCarousel({items:1,loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayHoverPause:!0,autoplayTimeout:5e3,autoHeight:!0});var s=($("#custom-events"),{cookieLiveTime:100,cookieName:"newssubscriber",baseUrl:"",setCookieLiveTime:function(e){this.cookieLiveTime=e},setCookieName:function(e){this.cookieName=e},setBaseUrl:function(e){this.baseUrl=e},getBaseUrl:function(e){return this.baseUrl},createCookie:function(){var e=this.cookieLiveTime,s=this.cookieName;if(e){var r=new Date;r.setTime(r.getTime()+24*e*60*60*1e3);var o="; expires="+r.toGMTString()}else var o="";document.cookie=escape(s)+"="+escape(1)+o+"; path=/"},readCookie:function(e){for(var e=this.cookieName,s=escape(e)+"=",r=document.cookie.split(";"),o=0;o<r.length;o++){for(var i=r[o];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(s))return unescape(i.substring(s.length,i.length))}return null},boxClose:function(){new Foundation.Reveal(jQuery("#esns")).close()},boxOpen:function(){new Foundation.Reveal(jQuery("#esns")).open()}});jQuery(function(){s.readCookie(),jQuery("#esns_submit").click(function(){var e=jQuery("#esns_email").val();jQuery.post(s.getBaseUrl()+"newsletter/subscriber/newajax/",{email:e},function(e){e.errorMsg?jQuery("#esns_box_subscribe_response_error").html("<p>"+e.errorMsg+"</p><hr>"):(jQuery("#esns_box_subscribe_response_error").html(""),jQuery("#esns_box_subscribe_response_success").html("<p>"+e.successMsg+"</p><hr>"),jQuery("#esns_box_subscribe_form").css("display","none"),jQuery("#esns_box_subscribe_response_success").css("display","block"),setTimeout("EsNewsSubscribers.boxClose()",5e3))})})}),jQuery(".product-img-box").lightGallery({iframeMaxWidth:"100%",videoMaxWidth:"1140px",selector:".item",thumbnail:!0,hash:!1}),jQuery("#password").focus(function(){jQuery("#toolTipPasswordStrength").css("display","inline")}),jQuery("#password").blur(function(){jQuery("#toolTipPasswordStrength").css("display","none")});var r={};r.ui={container:"#toolTipPasswordStrength",viewports:{progress:"#passwordStrengthBar",verdict:".progress-meter",errors:"#passwordStrengthHeadLine"},errorMessages:{wordLength:"Ihr Passwort ist zu kurz",wordNotEmail:"Keine Email",wordSimilarToUsername:"Kein Benutzername",wordTwoCharacterClasses:"Keine gleichen Wortgruppen",wordRepetitions:"Zu viele Wiederholungen",wordSequences:"Ihr Passwort enthält Sequenzen"},verdicts:["zu kurz","schwach","gut","stark","sehr stark"],showVerdictsInsideProgressBar:!0,scores:[16,26,38,45],showErrors:!0},r.rules={activated:{wordNotEmail:!0,wordLength:!0,wordSimilarToUsername:!0,wordSequences:!0,wordTwoCharacterClasses:!0,wordRepetitions:!0,wordLowercase:!0,wordUppercase:!0,wordOneNumber:!0,wordThreeNumbers:!0,wordOneSpecialChar:!0,wordTwoSpecialChar:!0,wordUpperLowerCombo:!0,wordLetterNumberCombo:!0,wordLetterNumberCharCombo:!0}},r.common={minChar:8},jQuery("#password").pwstrength(r),jQuery("ul.options-list").each(function(){jQuery(this).find("li").length>2&&jQuery(this).find("li:gt(2)").hide().end().append(jQuery('<li class="show-more">weitere Optionen anzeigen</li>').click(function(){jQuery(this).siblings(":hidden").show().end().remove()}))})});