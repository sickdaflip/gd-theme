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

    //Product Option show more and less
    jQuery('ul.options-list').each(function(){
        var max = 2
        if (jQuery(this).find("li").length > max) {
            jQuery(this)
                .find('li:gt('+max+')')
                .hide()
                .end()
                .append(
                    jQuery('<li class="show-more">weitere Optionen anzeigen</li>').click( function(){
                        jQuery(this).siblings(':hidden').show().end().remove();
                    })
                );
        }
    });

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvdW5kYXRpb24gSmF2YVNjcmlwdFxuLy8gRG9jdW1lbnRhdGlvbiBjYW4gYmUgZm91bmQgYXQ6IGh0dHA6Ly9mb3VuZGF0aW9uLnp1cmIuY29tL2RvY3NcbmpRdWVyeShkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIFxuICAgIFxuICAgIC8vVGFyZ2V0IHNwZWNpZmljIGJyb3dzZXJcbiAgICAvL1VuY29tbWVudCBpZiB5b3UgbmVlZCBpdFxuICAgIC8vIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykpIHtcbiAgICAvLyAgICAgalF1ZXJ5KCdib2R5JykuYWRkQ2xhc3MoJ2llLXRhcmdldCcpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSAhPSAtMSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpID09IC0xKSB7XG4gICAgLy8gICAgIGpRdWVyeSgnYm9keScpLmFkZENsYXNzKCdzYWZhcmktdGFyZ2V0Jyk7XG4gICAgLy8gfVxuXG4gICAgLy8gaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKSB7XG4gICAgLy8gICAgIGpRdWVyeSgnYm9keScpLmFkZENsYXNzKCdjaHJvbWUtdGFyZ2V0Jyk7XG4gICAgLy8gfVxuXG4gICAgLy8gU2hvdyBNb2RhbCBmb3IgU3RvcmUgVmlld1xuICAgIC8vaWYgKGpRdWVyeS5jb29raWUoJ3N0b3JlX3ZpZXcnKSA9PSBudWxsKSB7XG4gICAgLy8gICAgalF1ZXJ5LmNvb2tpZSgnc3RvcmVfdmlldycsICd5ZXMnLCB7ZXhwaXJlczogNywgcGF0aDogJy8nfSk7XG4gICAgLy8gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgIGpRdWVyeShcIiNzdG9yZV92aWV3XCIpLmZvdW5kYXRpb24oJ3JldmVhbCcsICdvcGVuJyk7XG4gICAgLy8gICAgfSwgMzAwMCk7XG4gICAgLy99XG5cblxuICAgIC8vIEFsZXJ0LUJveCBhdXRvX2Nsb3NlXG4gICAgalF1ZXJ5KCcuY2FsbG91dC5tZXNzYWdlcycpLnNsaWRlRG93bih7XG4gICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgalF1ZXJ5KCcuY2FsbG91dC5tZXNzYWdlcycpLmRlbGF5KDcwMDApLnNsaWRlVXAoMTUwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFByb2R1Y3QgcGFnZSAvIHdpc2hsaXN0IC0gcXVhbnRpdHkgaW5jcmVhc2UvZGVjcmVhc2VcbiAgICBqUXVlcnkoJy5xdWFudGl0eSAuaW5wdXQtZ3JvdXAnKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtbGFiZWwgcGx1c1wiPjxpIGlkPVwiYWRkMVwiIGNsYXNzPVwiZmEgZmEtcGx1c1wiIC8+PC9zcGFuPicpLnByZXBlbmQoJzxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtbGFiZWwgbWludXNcIj48aSBpZD1cIm1pbnVzMVwiIGNsYXNzPVwiZmEgZmEtbWludXNcIiAvPjwvc3Bhbj4nKTtcbiAgICBqUXVlcnkoJy5xdWFudGl0eSAucGx1cycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRWYWwgPSBwYXJzZUludChqUXVlcnkoXCIucXR5XCIpLnZhbCgpKTtcbiAgICAgICAgaWYgKCFjdXJyZW50VmFsIHx8IGN1cnJlbnRWYWwgPT0gXCJcIiB8fCBjdXJyZW50VmFsID09IFwiTmFOXCIpIGN1cnJlbnRWYWwgPSAwO1xuICAgICAgICBqUXVlcnkoXCIucXR5XCIpLnZhbChjdXJyZW50VmFsICsgMSk7XG4gICAgfSk7XG5cbiAgICBqUXVlcnkoJy5xdWFudGl0eSAubWludXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsID0gcGFyc2VJbnQoalF1ZXJ5KFwiLnF0eVwiKS52YWwoKSk7XG4gICAgICAgIGlmIChjdXJyZW50VmFsID09IFwiTmFOXCIpIGN1cnJlbnRWYWwgPSAwO1xuICAgICAgICBpZiAoY3VycmVudFZhbCA+IDEpIHtcbiAgICAgICAgICAgIGpRdWVyeShcIi5xdHlcIikudmFsKGN1cnJlbnRWYWwgLSAxKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9HcmlkIC8gTGlzdCB2aWV3XG4gICAgalF1ZXJ5KCcudmlldy1tb2RlIHN0cm9uZy5ncmlkJykuYWZ0ZXIoJzxpIGNsYXNzPVwiZmEgZmEtdGhcIj48L2k+Jyk7XG4gICAgalF1ZXJ5KCcudmlldy1tb2RlIHN0cm9uZy5saXN0JykuYWZ0ZXIoJzxpIGNsYXNzPVwiZmEgZmEtYWxpZ24tanVzdGlmeVwiPjwvaT4nKTtcblxuICAgIGpRdWVyeSgnLnZpZXctbW9kZSBhLmxpc3QnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS50ZXh0KCkgPT0gJ0xpc3QnKVxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnRleHQoJycpO1xuICAgICAgICBqUXVlcnkodGhpcykuYXBwZW5kKCc8aSBjbGFzcz1cImZhIGZhLWFsaWduLWp1c3RpZnlcIj48L2k+Jyk7XG4gICAgfSk7XG5cbiAgICBqUXVlcnkoJy52aWV3LW1vZGUgYS5ncmlkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChqUXVlcnkodGhpcykudGV4dCgpID09ICdHcmlkJylcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50ZXh0KCcnKTtcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFwcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS10aFwiPjwvaT4nKTtcbiAgICB9KTtcblxuICAgIC8vU2Nyb2xsIHRvIHRvcFxuICAgIGpRdWVyeSgnLmNvb2tpZS1jb250YWluZXInKS5hZnRlcignPGRpdiBjbGFzcz1cInNjcm9sbFRvVG9wXCI+PC9kaXY+Jyk7XG4gICAgalF1ZXJ5KCcuc2Nyb2xsVG9Ub3AnKS5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1jaXJjbGUtdXAgZmEtMnhcIj48L2k+Jyk7XG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsVG9Ub3AnKS5mYWRlSW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbFRvVG9wJykuZmFkZU91dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL0NsaWNrIGV2ZW50IHRvIHNjcm9sbCB0byB0b3BcbiAgICBqUXVlcnkoJy5zY3JvbGxUb1RvcCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgODAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy9Db29raWVCYXJcbiAgICBqUXVlcnkoJy5jb29raWUtY29udGFpbmVyJykuY29va2llQmFyKHtcbiAgICAgICAgY2xvc2VCdXR0b246ICcuY2xvc2UtY29va2llJ1xuICAgIH0pO1xuXG4gICAgLy9vd2wuY2Fyb3VzZWxcbiAgICAvL1NvcnQgcmFuZG9tIGZ1bmN0aW9uIGZvciBvd2wuY2Fyb3VzZWxcbiAgICBmdW5jdGlvbiByYW5kb20ob3dsU2VsZWN0b3IpIHtcbiAgICAgICAgb3dsU2VsZWN0b3IuY2hpbGRyZW4oKS5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpIC0gMC41O1xuICAgICAgICB9KS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hcHBlbmRUbyhvd2xTZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vSG9tZSBTbGlkZXIgVG9wIFByb2R1Y3RzXG4gICAgdmFyICRzbGlkZXIxID0galF1ZXJ5KCcudG9wLXByb2R1Y3RzLXNsaWRlcicpO1xuICAgICRzbGlkZXIxLm9uKCdpbml0aWFsaXplLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBqUXVlcnkoJy50b3AtcHJvZHVjdHMtc2xpZGVyJyk7XG4gICAgICAgIHJhbmRvbShzZWxlY3Rvcik7XG4gICAgfSk7XG4gICAgalF1ZXJ5KCcudG9wLXByb2R1Y3RzLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IDQsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge2l0ZW1zOiAxfSxcbiAgICAgICAgICAgIDYwMDoge2l0ZW1zOiAyfSxcbiAgICAgICAgICAgIDEwMDA6IHtpdGVtczogM30sXG4gICAgICAgICAgICAxMTAwOiB7aXRlbXM6IDR9LFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9Ib21lIFNsaWRlciBjcmVkZW50aWFsc1xuICAgIHZhciAkc2xpZGVyMiA9IGpRdWVyeSgnLmNyZWRlbnRpYWxzLXNsaWRlcicpO1xuICAgICRzbGlkZXIyLm9uKCdpbml0aWFsaXplLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBqUXVlcnkoJy5jcmVkZW50aWFscy1zbGlkZXInKTtcbiAgICAgICAgcmFuZG9tKHNlbGVjdG9yKTtcbiAgICB9KTtcbiAgICBqUXVlcnkoJy5jcmVkZW50aWFscy1zbGlkZXInKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGl0ZW1zOiA4LFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtpdGVtczogMn0sXG4gICAgICAgICAgICA2MDA6IHtpdGVtczogNX0sXG4gICAgICAgICAgICAxMDAwOiB7aXRlbXM6IDh9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vRm9vdGVyIFNsaWRlciB1c2VyIHJldmlld3NcbiAgICB2YXIgJHNsaWRlcjMgPSBqUXVlcnkoJy5yZXZpZXdzLXNsaWRlcicpO1xuICAgICRzbGlkZXIzLm9uKCdpbml0aWFsaXplLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBqUXVlcnkoJy5yZXZpZXdzLXNsaWRlcicpO1xuICAgICAgICByYW5kb20oc2VsZWN0b3IpO1xuICAgIH0pO1xuICAgIGpRdWVyeSgnLnJldmlld3Mtc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtczogMSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgYXV0b0hlaWdodDogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciAkY3VzdG9tRXZlbnRzID0gJCgnI2N1c3RvbS1ldmVudHMnKTtcblxuICAgIC8vTmV3c2xldHRlclxuICAgIHZhciBFc05ld3NTdWJzY3JpYmVycyA9IHtcblxuICAgICAgICBjb29raWVMaXZlVGltZTogMTAwLFxuICAgICAgICBjb29raWVOYW1lOiAnbmV3c3N1YnNjcmliZXInLFxuICAgICAgICBiYXNlVXJsOiAnJyxcblxuICAgICAgICBzZXRDb29raWVMaXZlVGltZTogZnVuY3Rpb24odmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29va2llTGl2ZVRpbWUgPSB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRDb29raWVOYW1lOiBmdW5jdGlvbih2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb29raWVOYW1lID0gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0QmFzZVVybDogZnVuY3Rpb24odXJsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0QmFzZVVybDogZnVuY3Rpb24odXJsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUNvb2tpZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZGF5cyA9IHRoaXMuY29va2llTGl2ZVRpbWU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAxO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmNvb2tpZU5hbWU7XG4gICAgICAgICAgICBpZiAoZGF5cykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkrKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xuICAgICAgICAgICAgICAgIHZhciBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIrZGF0ZS50b0dNVFN0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB2YXIgZXhwaXJlcyA9IFwiXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBlc2NhcGUobmFtZSkrXCI9XCIrZXNjYXBlKHZhbHVlKStleHBpcmVzK1wiOyBwYXRoPS9cIjtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkQ29va2llOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMuY29va2llTmFtZTtcbiAgICAgICAgICAgIHZhciBuYW1lRVEgPSBlc2NhcGUobmFtZSkgKyBcIj1cIjtcbiAgICAgICAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgICAgICAgICAgZm9yKHZhciBpPTA7aSA8IGNhLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSBjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiB1bmVzY2FwZShjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLGMubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBib3hDbG9zZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcG9wdXAgPSBuZXcgRm91bmRhdGlvbi5SZXZlYWwoalF1ZXJ5KCcjZXNucycpKTtcbiAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYm94T3BlbjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcG9wdXAgPSBuZXcgRm91bmRhdGlvbi5SZXZlYWwoalF1ZXJ5KCcjZXNucycpKTtcbiAgICAgICAgICAgIHBvcHVwLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBqUXVlcnkoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChFc05ld3NTdWJzY3JpYmVycy5yZWFkQ29va2llKCkgIT0gMSkge1xuICAgICAgICAgICAgLy9Fc05ld3NTdWJzY3JpYmVycy5jcmVhdGVDb29raWUoKTtcbiAgICAgICAgICAgIC8vRXNOZXdzU3Vic2NyaWJlcnMuYm94T3BlbigpO1xuICAgICAgICB9XG4gICAgICAgIGpRdWVyeSgnI2VzbnNfc3VibWl0JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IGpRdWVyeSgnI2VzbnNfZW1haWwnKS52YWwoKTtcbiAgICAgICAgICAgIGpRdWVyeS5wb3N0KEVzTmV3c1N1YnNjcmliZXJzLmdldEJhc2VVcmwoKSsnbmV3c2xldHRlci9zdWJzY3JpYmVyL25ld2FqYXgvJywgeydlbWFpbCc6ZW1haWx9LCBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZXNuc19ib3hfc3Vic2NyaWJlX3Jlc3BvbnNlX2Vycm9yJykuaHRtbCgnPHA+JytyZXNwLmVycm9yTXNnKyc8L3A+PGhyPicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2VzbnNfYm94X3N1YnNjcmliZV9yZXNwb25zZV9lcnJvcicpLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNlc25zX2JveF9zdWJzY3JpYmVfcmVzcG9uc2Vfc3VjY2VzcycpLmh0bWwoJzxwPicrcmVzcC5zdWNjZXNzTXNnKyc8L3A+PGhyPicpO1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNlc25zX2JveF9zdWJzY3JpYmVfZm9ybScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZXNuc19ib3hfc3Vic2NyaWJlX3Jlc3BvbnNlX3N1Y2Nlc3MnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCdFc05ld3NTdWJzY3JpYmVycy5ib3hDbG9zZSgpJywgNTAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvL0xpZ2h0R2FsbGVyeVxuICAgIGpRdWVyeSgnLnByb2R1Y3QtaW1nLWJveCcpLmxpZ2h0R2FsbGVyeSh7XG4gICAgICAgIGlmcmFtZU1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIHZpZGVvTWF4V2lkdGg6ICcxMTQwcHgnLFxuICAgICAgICBzZWxlY3RvcjogJy5pdGVtJyxcbiAgICAgICAgdGh1bWJuYWlsOiB0cnVlLFxuICAgICAgICBoYXNoOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcjcGFzc3dvcmQnKS5mb2N1cyhmdW5jdGlvbigpIHtcbiAgICAgICAgalF1ZXJ5KCcjdG9vbFRpcFBhc3N3b3JkU3RyZW5ndGgnKS5jc3MoXCJkaXNwbGF5XCIsXCJpbmxpbmVcIik7XG4gICAgfSk7XG4gICAgalF1ZXJ5KCcjcGFzc3dvcmQnKS5ibHVyKGZ1bmN0aW9uKCkge1xuICAgICAgICBqUXVlcnkoJyN0b29sVGlwUGFzc3dvcmRTdHJlbmd0aCcpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgfSk7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgIG9wdGlvbnMudWkgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogXCIjdG9vbFRpcFBhc3N3b3JkU3RyZW5ndGhcIixcbiAgICAgICAgdmlld3BvcnRzOiB7XG4gICAgICAgICAgICBwcm9ncmVzczogXCIjcGFzc3dvcmRTdHJlbmd0aEJhclwiLFxuICAgICAgICAgICAgdmVyZGljdDogXCIucHJvZ3Jlc3MtbWV0ZXJcIixcbiAgICAgICAgICAgIGVycm9yczogXCIjcGFzc3dvcmRTdHJlbmd0aEhlYWRMaW5lXCJcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgd29yZExlbmd0aDogXCJJaHIgUGFzc3dvcnQgaXN0IHp1IGt1cnpcIixcbiAgICAgICAgICAgIHdvcmROb3RFbWFpbDogXCJLZWluZSBFbWFpbFwiLFxuICAgICAgICAgICAgd29yZFNpbWlsYXJUb1VzZXJuYW1lOiBcIktlaW4gQmVudXR6ZXJuYW1lXCIsXG4gICAgICAgICAgICB3b3JkVHdvQ2hhcmFjdGVyQ2xhc3NlczogXCJLZWluZSBnbGVpY2hlbiBXb3J0Z3J1cHBlblwiLFxuICAgICAgICAgICAgd29yZFJlcGV0aXRpb25zOiBcIlp1IHZpZWxlIFdpZWRlcmhvbHVuZ2VuXCIsXG4gICAgICAgICAgICB3b3JkU2VxdWVuY2VzOiBcIklociBQYXNzd29ydCBlbnRow6RsdCBTZXF1ZW56ZW5cIlxuICAgICAgICB9LFxuICAgICAgICB2ZXJkaWN0czogW1wienUga3VyelwiLCBcInNjaHdhY2hcIiwgXCJndXRcIiwgXCJzdGFya1wiLCBcInNlaHIgc3RhcmtcIl0sXG4gICAgICAgIHNob3dWZXJkaWN0c0luc2lkZVByb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgICBzY29yZXM6IFsxNiwgMjYsIDM4LCA0NV0sXG4gICAgICAgIHNob3dFcnJvcnM6IHRydWUsXG4gICAgfTtcbiAgICBvcHRpb25zLnJ1bGVzID0ge1xuICAgICAgICBhY3RpdmF0ZWQ6IHtcbiAgICAgICAgICAgIHdvcmROb3RFbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRMZW5ndGg6IHRydWUsXG4gICAgICAgICAgICB3b3JkU2ltaWxhclRvVXNlcm5hbWU6IHRydWUsXG4gICAgICAgICAgICB3b3JkU2VxdWVuY2VzOiB0cnVlLFxuICAgICAgICAgICAgd29yZFR3b0NoYXJhY3RlckNsYXNzZXM6IHRydWUsXG4gICAgICAgICAgICB3b3JkUmVwZXRpdGlvbnM6IHRydWUsXG4gICAgICAgICAgICB3b3JkTG93ZXJjYXNlOiB0cnVlLFxuICAgICAgICAgICAgd29yZFVwcGVyY2FzZTogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRPbmVOdW1iZXI6IHRydWUsXG4gICAgICAgICAgICB3b3JkVGhyZWVOdW1iZXJzOiB0cnVlLFxuICAgICAgICAgICAgd29yZE9uZVNwZWNpYWxDaGFyOiB0cnVlLFxuICAgICAgICAgICAgd29yZFR3b1NwZWNpYWxDaGFyOiB0cnVlLFxuICAgICAgICAgICAgd29yZFVwcGVyTG93ZXJDb21ibzogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRMZXR0ZXJOdW1iZXJDb21ibzogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRMZXR0ZXJOdW1iZXJDaGFyQ29tYm86IHRydWVcbiAgICAgICAgfVxuICAgIH07XG4gICAgb3B0aW9ucy5jb21tb24gPSB7XG4gICAgICAgIG1pbkNoYXI6IDhcbiAgICB9O1xuICAgIGpRdWVyeSgnI3Bhc3N3b3JkJykucHdzdHJlbmd0aChvcHRpb25zKTtcblxuICAgIC8vUHJvZHVjdCBPcHRpb24gc2hvdyBtb3JlIGFuZCBsZXNzXG4gICAgalF1ZXJ5KCd1bC5vcHRpb25zLWxpc3QnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBtYXggPSAyXG4gICAgICAgIGlmIChqUXVlcnkodGhpcykuZmluZChcImxpXCIpLmxlbmd0aCA+IG1heCkge1xuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpOmd0KCcrbWF4KycpJylcbiAgICAgICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAgICAgLmVuZCgpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCc8bGkgY2xhc3M9XCJzaG93LW1vcmVcIj53ZWl0ZXJlIE9wdGlvbmVuIGFuemVpZ2VuPC9saT4nKS5jbGljayggZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5zaWJsaW5ncygnOmhpZGRlbicpLnNob3coKS5lbmQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0pO1xuIl19
