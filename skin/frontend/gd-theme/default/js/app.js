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
        closeButton: '.close-cookie',
        secure: true,
        domain: '.www.gastrodax.de'
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsImZvdW5kYXRpb24iLCJyZWFkeSIsInNsaWRlRG93biIsImR1cmF0aW9uIiwiY29tcGxldGUiLCJkZWxheSIsInNsaWRlVXAiLCJhcHBlbmQiLCJwcmVwZW5kIiwiY2xpY2siLCJjdXJyZW50VmFsIiwicGFyc2VJbnQiLCJ2YWwiLCJhZnRlciIsImVhY2giLCJ0ZXh0Iiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZmFkZUluIiwiZmFkZU91dCIsImFuaW1hdGUiLCJjb29raWVCYXIiLCJjbG9zZUJ1dHRvbiIsInNlY3VyZSIsImRvbWFpbiIsInJhbmRvbSIsIm93bFNlbGVjdG9yIiwiY2hpbGRyZW4iLCJzb3J0IiwiTWF0aCIsInJvdW5kIiwiYXBwZW5kVG8iLCIkc2xpZGVyMSIsIm9uIiwiZXZlbnQiLCJzZWxlY3RvciIsIm93bENhcm91c2VsIiwiaXRlbXMiLCJsb29wIiwibmF2IiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlUaW1lb3V0IiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwicmVzcG9uc2l2ZUNsYXNzIiwicmVzcG9uc2l2ZSIsIiRzbGlkZXIyIiwiJHNsaWRlcjMiLCJhdXRvSGVpZ2h0IiwiJGN1c3RvbUV2ZW50cyIsIiQiLCJFc05ld3NTdWJzY3JpYmVycyIsImNvb2tpZUxpdmVUaW1lIiwiY29va2llTmFtZSIsImJhc2VVcmwiLCJzZXRDb29raWVMaXZlVGltZSIsInZhbHVlIiwic2V0Q29va2llTmFtZSIsInNldEJhc2VVcmwiLCJ1cmwiLCJnZXRCYXNlVXJsIiwiY3JlYXRlQ29va2llIiwiZGF5cyIsIm5hbWUiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvR01UU3RyaW5nIiwiY29va2llIiwiZXNjYXBlIiwicmVhZENvb2tpZSIsIm5hbWVFUSIsImNhIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJ1bmVzY2FwZSIsImJveENsb3NlIiwicG9wdXAiLCJGb3VuZGF0aW9uIiwiUmV2ZWFsIiwiY2xvc2UiLCJib3hPcGVuIiwib3BlbiIsImVtYWlsIiwicG9zdCIsInJlc3AiLCJlcnJvck1zZyIsImh0bWwiLCJzdWNjZXNzTXNnIiwiY3NzIiwic2V0VGltZW91dCIsImxpZ2h0R2FsbGVyeSIsImlmcmFtZU1heFdpZHRoIiwidmlkZW9NYXhXaWR0aCIsInRodW1ibmFpbCIsImhhc2giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBQSxPQUFPQyxRQUFQLEVBQWlCQyxVQUFqQjs7QUFFQUYsT0FBT0MsUUFBUCxFQUFpQkUsS0FBakIsQ0FBdUIsWUFBWTs7QUFJL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQUgsV0FBTyxtQkFBUCxFQUE0QkksU0FBNUIsQ0FBc0M7QUFDbENDLGtCQUFVLElBRHdCO0FBRWxDQyxrQkFBVSxvQkFBWTtBQUNsQk4sbUJBQU8sbUJBQVAsRUFBNEJPLEtBQTVCLENBQWtDLElBQWxDLEVBQXdDQyxPQUF4QyxDQUFnRCxJQUFoRDtBQUNIO0FBSmlDLEtBQXRDOztBQU9BO0FBQ0FSLFdBQU8sd0JBQVAsRUFBaUNTLE1BQWpDLENBQXdDLHFGQUF4QyxFQUErSEMsT0FBL0gsQ0FBdUksMEZBQXZJO0FBQ0FWLFdBQU8saUJBQVAsRUFBMEJXLEtBQTFCLENBQWdDLFlBQVk7QUFDeEMsWUFBSUMsYUFBYUMsU0FBU2IsT0FBTyxNQUFQLEVBQWVjLEdBQWYsRUFBVCxDQUFqQjtBQUNBLFlBQUksQ0FBQ0YsVUFBRCxJQUFlQSxjQUFjLEVBQTdCLElBQW1DQSxjQUFjLEtBQXJELEVBQTREQSxhQUFhLENBQWI7QUFDNURaLGVBQU8sTUFBUCxFQUFlYyxHQUFmLENBQW1CRixhQUFhLENBQWhDO0FBQ0gsS0FKRDs7QUFN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c0JjLEdBQXRCLEVBQVo7QUFDQWQsbUJBQU84RixJQUFQLENBQVl4QyxrQkFBa0JTLFVBQWxCLEtBQStCLGdDQUEzQyxFQUE2RSxFQUFDLFNBQVE4QixLQUFULEVBQTdFLEVBQThGLFVBQVNFLElBQVQsRUFBZTtBQUN6RyxvQkFBSUEsS0FBS0MsUUFBVCxFQUFtQjtBQUNmaEcsMkJBQU8sb0NBQVAsRUFBNkNpRyxJQUE3QyxDQUFrRCxRQUFNRixLQUFLQyxRQUFYLEdBQW9CLFVBQXRFO0FBQ0gsaUJBRkQsTUFFTztBQUNIaEcsMkJBQU8sb0NBQVAsRUFBNkNpRyxJQUE3QyxDQUFrRCxFQUFsRDtBQUNBakcsMkJBQU8sc0NBQVAsRUFBK0NpRyxJQUEvQyxDQUFvRCxRQUFNRixLQUFLRyxVQUFYLEdBQXNCLFVBQTFFO0FBQ0FsRywyQkFBTywwQkFBUCxFQUFtQ21HLEdBQW5DLENBQXVDLFNBQXZDLEVBQWlELE1BQWpEO0FBQ0FuRywyQkFBTyxzQ0FBUCxFQUErQ21HLEdBQS9DLENBQW1ELFNBQW5ELEVBQTZELE9BQTdEO0FBQ0FDLCtCQUFXLDhCQUFYLEVBQTJDLElBQTNDO0FBQ0g7QUFDSixhQVZEO0FBV0gsU0FiRDtBQWNILEtBbkJEOztBQXFCQTtBQUNBcEcsV0FBTyxrQkFBUCxFQUEyQnFHLFlBQTNCLENBQXdDO0FBQ3BDQyx3QkFBZ0IsTUFEb0I7QUFFcENDLHVCQUFlLFFBRnFCO0FBR3BDakUsa0JBQVUsT0FIMEI7QUFJcENrRSxtQkFBVyxJQUp5QjtBQUtwQ0MsY0FBTTtBQUw4QixLQUF4QztBQVFILENBaFFEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvdW5kYXRpb24gSmF2YVNjcmlwdFxuLy8gRG9jdW1lbnRhdGlvbiBjYW4gYmUgZm91bmQgYXQ6IGh0dHA6Ly9mb3VuZGF0aW9uLnp1cmIuY29tL2RvY3NcbmpRdWVyeShkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIFxuICAgIFxuICAgIC8vVGFyZ2V0IHNwZWNpZmljIGJyb3dzZXJcbiAgICAvL1VuY29tbWVudCBpZiB5b3UgbmVlZCBpdFxuICAgIC8vIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykpIHtcbiAgICAvLyAgICAgalF1ZXJ5KCdib2R5JykuYWRkQ2xhc3MoJ2llLXRhcmdldCcpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSAhPSAtMSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpID09IC0xKSB7XG4gICAgLy8gICAgIGpRdWVyeSgnYm9keScpLmFkZENsYXNzKCdzYWZhcmktdGFyZ2V0Jyk7XG4gICAgLy8gfVxuXG4gICAgLy8gaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKSB7XG4gICAgLy8gICAgIGpRdWVyeSgnYm9keScpLmFkZENsYXNzKCdjaHJvbWUtdGFyZ2V0Jyk7XG4gICAgLy8gfVxuXG4gICAgLy8gU2hvdyBNb2RhbCBmb3IgU3RvcmUgVmlld1xuICAgIC8vaWYgKGpRdWVyeS5jb29raWUoJ3N0b3JlX3ZpZXcnKSA9PSBudWxsKSB7XG4gICAgLy8gICAgalF1ZXJ5LmNvb2tpZSgnc3RvcmVfdmlldycsICd5ZXMnLCB7ZXhwaXJlczogNywgcGF0aDogJy8nfSk7XG4gICAgLy8gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgIGpRdWVyeShcIiNzdG9yZV92aWV3XCIpLmZvdW5kYXRpb24oJ3JldmVhbCcsICdvcGVuJyk7XG4gICAgLy8gICAgfSwgMzAwMCk7XG4gICAgLy99XG5cbiAgICAvLyBBbGVydC1Cb3ggYXV0b19jbG9zZVxuICAgIGpRdWVyeSgnLmNhbGxvdXQubWVzc2FnZXMnKS5zbGlkZURvd24oe1xuICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGpRdWVyeSgnLmNhbGxvdXQubWVzc2FnZXMnKS5kZWxheSg3MDAwKS5zbGlkZVVwKDE1MDApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBQcm9kdWN0IHBhZ2UgLyB3aXNobGlzdCAtIHF1YW50aXR5IGluY3JlYXNlL2RlY3JlYXNlXG4gICAgalF1ZXJ5KCcucXVhbnRpdHkgLmlucHV0LWdyb3VwJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWxhYmVsIHBsdXNcIj48aSBpZD1cImFkZDFcIiBjbGFzcz1cInBsdXMgZmEgZmEtcGx1c1wiIC8+PC9zcGFuPicpLnByZXBlbmQoJzxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtbGFiZWwgbWludXNcIj48aSBpZD1cIm1pbnVzMVwiIGNsYXNzPVwibWludXMgZmEgZmEtbWludXNcIiAvPjwvc3Bhbj4nKTtcbiAgICBqUXVlcnkoJy5xdWFudGl0eSAucGx1cycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRWYWwgPSBwYXJzZUludChqUXVlcnkoXCIucXR5XCIpLnZhbCgpKTtcbiAgICAgICAgaWYgKCFjdXJyZW50VmFsIHx8IGN1cnJlbnRWYWwgPT0gXCJcIiB8fCBjdXJyZW50VmFsID09IFwiTmFOXCIpIGN1cnJlbnRWYWwgPSAwO1xuICAgICAgICBqUXVlcnkoXCIucXR5XCIpLnZhbChjdXJyZW50VmFsICsgMSk7XG4gICAgfSk7XG5cbiAgICBqUXVlcnkoJy5xdWFudGl0eSAubWludXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsID0gcGFyc2VJbnQoalF1ZXJ5KFwiLnF0eVwiKS52YWwoKSk7XG4gICAgICAgIGlmIChjdXJyZW50VmFsID09IFwiTmFOXCIpIGN1cnJlbnRWYWwgPSAwO1xuICAgICAgICBpZiAoY3VycmVudFZhbCA+IDEpIHtcbiAgICAgICAgICAgIGpRdWVyeShcIi5xdHlcIikudmFsKGN1cnJlbnRWYWwgLSAxKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9HcmlkIC8gTGlzdCB2aWV3XG4gICAgalF1ZXJ5KCcudmlldy1tb2RlIHN0cm9uZy5ncmlkJykuYWZ0ZXIoJzxpIGNsYXNzPVwiZmEgZmEtdGhcIj48L2k+Jyk7XG4gICAgalF1ZXJ5KCcudmlldy1tb2RlIHN0cm9uZy5saXN0JykuYWZ0ZXIoJzxpIGNsYXNzPVwiZmEgZmEtYWxpZ24tanVzdGlmeVwiPjwvaT4nKTtcblxuICAgIGpRdWVyeSgnLnZpZXctbW9kZSBhLmxpc3QnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS50ZXh0KCkgPT0gJ0xpc3QnKVxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnRleHQoJycpO1xuICAgICAgICBqUXVlcnkodGhpcykuYXBwZW5kKCc8aSBjbGFzcz1cImZhIGZhLWFsaWduLWp1c3RpZnlcIj48L2k+Jyk7XG4gICAgfSk7XG5cbiAgICBqUXVlcnkoJy52aWV3LW1vZGUgYS5ncmlkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChqUXVlcnkodGhpcykudGV4dCgpID09ICdHcmlkJylcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50ZXh0KCcnKTtcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFwcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS10aFwiPjwvaT4nKTtcbiAgICB9KTtcblxuICAgIC8vU2Nyb2xsIHRvIHRvcFxuICAgIGpRdWVyeSgnLmNvb2tpZS1jb250YWluZXInKS5hZnRlcignPGRpdiBjbGFzcz1cInNjcm9sbFRvVG9wXCI+PC9kaXY+Jyk7XG4gICAgalF1ZXJ5KCcuc2Nyb2xsVG9Ub3AnKS5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1jaXJjbGUtdXAgZmEtMnhcIj48L2k+Jyk7XG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsVG9Ub3AnKS5mYWRlSW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbFRvVG9wJykuZmFkZU91dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL0NsaWNrIGV2ZW50IHRvIHNjcm9sbCB0byB0b3BcbiAgICBqUXVlcnkoJy5zY3JvbGxUb1RvcCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgODAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy9Db29raWVCYXJcbiAgICBqUXVlcnkoJy5jb29raWUtY29udGFpbmVyJykuY29va2llQmFyKHtcbiAgICAgICAgY2xvc2VCdXR0b246ICcuY2xvc2UtY29va2llJyxcbiAgICAgICAgc2VjdXJlOiB0cnVlLFxuICAgICAgICBkb21haW46ICcud3d3Lmdhc3Ryb2RheC5kZSdcbiAgICB9KTtcblxuICAgIC8vb3dsLmNhcm91c2VsXG4gICAgLy9Tb3J0IHJhbmRvbSBmdW5jdGlvbiBmb3Igb3dsLmNhcm91c2VsXG4gICAgZnVuY3Rpb24gcmFuZG9tKG93bFNlbGVjdG9yKSB7XG4gICAgICAgIG93bFNlbGVjdG9yLmNoaWxkcmVuKCkuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSAtIDAuNTtcbiAgICAgICAgfSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkodGhpcykuYXBwZW5kVG8ob3dsU2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL0hvbWUgU2xpZGVyIFRvcCBQcm9kdWN0c1xuICAgIHZhciAkc2xpZGVyMSA9IGpRdWVyeSgnLnRvcC1wcm9kdWN0cy1zbGlkZXInKTtcbiAgICAkc2xpZGVyMS5vbignaW5pdGlhbGl6ZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0galF1ZXJ5KCcudG9wLXByb2R1Y3RzLXNsaWRlcicpO1xuICAgICAgICByYW5kb20oc2VsZWN0b3IpO1xuICAgIH0pO1xuICAgIGpRdWVyeSgnLnRvcC1wcm9kdWN0cy1zbGlkZXInKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtpdGVtczogMX0sXG4gICAgICAgICAgICA2MDA6IHtpdGVtczogMn0sXG4gICAgICAgICAgICAxMDAwOiB7aXRlbXM6IDN9LFxuICAgICAgICAgICAgMTEwMDoge2l0ZW1zOiA0fSxcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vSG9tZSBTbGlkZXIgY3JlZGVudGlhbHNcbiAgICB2YXIgJHNsaWRlcjIgPSBqUXVlcnkoJy5jcmVkZW50aWFscy1zbGlkZXInKTtcbiAgICAkc2xpZGVyMi5vbignaW5pdGlhbGl6ZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0galF1ZXJ5KCcuY3JlZGVudGlhbHMtc2xpZGVyJyk7XG4gICAgICAgIHJhbmRvbShzZWxlY3Rvcik7XG4gICAgfSk7XG4gICAgalF1ZXJ5KCcuY3JlZGVudGlhbHMtc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtczogOCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwOiB7aXRlbXM6IDJ9LFxuICAgICAgICAgICAgNjAwOiB7aXRlbXM6IDV9LFxuICAgICAgICAgICAgMTAwMDoge2l0ZW1zOiA4fVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL0Zvb3RlciBTbGlkZXIgdXNlciByZXZpZXdzXG4gICAgdmFyICRzbGlkZXIzID0galF1ZXJ5KCcucmV2aWV3cy1zbGlkZXInKTtcbiAgICAkc2xpZGVyMy5vbignaW5pdGlhbGl6ZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0galF1ZXJ5KCcucmV2aWV3cy1zbGlkZXInKTtcbiAgICAgICAgcmFuZG9tKHNlbGVjdG9yKTtcbiAgICB9KTtcbiAgICBqUXVlcnkoJy5yZXZpZXdzLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIGF1dG9IZWlnaHQ6IHRydWVcbiAgICB9KTtcbiAgICB2YXIgJGN1c3RvbUV2ZW50cyA9ICQoJyNjdXN0b20tZXZlbnRzJyk7XG5cbiAgICAvL05ld3NsZXR0ZXJcbiAgICB2YXIgRXNOZXdzU3Vic2NyaWJlcnMgPSB7XG5cbiAgICAgICAgY29va2llTGl2ZVRpbWU6IDEwMCxcbiAgICAgICAgY29va2llTmFtZTogJ25ld3NzdWJzY3JpYmVyJyxcbiAgICAgICAgYmFzZVVybDogJycsXG5cbiAgICAgICAgc2V0Q29va2llTGl2ZVRpbWU6IGZ1bmN0aW9uKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvb2tpZUxpdmVUaW1lID0gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0Q29va2llTmFtZTogZnVuY3Rpb24odmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29va2llTmFtZSA9IHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEJhc2VVcmw6IGZ1bmN0aW9uKHVybClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gdXJsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEJhc2VVcmw6IGZ1bmN0aW9uKHVybClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybDtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVDb29raWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRheXMgPSB0aGlzLmNvb2tpZUxpdmVUaW1lO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gMTtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5jb29raWVOYW1lO1xuICAgICAgICAgICAgaWYgKGRheXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKyhkYXlzKjI0KjYwKjYwKjEwMDApKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiK2RhdGUudG9HTVRTdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgdmFyIGV4cGlyZXMgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gZXNjYXBlKG5hbWUpK1wiPVwiK2VzY2FwZSh2YWx1ZSkrZXhwaXJlcytcIjsgcGF0aD0vXCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZENvb2tpZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmNvb2tpZU5hbWU7XG4gICAgICAgICAgICB2YXIgbmFtZUVRID0gZXNjYXBlKG5hbWUpICsgXCI9XCI7XG4gICAgICAgICAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjYVtpXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCk9PScgJykgYyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gdW5lc2NhcGUoYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYm94Q2xvc2U6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHBvcHVwID0gbmV3IEZvdW5kYXRpb24uUmV2ZWFsKGpRdWVyeSgnI2VzbnMnKSk7XG4gICAgICAgICAgICBwb3B1cC5jbG9zZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJveE9wZW46IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHBvcHVwID0gbmV3IEZvdW5kYXRpb24uUmV2ZWFsKGpRdWVyeSgnI2VzbnMnKSk7XG4gICAgICAgICAgICBwb3B1cC5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgalF1ZXJ5KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoRXNOZXdzU3Vic2NyaWJlcnMucmVhZENvb2tpZSgpICE9IDEpIHtcbiAgICAgICAgICAgIC8vRXNOZXdzU3Vic2NyaWJlcnMuY3JlYXRlQ29va2llKCk7XG4gICAgICAgICAgICAvL0VzTmV3c1N1YnNjcmliZXJzLmJveE9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBqUXVlcnkoJyNlc25zX3N1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgZW1haWwgPSBqUXVlcnkoJyNlc25zX2VtYWlsJykudmFsKCk7XG4gICAgICAgICAgICBqUXVlcnkucG9zdChFc05ld3NTdWJzY3JpYmVycy5nZXRCYXNlVXJsKCkrJ25ld3NsZXR0ZXIvc3Vic2NyaWJlci9uZXdhamF4LycsIHsnZW1haWwnOmVtYWlsfSwgZnVuY3Rpb24ocmVzcCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLmVycm9yTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2VzbnNfYm94X3N1YnNjcmliZV9yZXNwb25zZV9lcnJvcicpLmh0bWwoJzxwPicrcmVzcC5lcnJvck1zZysnPC9wPjxocj4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNlc25zX2JveF9zdWJzY3JpYmVfcmVzcG9uc2VfZXJyb3InKS5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZXNuc19ib3hfc3Vic2NyaWJlX3Jlc3BvbnNlX3N1Y2Nlc3MnKS5odG1sKCc8cD4nK3Jlc3Auc3VjY2Vzc01zZysnPC9wPjxocj4nKTtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZXNuc19ib3hfc3Vic2NyaWJlX2Zvcm0nKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2VzbnNfYm94X3N1YnNjcmliZV9yZXNwb25zZV9zdWNjZXNzJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgnRXNOZXdzU3Vic2NyaWJlcnMuYm94Q2xvc2UoKScsIDUwMDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy9MaWdodEdhbGxlcnlcbiAgICBqUXVlcnkoJy5wcm9kdWN0LWltZy1ib3gnKS5saWdodEdhbGxlcnkoe1xuICAgICAgICBpZnJhbWVNYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICB2aWRlb01heFdpZHRoOiAnMTE0MHB4JyxcbiAgICAgICAgc2VsZWN0b3I6ICcuaXRlbScsXG4gICAgICAgIHRodW1ibmFpbDogdHJ1ZSxcbiAgICAgICAgaGFzaDogZmFsc2VcbiAgICB9KTtcblxufSk7Il19
