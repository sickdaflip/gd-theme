'use strict';

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
        complete: function complete() {
            jQuery('.callout.messages').delay(7000).slideUp(1500);
        }
    });

    // Product page / wishlist - quantity increase/decrease
    jQuery('.quantity .input-group').append('<span class="input-group-label plus"><i id="add1" class="plus fa fa-plus" /></span>').prepend('<span class="input-group-label minus"><i id="minus1" class="minus fa fa-minus" /></span>');
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
        if (jQuery(this).text() == 'List') jQuery(this).text('');
        jQuery(this).append('<i class="fa fa-align-justify"></i>');
    });

    jQuery('.view-mode a.grid').each(function () {
        if (jQuery(this).text() == 'Grid') jQuery(this).text('');
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
        jQuery('html, body').animate({ scrollTop: 0 }, 800);
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
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
            1100: { items: 4 }
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
            0: { items: 2 },
            600: { items: 5 },
            1000: { items: 8 }
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

        setCookieLiveTime: function setCookieLiveTime(value) {
            this.cookieLiveTime = value;
        },

        setCookieName: function setCookieName(value) {
            this.cookieName = value;
        },

        setBaseUrl: function setBaseUrl(url) {
            this.baseUrl = url;
        },

        getBaseUrl: function getBaseUrl(url) {
            return this.baseUrl;
        },

        createCookie: function createCookie() {
            var days = this.cookieLiveTime;
            var value = 1;
            var name = this.cookieName;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                var expires = "; expires=" + date.toGMTString();
            } else var expires = "";
            document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
        },

        readCookie: function readCookie(name) {
            var name = this.cookieName;
            var nameEQ = escape(name) + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length);
                }if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
            }
            return null;
        },

        boxClose: function boxClose() {
            var popup = new Foundation.Reveal(jQuery('#esns'));
            popup.close();
        },

        boxOpen: function boxOpen() {
            var popup = new Foundation.Reveal(jQuery('#esns'));
            popup.open();
        }
    };

    jQuery(function () {
        if (EsNewsSubscribers.readCookie() != 1) {
            //EsNewsSubscribers.createCookie();
            //EsNewsSubscribers.boxOpen();
        }
        jQuery('#esns_submit').click(function () {
            var email = jQuery('#esns_email').val();
            jQuery.post(EsNewsSubscribers.getBaseUrl() + 'newsletter/subscriber/newajax/', { 'email': email }, function (resp) {
                if (resp.errorMsg) {
                    jQuery('#esns_box_subscribe_response_error').html('<p>' + resp.errorMsg + '</p><hr>');
                } else {
                    jQuery('#esns_box_subscribe_response_error').html('');
                    jQuery('#esns_box_subscribe_response_success').html('<p>' + resp.successMsg + '</p><hr>');
                    jQuery('#esns_box_subscribe_form').css('display', 'none');
                    jQuery('#esns_box_subscribe_response_success').css('display', 'block');
                    setTimeout('EsNewsSubscribers.boxClose()', 5000);
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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsImZvdW5kYXRpb24iLCJyZWFkeSIsInNsaWRlRG93biIsImR1cmF0aW9uIiwiY29tcGxldGUiLCJkZWxheSIsInNsaWRlVXAiLCJhcHBlbmQiLCJwcmVwZW5kIiwiY2xpY2siLCJjdXJyZW50VmFsIiwicGFyc2VJbnQiLCJ2YWwiLCJhZnRlciIsImVhY2giLCJ0ZXh0Iiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZmFkZUluIiwiZmFkZU91dCIsImFuaW1hdGUiLCJjb29raWVCYXIiLCJjbG9zZUJ1dHRvbiIsInJhbmRvbSIsIm93bFNlbGVjdG9yIiwiY2hpbGRyZW4iLCJzb3J0IiwiTWF0aCIsInJvdW5kIiwiYXBwZW5kVG8iLCIkc2xpZGVyMSIsIm9uIiwiZXZlbnQiLCJzZWxlY3RvciIsIm93bENhcm91c2VsIiwiaXRlbXMiLCJsb29wIiwibmF2IiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlUaW1lb3V0IiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwicmVzcG9uc2l2ZUNsYXNzIiwicmVzcG9uc2l2ZSIsIiRzbGlkZXIyIiwiJHNsaWRlcjMiLCJhdXRvSGVpZ2h0IiwiJGN1c3RvbUV2ZW50cyIsIiQiLCJFc05ld3NTdWJzY3JpYmVycyIsImNvb2tpZUxpdmVUaW1lIiwiY29va2llTmFtZSIsImJhc2VVcmwiLCJzZXRDb29raWVMaXZlVGltZSIsInZhbHVlIiwic2V0Q29va2llTmFtZSIsInNldEJhc2VVcmwiLCJ1cmwiLCJnZXRCYXNlVXJsIiwiY3JlYXRlQ29va2llIiwiZGF5cyIsIm5hbWUiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvR01UU3RyaW5nIiwiY29va2llIiwiZXNjYXBlIiwicmVhZENvb2tpZSIsIm5hbWVFUSIsImNhIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJ1bmVzY2FwZSIsImJveENsb3NlIiwicG9wdXAiLCJGb3VuZGF0aW9uIiwiUmV2ZWFsIiwiY2xvc2UiLCJib3hPcGVuIiwib3BlbiIsImVtYWlsIiwicG9zdCIsInJlc3AiLCJlcnJvck1zZyIsImh0bWwiLCJzdWNjZXNzTXNnIiwiY3NzIiwic2V0VGltZW91dCIsImxpZ2h0R2FsbGVyeSIsImlmcmFtZU1heFdpZHRoIiwidmlkZW9NYXhXaWR0aCIsInRodW1ibmFpbCIsImhhc2giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBQSxPQUFPQyxRQUFQLEVBQWlCQyxVQUFqQjs7QUFFQUYsT0FBT0MsUUFBUCxFQUFpQkUsS0FBakIsQ0FBdUIsWUFBWTs7QUFJL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0FILFdBQU8sbUJBQVAsRUFBNEJJLFNBQTVCLENBQXNDO0FBQ2xDQyxrQkFBVSxJQUR3QjtBQUVsQ0Msa0JBQVUsb0JBQVk7QUFDbEJOLG1CQUFPLG1CQUFQLEVBQTRCTyxLQUE1QixDQUFrQyxJQUFsQyxFQUF3Q0MsT0FBeEMsQ0FBZ0QsSUFBaEQ7QUFDSDtBQUppQyxLQUF0Qzs7QUFPQTtBQUNBUixXQUFPLHdCQUFQLEVBQWlDUyxNQUFqQyxDQUF3QyxxRkFBeEMsRUFBK0hDLE9BQS9ILENBQXVJLDBGQUF2STtBQUNBVixXQUFPLGlCQUFQLEVBQTBCVyxLQUExQixDQUFnQyxZQUFZO0FBQ3hDLFlBQUlDLGFBQWFDLFNBQVNiLE9BQU8sTUFBUCxFQUFlYyxHQUFmLEVBQVQsQ0FBakI7QUFDQSxZQUFJLENBQUNGLFVBQUQsSUFBZUEsY0FBYyxFQUE3QixJQUFtQ0EsY0FBYyxLQUFyRCxFQUE0REEsYUFBYSxDQUFiO0FBQzVEWixlQUFPLE1BQVAsRUFBZWMsR0FBZixDQUFtQkYsYUFBYSxDQUFoQztBQUNILEtBSkQ7O0FBTUFaLFdBQU8sa0JBQVAsRUFB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S0FBK0IsZ0NBQTNDLEVBQTZFLEVBQUMsU0FBUThCLEtBQVQsRUFBN0UsRUFBOEYsVUFBU0UsSUFBVCxFQUFlO0FBQ3pHLG9CQUFJQSxLQUFLQyxRQUFULEVBQW1CO0FBQ2Y5RiwyQkFBTyxvQ0FBUCxFQUE2QytGLElBQTdDLENBQWtELFFBQU1GLEtBQUtDLFFBQVgsR0FBb0IsVUFBdEU7QUFDSCxpQkFGRCxNQUVPO0FBQ0g5RiwyQkFBTyxvQ0FBUCxFQUE2QytGLElBQTdDLENBQWtELEVBQWxEO0FBQ0EvRiwyQkFBTyxzQ0FBUCxFQUErQytGLElBQS9DLENBQW9ELFFBQU1GLEtBQUtHLFVBQVgsR0FBc0IsVUFBMUU7QUFDQWhHLDJCQUFPLDBCQUFQLEVBQW1DaUcsR0FBbkMsQ0FBdUMsU0FBdkMsRUFBaUQsTUFBakQ7QUFDQWpHLDJCQUFPLHNDQUFQLEVBQStDaUcsR0FBL0MsQ0FBbUQsU0FBbkQsRUFBNkQsT0FBN0Q7QUFDQUMsK0JBQVcsOEJBQVgsRUFBMkMsSUFBM0M7QUFDSDtBQUNKLGFBVkQ7QUFXSCxTQWJEO0FBY0gsS0FuQkQ7O0FBcUJBO0FBQ0FsRyxXQUFPLGtCQUFQLEVBQTJCbUcsWUFBM0IsQ0FBd0M7QUFDcENDLHdCQUFnQixNQURvQjtBQUVwQ0MsdUJBQWUsUUFGcUI7QUFHcENqRSxrQkFBVSxPQUgwQjtBQUlwQ2tFLG1CQUFXLElBSnlCO0FBS3BDQyxjQUFNO0FBTDhCLEtBQXhDO0FBUUgsQ0EvUEQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm91bmRhdGlvbiBKYXZhU2NyaXB0XG4vLyBEb2N1bWVudGF0aW9uIGNhbiBiZSBmb3VuZCBhdDogaHR0cDovL2ZvdW5kYXRpb24uenVyYi5jb20vZG9jc1xualF1ZXJ5KGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgXG4gICAgXG4gICAgLy9UYXJnZXQgc3BlY2lmaWMgYnJvd3NlclxuICAgIC8vVW5jb21tZW50IGlmIHlvdSBuZWVkIGl0XG4gICAgLy8gaWYgKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKSkge1xuICAgIC8vICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnaWUtdGFyZ2V0Jyk7XG4gICAgLy8gfVxuICAgIC8vIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpICE9IC0xICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPT0gLTEpIHtcbiAgICAvLyAgICAgalF1ZXJ5KCdib2R5JykuYWRkQ2xhc3MoJ3NhZmFyaS10YXJnZXQnKTtcbiAgICAvLyB9XG5cbiAgICAvLyBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID4gLTEpIHtcbiAgICAvLyAgICAgalF1ZXJ5KCdib2R5JykuYWRkQ2xhc3MoJ2Nocm9tZS10YXJnZXQnKTtcbiAgICAvLyB9XG5cbiAgICAvLyBTaG93IE1vZGFsIGZvciBTdG9yZSBWaWV3XG4gICAgLy9pZiAoalF1ZXJ5LmNvb2tpZSgnc3RvcmVfdmlldycpID09IG51bGwpIHtcbiAgICAvLyAgICBqUXVlcnkuY29va2llKCdzdG9yZV92aWV3JywgJ3llcycsIHtleHBpcmVzOiA3LCBwYXRoOiAnLyd9KTtcbiAgICAvLyAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgalF1ZXJ5KFwiI3N0b3JlX3ZpZXdcIikuZm91bmRhdGlvbigncmV2ZWFsJywgJ29wZW4nKTtcbiAgICAvLyAgICB9LCAzMDAwKTtcbiAgICAvL31cblxuXG4gICAgLy8gQWxlcnQtQm94IGF1dG9fY2xvc2VcbiAgICBqUXVlcnkoJy5jYWxsb3V0Lm1lc3NhZ2VzJykuc2xpZGVEb3duKHtcbiAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5jYWxsb3V0Lm1lc3NhZ2VzJykuZGVsYXkoNzAwMCkuc2xpZGVVcCgxNTAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUHJvZHVjdCBwYWdlIC8gd2lzaGxpc3QgLSBxdWFudGl0eSBpbmNyZWFzZS9kZWNyZWFzZVxuICAgIGpRdWVyeSgnLnF1YW50aXR5IC5pbnB1dC1ncm91cCcpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1sYWJlbCBwbHVzXCI+PGkgaWQ9XCJhZGQxXCIgY2xhc3M9XCJwbHVzIGZhIGZhLXBsdXNcIiAvPjwvc3Bhbj4nKS5wcmVwZW5kKCc8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWxhYmVsIG1pbnVzXCI+PGkgaWQ9XCJtaW51czFcIiBjbGFzcz1cIm1pbnVzIGZhIGZhLW1pbnVzXCIgLz48L3NwYW4+Jyk7XG4gICAgalF1ZXJ5KCcucXVhbnRpdHkgLnBsdXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsID0gcGFyc2VJbnQoalF1ZXJ5KFwiLnF0eVwiKS52YWwoKSk7XG4gICAgICAgIGlmICghY3VycmVudFZhbCB8fCBjdXJyZW50VmFsID09IFwiXCIgfHwgY3VycmVudFZhbCA9PSBcIk5hTlwiKSBjdXJyZW50VmFsID0gMDtcbiAgICAgICAgalF1ZXJ5KFwiLnF0eVwiKS52YWwoY3VycmVudFZhbCArIDEpO1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcucXVhbnRpdHkgLm1pbnVzJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFZhbCA9IHBhcnNlSW50KGpRdWVyeShcIi5xdHlcIikudmFsKCkpO1xuICAgICAgICBpZiAoY3VycmVudFZhbCA9PSBcIk5hTlwiKSBjdXJyZW50VmFsID0gMDtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWwgPiAxKSB7XG4gICAgICAgICAgICBqUXVlcnkoXCIucXR5XCIpLnZhbChjdXJyZW50VmFsIC0gMSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vR3JpZCAvIExpc3Qgdmlld1xuICAgIGpRdWVyeSgnLnZpZXctbW9kZSBzdHJvbmcuZ3JpZCcpLmFmdGVyKCc8aSBjbGFzcz1cImZhIGZhLXRoXCI+PC9pPicpO1xuICAgIGpRdWVyeSgnLnZpZXctbW9kZSBzdHJvbmcubGlzdCcpLmFmdGVyKCc8aSBjbGFzcz1cImZhIGZhLWFsaWduLWp1c3RpZnlcIj48L2k+Jyk7XG5cbiAgICBqUXVlcnkoJy52aWV3LW1vZGUgYS5saXN0JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChqUXVlcnkodGhpcykudGV4dCgpID09ICdMaXN0JylcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50ZXh0KCcnKTtcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFwcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS1hbGlnbi1qdXN0aWZ5XCI+PC9pPicpO1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcudmlldy1tb2RlIGEuZ3JpZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnRleHQoKSA9PSAnR3JpZCcpXG4gICAgICAgICAgICBqUXVlcnkodGhpcykudGV4dCgnJyk7XG4gICAgICAgIGpRdWVyeSh0aGlzKS5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtdGhcIj48L2k+Jyk7XG4gICAgfSk7XG5cbiAgICAvL1Njcm9sbCB0byB0b3BcbiAgICBqUXVlcnkoJy5jb29raWUtY29udGFpbmVyJykuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJzY3JvbGxUb1RvcFwiPjwvZGl2PicpO1xuICAgIGpRdWVyeSgnLnNjcm9sbFRvVG9wJykuYXBwZW5kKCc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tY2lyY2xlLXVwIGZhLTJ4XCI+PC9pPicpO1xuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChqUXVlcnkodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbFRvVG9wJykuZmFkZUluKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGxUb1RvcCcpLmZhZGVPdXQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9DbGljayBldmVudCB0byBzY3JvbGwgdG8gdG9wXG4gICAgalF1ZXJ5KCcuc2Nyb2xsVG9Ub3AnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDgwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vQ29va2llQmFyXG4gICAgalF1ZXJ5KCcuY29va2llLWNvbnRhaW5lcicpLmNvb2tpZUJhcih7XG4gICAgICAgIGNsb3NlQnV0dG9uOiAnLmNsb3NlLWNvb2tpZSdcbiAgICB9KTtcblxuICAgIC8vb3dsLmNhcm91c2VsXG4gICAgLy9Tb3J0IHJhbmRvbSBmdW5jdGlvbiBmb3Igb3dsLmNhcm91c2VsXG4gICAgZnVuY3Rpb24gcmFuZG9tKG93bFNlbGVjdG9yKSB7XG4gICAgICAgIG93bFNlbGVjdG9yLmNoaWxkcmVuKCkuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSAtIDAuNTtcbiAgICAgICAgfSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkodGhpcykuYXBwZW5kVG8ob3dsU2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL0hvbWUgU2xpZGVyIFRvcCBQcm9kdWN0c1xuICAgIHZhciAkc2xpZGVyMSA9IGpRdWVyeSgnLnRvcC1wcm9kdWN0cy1zbGlkZXInKTtcbiAgICAkc2xpZGVyMS5vbignaW5pdGlhbGl6ZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0galF1ZXJ5KCcudG9wLXByb2R1Y3RzLXNsaWRlcicpO1xuICAgICAgICByYW5kb20oc2VsZWN0b3IpO1xuICAgIH0pO1xuICAgIGpRdWVyeSgnLnRvcC1wcm9kdWN0cy1zbGlkZXInKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtpdGVtczogMX0sXG4gICAgICAgICAgICA2MDA6IHtpdGVtczogMn0sXG4gICAgICAgICAgICAxMDAwOiB7aXRlbXM6IDN9LFxuICAgICAgICAgICAgMTEwMDoge2l0ZW1zOiA0fSxcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vSG9tZSBTbGlkZXIgY3JlZGVudGlhbHNcbiAgICB2YXIgJHNsaWRlcjIgPSBqUXVlcnkoJy5jcmVkZW50aWFscy1zbGlkZXInKTtcbiAgICAkc2xpZGVyMi5vbignaW5pdGlhbGl6ZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0galF1ZXJ5KCcuY3JlZGVudGlhbHMtc2xpZGVyJyk7XG4gICAgICAgIHJhbmRvbShzZWxlY3Rvcik7XG4gICAgfSk7XG4gICAgalF1ZXJ5KCcuY3JlZGVudGlhbHMtc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtczogOCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwOiB7aXRlbXM6IDJ9LFxuICAgICAgICAgICAgNjAwOiB7aXRlbXM6IDV9LFxuICAgICAgICAgICAgMTAwMDoge2l0ZW1zOiA4fVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL0Zvb3RlciBTbGlkZXIgdXNlciByZXZpZXdzXG4gICAgdmFyICRzbGlkZXIzID0galF1ZXJ5KCcucmV2aWV3cy1zbGlkZXInKTtcbiAgICAkc2xpZGVyMy5vbignaW5pdGlhbGl6ZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0galF1ZXJ5KCcucmV2aWV3cy1zbGlkZXInKTtcbiAgICAgICAgcmFuZG9tKHNlbGVjdG9yKTtcbiAgICB9KTtcbiAgICBqUXVlcnkoJy5yZXZpZXdzLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIGF1dG9IZWlnaHQ6IHRydWVcbiAgICB9KTtcbiAgICB2YXIgJGN1c3RvbUV2ZW50cyA9ICQoJyNjdXN0b20tZXZlbnRzJyk7XG5cbiAgICAvL05ld3NsZXR0ZXJcbiAgICB2YXIgRXNOZXdzU3Vic2NyaWJlcnMgPSB7XG5cbiAgICAgICAgY29va2llTGl2ZVRpbWU6IDEwMCxcbiAgICAgICAgY29va2llTmFtZTogJ25ld3NzdWJzY3JpYmVyJyxcbiAgICAgICAgYmFzZVVybDogJycsXG5cbiAgICAgICAgc2V0Q29va2llTGl2ZVRpbWU6IGZ1bmN0aW9uKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvb2tpZUxpdmVUaW1lID0gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0Q29va2llTmFtZTogZnVuY3Rpb24odmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29va2llTmFtZSA9IHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEJhc2VVcmw6IGZ1bmN0aW9uKHVybClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gdXJsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEJhc2VVcmw6IGZ1bmN0aW9uKHVybClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybDtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVDb29raWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRheXMgPSB0aGlzLmNvb2tpZUxpdmVUaW1lO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gMTtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5jb29raWVOYW1lO1xuICAgICAgICAgICAgaWYgKGRheXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKyhkYXlzKjI0KjYwKjYwKjEwMDApKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiK2RhdGUudG9HTVRTdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgdmFyIGV4cGlyZXMgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gZXNjYXBlKG5hbWUpK1wiPVwiK2VzY2FwZSh2YWx1ZSkrZXhwaXJlcytcIjsgcGF0aD0vXCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZENvb2tpZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmNvb2tpZU5hbWU7XG4gICAgICAgICAgICB2YXIgbmFtZUVRID0gZXNjYXBlKG5hbWUpICsgXCI9XCI7XG4gICAgICAgICAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjYVtpXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCk9PScgJykgYyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gdW5lc2NhcGUoYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYm94Q2xvc2U6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHBvcHVwID0gbmV3IEZvdW5kYXRpb24uUmV2ZWFsKGpRdWVyeSgnI2VzbnMnKSk7XG4gICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJveE9wZW46IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHBvcHVwID0gbmV3IEZvdW5kYXRpb24uUmV2ZWFsKGpRdWVyeSgnI2VzbnMnKSk7XG4gICAgICAgICAgICBwb3B1cC5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgalF1ZXJ5KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoRXNOZXdzU3Vic2NyaWJlcnMucmVhZENvb2tpZSgpICE9IDEpIHtcbiAgICAgICAgICAgIC8vRXNOZXdzU3Vic2NyaWJlcnMuY3JlYXRlQ29va2llKCk7XG4gICAgICAgICAgICAvL0VzTmV3c1N1YnNjcmliZXJzLmJveE9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBqUXVlcnkoJyNlc25zX3N1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgZW1haWwgPSBqUXVlcnkoJyNlc25zX2VtYWlsJykudmFsKCk7XG4gICAgICAgICAgICBqUXVlcnkucG9zdChFc05ld3NTdWJzY3JpYmVycy5nZXRCYXNlVXJsKCkrJ25ld3NsZXR0ZXIvc3Vic2NyaWJlci9uZXdhamF4LycsIHsnZW1haWwnOmVtYWlsfSwgZnVuY3Rpb24ocmVzcCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLmVycm9yTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2VzbnNfYm94X3N1YnNjcmliZV9yZXNwb25zZV9lcnJvcicpLmh0bWwoJzxwPicrcmVzcC5lcnJvck1zZysnPC9wPjxocj4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNlc25zX2JveF9zdWJzY3JpYmVfcmVzcG9uc2VfZXJyb3InKS5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZXNuc19ib3hfc3Vic2NyaWJlX3Jlc3BvbnNlX3N1Y2Nlc3MnKS5odG1sKCc8cD4nK3Jlc3Auc3VjY2Vzc01zZysnPC9wPjxocj4nKTtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZXNuc19ib3hfc3Vic2NyaWJlX2Zvcm0nKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2VzbnNfYm94X3N1YnNjcmliZV9yZXNwb25zZV9zdWNjZXNzJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgnRXNOZXdzU3Vic2NyaWJlcnMuYm94Q2xvc2UoKScsIDUwMDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy9MaWdodEdhbGxlcnlcbiAgICBqUXVlcnkoJy5wcm9kdWN0LWltZy1ib3gnKS5saWdodEdhbGxlcnkoe1xuICAgICAgICBpZnJhbWVNYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICB2aWRlb01heFdpZHRoOiAnMTE0MHB4JyxcbiAgICAgICAgc2VsZWN0b3I6ICcuaXRlbScsXG4gICAgICAgIHRodW1ibmFpbDogdHJ1ZSxcbiAgICAgICAgaGFzaDogZmFsc2VcbiAgICB9KTtcblxufSk7Il19
