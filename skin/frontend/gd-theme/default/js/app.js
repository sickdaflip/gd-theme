// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
jQuery(document).foundation();

jQuery(document).ready(function () {

    
    
    //Target specific browser
    //Uncomment if you need it
    // if (!!navigator.userAgent.match(/Trident\/7\./)) {
    //     jQuery('body').addClass('ie-target');
    // }
    // if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    //     jQuery('body').addClass('safari-target');
    // }

    // if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    //     jQuery('body').addClass('chrome-target');
    // }

    // Show Modal for Store View
    //if (jQuery.cookie('store_view') == null) {
    //    jQuery.cookie('store_view', 'yes', {expires: 7, path: '/'});
    //    setTimeout(function () {
    //        jQuery("#store_view").foundation('reveal', 'open');
    //    }, 3000);
    //}


    // Alert-Box auto_close
    jQuery('.callout.messages').slideDown({
        duration: 1500,
        complete: function () {
            jQuery('.callout.messages').delay(7000).slideUp(1500);
        }
    });

    // Product page / wishlist - quantity increase/decrease
    jQuery('.quantity .input-group').append('<span class="input-group-label plus"><i id="add1" class="fa fa-plus" /></span>').prepend('<span class="input-group-label minus"><i id="minus1" class="fa fa-minus" /></span>');
    jQuery('.quantity .plus').click(function () {
        var currentVal = parseInt(jQuery(".qty").val());
        if (!currentVal || currentVal == "" || currentVal == "NaN") currentVal = 0;
        jQuery(".qty").val(currentVal + 1);
    });

    jQuery('.quantity .minus').click(function () {
        var currentVal = parseInt(jQuery(".qty").val());
        if (currentVal == "NaN") currentVal = 0;
        if (currentVal > 1) {
            jQuery(".qty").val(currentVal - 1);
        }
    });

    //Grid / List view
    jQuery('.view-mode strong.grid').after('<i class="fa fa-th"></i>');
    jQuery('.view-mode strong.list').after('<i class="fa fa-align-justify"></i>');

    jQuery('.view-mode a.list').each(function () {
        if (jQuery(this).text() == 'List')
            jQuery(this).text('');
        jQuery(this).append('<i class="fa fa-align-justify"></i>');
    });

    jQuery('.view-mode a.grid').each(function () {
        if (jQuery(this).text() == 'Grid')
            jQuery(this).text('');
        jQuery(this).append('<i class="fa fa-th"></i>');
    });

    //Scroll to top
    jQuery('.cookie-container').after('<div class="scrollToTop"></div>');
    jQuery('.scrollToTop').append('<i class="fa fa-chevron-circle-up fa-2x"></i>');
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.scrollToTop').fadeIn();
        } else {
            jQuery('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    jQuery('.scrollToTop').click(function () {
        jQuery('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    //CookieBar
    jQuery('.cookie-container').cookieBar({
        closeButton: '.close-cookie'
    });

    //owl.carousel
    //Sort random function for owl.carousel
    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            jQuery(this).appendTo(owlSelector);
        });
    }

    //Home Slider Top Products
    var $slider1 = jQuery('.top-products-slider');
    $slider1.on('initialize.owl.carousel', function (event) {
        var selector = jQuery('.top-products-slider');
        random(selector);
    });
    jQuery('.top-products-slider').owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {items: 1},
            600: {items: 2},
            1000: {items: 3},
            1100: {items: 4},
        }
    });
    //Home Slider credentials
    var $slider2 = jQuery('.credentials-slider');
    $slider2.on('initialize.owl.carousel', function (event) {
        var selector = jQuery('.credentials-slider');
        random(selector);
    });
    jQuery('.credentials-slider').owlCarousel({
        items: 8,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {items: 2},
            600: {items: 5},
            1000: {items: 8}
        }
    });

    //Footer Slider user reviews
    var $slider3 = jQuery('.reviews-slider');
    $slider3.on('initialize.owl.carousel', function (event) {
        var selector = jQuery('.reviews-slider');
        random(selector);
    });
    jQuery('.reviews-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoHeight: true
    });
    var $customEvents = $('#custom-events');

    //Newsletter
    var EsNewsSubscribers = {

        cookieLiveTime: 100,
        cookieName: 'newssubscriber',
        baseUrl: '',

        setCookieLiveTime: function(value)
        {
            this.cookieLiveTime = value;
        },

        setCookieName: function(value)
        {
            this.cookieName = value;
        },

        setBaseUrl: function(url)
        {
            this.baseUrl = url;
        },

        getBaseUrl: function(url)
        {
            return this.baseUrl;
        },

        createCookie: function() {
            var days = this.cookieLiveTime;
            var value = 1;
            var name = this.cookieName;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
            }
            else var expires = "";
            document.cookie = escape(name)+"="+escape(value)+expires+"; path=/";
        },

        readCookie: function(name) {
            var name = this.cookieName;
            var nameEQ = escape(name) + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length));
            }
            return null;
        },

        boxClose: function()
        {
            var popup = new Foundation.Reveal(jQuery('#esns'));
            popup.close();
        },

        boxOpen: function()
        {
            var popup = new Foundation.Reveal(jQuery('#esns'));
            popup.open();
        }
    };

    jQuery(function() {
        if (EsNewsSubscribers.readCookie() != 1) {
            //EsNewsSubscribers.createCookie();
            //EsNewsSubscribers.boxOpen();
        }
        jQuery('#esns_submit').click(function(){
            var email = jQuery('#esns_email').val();
            jQuery.post(EsNewsSubscribers.getBaseUrl()+'newsletter/subscriber/newajax/', {'email':email}, function(resp) {
                if (resp.errorMsg) {
                    jQuery('#esns_box_subscribe_response_error').html('<p>'+resp.errorMsg+'</p><hr>');
                } else {
                    jQuery('#esns_box_subscribe_response_error').html('');
                    jQuery('#esns_box_subscribe_response_success').html('<p>'+resp.successMsg+'</p><hr>');
                    jQuery('#esns_box_subscribe_form').css('display','none');
                    jQuery('#esns_box_subscribe_response_success').css('display','block');
                    setTimeout('EsNewsSubscribers.boxClose()', 5000)
                }
            });
        });
    });

    //LightGallery
    jQuery('.product-img-box').lightGallery({
        iframeMaxWidth: '100%',
        videoMaxWidth: '1140px',
        selector: '.item',
        thumbnail: true,
        hash: false
    });

    jQuery('#password').focus(function() {
        jQuery('#toolTipPasswordStrength').css("display","inline");
    });
    jQuery('#password').blur(function() {
        jQuery('#toolTipPasswordStrength').css("display","none");
    });

    var options = {};
    options.ui = {
        container: "#toolTipPasswordStrength",
        viewports: {
            progress: "#passwordStrengthBar",
            verdict: ".progress-meter",
            errors: "#passwordStrengthHeadLine"
        },
        errorMessages: {
            wordLength: "Ihr Passwort ist zu kurz",
            wordNotEmail: "Keine Email",
            wordSimilarToUsername: "Kein Benutzername",
            wordTwoCharacterClasses: "Keine gleichen Wortgruppen",
            wordRepetitions: "Zu viele Wiederholungen",
            wordSequences: "Ihr Passwort enthält Sequenzen"
        },
        verdicts: ["zu kurz", "schwach", "gut", "stark", "sehr stark"],
        showVerdictsInsideProgressBar: true,
        scores: [16, 26, 38, 45],
        showErrors: true,
    };
    options.rules = {
        activated: {
            wordNotEmail: true,
            wordLength: true,
            wordSimilarToUsername: true,
            wordSequences: true,
            wordTwoCharacterClasses: true,
            wordRepetitions: true,
            wordLowercase: true,
            wordUppercase: true,
            wordOneNumber: true,
            wordThreeNumbers: true,
            wordOneSpecialChar: true,
            wordTwoSpecialChar: true,
            wordUpperLowerCombo: true,
            wordLetterNumberCombo: true,
            wordLetterNumberCharCombo: true
        }
    };
    options.common = {
        minChar: 8
    };
    jQuery('#password').pwstrength(options);

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb3VuZGF0aW9uIEphdmFTY3JpcHRcbi8vIERvY3VtZW50YXRpb24gY2FuIGJlIGZvdW5kIGF0OiBodHRwOi8vZm91bmRhdGlvbi56dXJiLmNvbS9kb2NzXG5qUXVlcnkoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICBcbiAgICBcbiAgICAvL1RhcmdldCBzcGVjaWZpYyBicm93c2VyXG4gICAgLy9VbmNvbW1lbnQgaWYgeW91IG5lZWQgaXRcbiAgICAvLyBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKSB7XG4gICAgLy8gICAgIGpRdWVyeSgnYm9keScpLmFkZENsYXNzKCdpZS10YXJnZXQnKTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignU2FmYXJpJykgIT0gLTEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA9PSAtMSkge1xuICAgIC8vICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnc2FmYXJpLXRhcmdldCcpO1xuICAgIC8vIH1cblxuICAgIC8vIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPiAtMSkge1xuICAgIC8vICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnY2hyb21lLXRhcmdldCcpO1xuICAgIC8vIH1cblxuICAgIC8vIFNob3cgTW9kYWwgZm9yIFN0b3JlIFZpZXdcbiAgICAvL2lmIChqUXVlcnkuY29va2llKCdzdG9yZV92aWV3JykgPT0gbnVsbCkge1xuICAgIC8vICAgIGpRdWVyeS5jb29raWUoJ3N0b3JlX3ZpZXcnLCAneWVzJywge2V4cGlyZXM6IDcsIHBhdGg6ICcvJ30pO1xuICAgIC8vICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICBqUXVlcnkoXCIjc3RvcmVfdmlld1wiKS5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnb3BlbicpO1xuICAgIC8vICAgIH0sIDMwMDApO1xuICAgIC8vfVxuXG5cbiAgICAvLyBBbGVydC1Cb3ggYXV0b19jbG9zZVxuICAgIGpRdWVyeSgnLmNhbGxvdXQubWVzc2FnZXMnKS5zbGlkZURvd24oe1xuICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGpRdWVyeSgnLmNhbGxvdXQubWVzc2FnZXMnKS5kZWxheSg3MDAwKS5zbGlkZVVwKDE1MDApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBQcm9kdWN0IHBhZ2UgLyB3aXNobGlzdCAtIHF1YW50aXR5IGluY3JlYXNlL2RlY3JlYXNlXG4gICAgalF1ZXJ5KCcucXVhbnRpdHkgLmlucHV0LWdyb3VwJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWxhYmVsIHBsdXNcIj48aSBpZD1cImFkZDFcIiBjbGFzcz1cImZhIGZhLXBsdXNcIiAvPjwvc3Bhbj4nKS5wcmVwZW5kKCc8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWxhYmVsIG1pbnVzXCI+PGkgaWQ9XCJtaW51czFcIiBjbGFzcz1cImZhIGZhLW1pbnVzXCIgLz48L3NwYW4+Jyk7XG4gICAgalF1ZXJ5KCcucXVhbnRpdHkgLnBsdXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsID0gcGFyc2VJbnQoalF1ZXJ5KFwiLnF0eVwiKS52YWwoKSk7XG4gICAgICAgIGlmICghY3VycmVudFZhbCB8fCBjdXJyZW50VmFsID09IFwiXCIgfHwgY3VycmVudFZhbCA9PSBcIk5hTlwiKSBjdXJyZW50VmFsID0gMDtcbiAgICAgICAgalF1ZXJ5KFwiLnF0eVwiKS52YWwoY3VycmVudFZhbCArIDEpO1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcucXVhbnRpdHkgLm1pbnVzJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFZhbCA9IHBhcnNlSW50KGpRdWVyeShcIi5xdHlcIikudmFsKCkpO1xuICAgICAgICBpZiAoY3VycmVudFZhbCA9PSBcIk5hTlwiKSBjdXJyZW50VmFsID0gMDtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWwgPiAxKSB7XG4gICAgICAgICAgICBqUXVlcnkoXCIucXR5XCIpLnZhbChjdXJyZW50VmFsIC0gMSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vR3JpZCAvIExpc3Qgdmlld1xuICAgIGpRdWVyeSgnLnZpZXctbW9kZSBzdHJvbmcuZ3JpZCcpLmFmdGVyKCc8aSBjbGFzcz1cImZhIGZhLXRoXCI+PC9pPicpO1xuICAgIGpRdWVyeSgnLnZpZXctbW9kZSBzdHJvbmcubGlzdCcpLmFmdGVyKCc8aSBjbGFzcz1cImZhIGZhLWFsaWduLWp1c3RpZnlcIj48L2k+Jyk7XG5cbiAgICBqUXVlcnkoJy52aWV3LW1vZGUgYS5saXN0JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChqUXVlcnkodGhpcykudGV4dCgpID09ICdMaXN0JylcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50ZXh0KCcnKTtcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFwcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS1hbGlnbi1qdXN0aWZ5XCI+PC9pPicpO1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcudmlldy1tb2RlIGEuZ3JpZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnRleHQoKSA9PSAnR3JpZCcpXG4gICAgICAgICAgICBqUXVlcnkodGhpcykudGV4dCgnJyk7XG4gICAgICAgIGpRdWVyeSh0aGlzKS5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtdGhcIj48L2k+Jyk7XG4gICAgfSk7XG5cbiAgICAvL1Njcm9sbCB0byB0b3BcbiAgICBqUXVlcnkoJy5jb29raWUtY29udGFpbmVyJykuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJzY3JvbGxUb1RvcFwiPjwvZGl2PicpO1xuICAgIGpRdWVyeSgnLnNjcm9sbFRvVG9wJykuYXBwZW5kKCc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tY2lyY2xlLXVwIGZhLTJ4XCI+PC9pPicpO1xuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChqUXVlcnkodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbFRvVG9wJykuZmFkZUluKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGxUb1RvcCcpLmZhZGVPdXQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9DbGljayBldmVudCB0byBzY3JvbGwgdG8gdG9wXG4gICAgalF1ZXJ5KCcuc2Nyb2xsVG9Ub3AnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDgwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vQ29va2llQmFyXG4gICAgalF1ZXJ5KCcuY29va2llLWNvbnRhaW5lcicpLmNvb2tpZUJhcih7XG4gICAgICAgIGNsb3NlQnV0dG9uOiAnLmNsb3NlLWNvb2tpZSdcbiAgICB9KTtcblxuICAgIC8vb3dsLmNhcm91c2VsXG4gICAgLy9Tb3J0IHJhbmRvbSBmdW5jdGlvbiBmb3Igb3dsLmNhcm91c2VsXG4gICAgZnVuY3Rpb24gcmFuZG9tKG93bFNlbGVjdG9yKSB7XG4gICAgICAgIG93bFNlbGVjdG9yLmNoaWxkcmVuKCkuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSAtIDAuNTtcbiAgICAgICAgfSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkodGhpcykuYXBwZW5kVG8ob3dsU2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL0hvbWUgU2xpZGVyIFRvcCBQcm9kdWN0c1xuICAgIHZhciAkc2xpZGVyMSA9IGpRdWVyeSgnLnRvcC1wcm9kdWN0cy1zbGlkZXInKTtcbiAgICAkc2xpZGVyMS5vbignaW5pdGlhbGl6ZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0galF1ZXJ5KCcudG9wLXByb2R1Y3RzLXNsaWRlcicpO1xuICAgICAgICByYW5kb20oc2VsZWN0b3IpO1xuICAgIH0pO1xuICAgIGpRdWVyeSgnLnRvcC1wcm9kdWN0cy1zbGlkZXInKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtpdGVtczogMX0sXG4gICAgICAgICAgICA2MDA6IHtpdGVtczogMn0sXG4gICAgICAgICAgICAxMDAwOiB7aXRlbXM6IDN9LFxuICAgICAgICAgICAgMTEwMDoge2l0ZW1zOiA0fSxcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vSG9tZSBTbGlkZXIgY3JlZGVudGlhbHNcbiAgICB2YXIgJHNsaWRlcjIgPSBqUXVlcnkoJy5jcmVkZW50aWFscy1zbGlkZXInKTtcbiAgICAkc2xpZGVyMi5vbignaW5pdGlhbGl6ZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0galF1ZXJ5KCcuY3JlZGVudGlhbHMtc2xpZGVyJyk7XG4gICAgICAgIHJhbmRvbShzZWxlY3Rvcik7XG4gICAgfSk7XG4gICAgalF1ZXJ5KCcuY3JlZGVudGlhbHMtc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtczogOCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwOiB7aXRlbXM6IDJ9LFxuICAgICAgICAgICAgNjAwOiB7aXRlbXM6IDV9LFxuICAgICAgICAgICAgMTAwMDoge2l0ZW1zOiA4fVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL0Zvb3RlciBTbGlkZXIgdXNlciByZXZpZXdzXG4gICAgdmFyICRzbGlkZXIzID0galF1ZXJ5KCcucmV2aWV3cy1zbGlkZXInKTtcbiAgICAkc2xpZGVyMy5vbignaW5pdGlhbGl6ZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0galF1ZXJ5KCcucmV2aWV3cy1zbGlkZXInKTtcbiAgICAgICAgcmFuZG9tKHNlbGVjdG9yKTtcbiAgICB9KTtcbiAgICBqUXVlcnkoJy5yZXZpZXdzLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIGF1dG9IZWlnaHQ6IHRydWVcbiAgICB9KTtcbiAgICB2YXIgJGN1c3RvbUV2ZW50cyA9ICQoJyNjdXN0b20tZXZlbnRzJyk7XG5cbiAgICAvL05ld3NsZXR0ZXJcbiAgICB2YXIgRXNOZXdzU3Vic2NyaWJlcnMgPSB7XG5cbiAgICAgICAgY29va2llTGl2ZVRpbWU6IDEwMCxcbiAgICAgICAgY29va2llTmFtZTogJ25ld3NzdWJzY3JpYmVyJyxcbiAgICAgICAgYmFzZVVybDogJycsXG5cbiAgICAgICAgc2V0Q29va2llTGl2ZVRpbWU6IGZ1bmN0aW9uKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvb2tpZUxpdmVUaW1lID0gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0Q29va2llTmFtZTogZnVuY3Rpb24odmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29va2llTmFtZSA9IHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEJhc2VVcmw6IGZ1bmN0aW9uKHVybClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gdXJsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEJhc2VVcmw6IGZ1bmN0aW9uKHVybClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybDtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVDb29raWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRheXMgPSB0aGlzLmNvb2tpZUxpdmVUaW1lO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gMTtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5jb29raWVOYW1lO1xuICAgICAgICAgICAgaWYgKGRheXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKyhkYXlzKjI0KjYwKjYwKjEwMDApKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiK2RhdGUudG9HTVRTdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgdmFyIGV4cGlyZXMgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gZXNjYXBlKG5hbWUpK1wiPVwiK2VzY2FwZSh2YWx1ZSkrZXhwaXJlcytcIjsgcGF0aD0vXCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZENvb2tpZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmNvb2tpZU5hbWU7XG4gICAgICAgICAgICB2YXIgbmFtZUVRID0gZXNjYXBlKG5hbWUpICsgXCI9XCI7XG4gICAgICAgICAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjYVtpXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCk9PScgJykgYyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gdW5lc2NhcGUoYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYm94Q2xvc2U6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHBvcHVwID0gbmV3IEZvdW5kYXRpb24uUmV2ZWFsKGpRdWVyeSgnI2VzbnMnKSk7XG4gICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJveE9wZW46IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHBvcHVwID0gbmV3IEZvdW5kYXRpb24uUmV2ZWFsKGpRdWVyeSgnI2VzbnMnKSk7XG4gICAgICAgICAgICBwb3B1cC5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgalF1ZXJ5KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoRXNOZXdzU3Vic2NyaWJlcnMucmVhZENvb2tpZSgpICE9IDEpIHtcbiAgICAgICAgICAgIC8vRXNOZXdzU3Vic2NyaWJlcnMuY3JlYXRlQ29va2llKCk7XG4gICAgICAgICAgICAvL0VzTmV3c1N1YnNjcmliZXJzLmJveE9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBqUXVlcnkoJyNlc25zX3N1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgZW1haWwgPSBqUXVlcnkoJyNlc25zX2VtYWlsJykudmFsKCk7XG4gICAgICAgICAgICBqUXVlcnkucG9zdChFc05ld3NTdWJzY3JpYmVycy5nZXRCYXNlVXJsKCkrJ25ld3NsZXR0ZXIvc3Vic2NyaWJlci9uZXdhamF4LycsIHsnZW1haWwnOmVtYWlsfSwgZnVuY3Rpb24ocmVzcCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLmVycm9yTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2VzbnNfYm94X3N1YnNjcmliZV9yZXNwb25zZV9lcnJvcicpLmh0bWwoJzxwPicrcmVzcC5lcnJvck1zZysnPC9wPjxocj4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNlc25zX2JveF9zdWJzY3JpYmVfcmVzcG9uc2VfZXJyb3InKS5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZXNuc19ib3hfc3Vic2NyaWJlX3Jlc3BvbnNlX3N1Y2Nlc3MnKS5odG1sKCc8cD4nK3Jlc3Auc3VjY2Vzc01zZysnPC9wPjxocj4nKTtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZXNuc19ib3hfc3Vic2NyaWJlX2Zvcm0nKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2VzbnNfYm94X3N1YnNjcmliZV9yZXNwb25zZV9zdWNjZXNzJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgnRXNOZXdzU3Vic2NyaWJlcnMuYm94Q2xvc2UoKScsIDUwMDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy9MaWdodEdhbGxlcnlcbiAgICBqUXVlcnkoJy5wcm9kdWN0LWltZy1ib3gnKS5saWdodEdhbGxlcnkoe1xuICAgICAgICBpZnJhbWVNYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICB2aWRlb01heFdpZHRoOiAnMTE0MHB4JyxcbiAgICAgICAgc2VsZWN0b3I6ICcuaXRlbScsXG4gICAgICAgIHRodW1ibmFpbDogdHJ1ZSxcbiAgICAgICAgaGFzaDogZmFsc2VcbiAgICB9KTtcblxuICAgIGpRdWVyeSgnI3Bhc3N3b3JkJykuZm9jdXMoZnVuY3Rpb24oKSB7XG4gICAgICAgIGpRdWVyeSgnI3Rvb2xUaXBQYXNzd29yZFN0cmVuZ3RoJykuY3NzKFwiZGlzcGxheVwiLFwiaW5saW5lXCIpO1xuICAgIH0pO1xuICAgIGpRdWVyeSgnI3Bhc3N3b3JkJykuYmx1cihmdW5jdGlvbigpIHtcbiAgICAgICAgalF1ZXJ5KCcjdG9vbFRpcFBhc3N3b3JkU3RyZW5ndGgnKS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIH0pO1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICBvcHRpb25zLnVpID0ge1xuICAgICAgICBjb250YWluZXI6IFwiI3Rvb2xUaXBQYXNzd29yZFN0cmVuZ3RoXCIsXG4gICAgICAgIHZpZXdwb3J0czoge1xuICAgICAgICAgICAgcHJvZ3Jlc3M6IFwiI3Bhc3N3b3JkU3RyZW5ndGhCYXJcIixcbiAgICAgICAgICAgIHZlcmRpY3Q6IFwiLnByb2dyZXNzLW1ldGVyXCIsXG4gICAgICAgICAgICBlcnJvcnM6IFwiI3Bhc3N3b3JkU3RyZW5ndGhIZWFkTGluZVwiXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICAgIHdvcmRMZW5ndGg6IFwiSWhyIFBhc3N3b3J0IGlzdCB6dSBrdXJ6XCIsXG4gICAgICAgICAgICB3b3JkTm90RW1haWw6IFwiS2VpbmUgRW1haWxcIixcbiAgICAgICAgICAgIHdvcmRTaW1pbGFyVG9Vc2VybmFtZTogXCJLZWluIEJlbnV0emVybmFtZVwiLFxuICAgICAgICAgICAgd29yZFR3b0NoYXJhY3RlckNsYXNzZXM6IFwiS2VpbmUgZ2xlaWNoZW4gV29ydGdydXBwZW5cIixcbiAgICAgICAgICAgIHdvcmRSZXBldGl0aW9uczogXCJadSB2aWVsZSBXaWVkZXJob2x1bmdlblwiLFxuICAgICAgICAgICAgd29yZFNlcXVlbmNlczogXCJJaHIgUGFzc3dvcnQgZW50aMOkbHQgU2VxdWVuemVuXCJcbiAgICAgICAgfSxcbiAgICAgICAgdmVyZGljdHM6IFtcInp1IGt1cnpcIiwgXCJzY2h3YWNoXCIsIFwiZ3V0XCIsIFwic3RhcmtcIiwgXCJzZWhyIHN0YXJrXCJdLFxuICAgICAgICBzaG93VmVyZGljdHNJbnNpZGVQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgc2NvcmVzOiBbMTYsIDI2LCAzOCwgNDVdLFxuICAgICAgICBzaG93RXJyb3JzOiB0cnVlLFxuICAgIH07XG4gICAgb3B0aW9ucy5ydWxlcyA9IHtcbiAgICAgICAgYWN0aXZhdGVkOiB7XG4gICAgICAgICAgICB3b3JkTm90RW1haWw6IHRydWUsXG4gICAgICAgICAgICB3b3JkTGVuZ3RoOiB0cnVlLFxuICAgICAgICAgICAgd29yZFNpbWlsYXJUb1VzZXJuYW1lOiB0cnVlLFxuICAgICAgICAgICAgd29yZFNlcXVlbmNlczogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRUd29DaGFyYWN0ZXJDbGFzc2VzOiB0cnVlLFxuICAgICAgICAgICAgd29yZFJlcGV0aXRpb25zOiB0cnVlLFxuICAgICAgICAgICAgd29yZExvd2VyY2FzZTogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRVcHBlcmNhc2U6IHRydWUsXG4gICAgICAgICAgICB3b3JkT25lTnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgd29yZFRocmVlTnVtYmVyczogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRPbmVTcGVjaWFsQ2hhcjogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRUd29TcGVjaWFsQ2hhcjogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRVcHBlckxvd2VyQ29tYm86IHRydWUsXG4gICAgICAgICAgICB3b3JkTGV0dGVyTnVtYmVyQ29tYm86IHRydWUsXG4gICAgICAgICAgICB3b3JkTGV0dGVyTnVtYmVyQ2hhckNvbWJvOiB0cnVlXG4gICAgICAgIH1cbiAgICB9O1xuICAgIG9wdGlvbnMuY29tbW9uID0ge1xuICAgICAgICBtaW5DaGFyOiA4XG4gICAgfTtcbiAgICBqUXVlcnkoJyNwYXNzd29yZCcpLnB3c3RyZW5ndGgob3B0aW9ucyk7XG5cbn0pO1xuIl19
