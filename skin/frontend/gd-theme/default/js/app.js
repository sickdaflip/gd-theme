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
    jQuery('.cookie-container').cookieBar({ closeButton: '.close-cookie' });

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsImZvdW5kYXRpb24iLCJyZWFkeSIsInNsaWRlRG93biIsImR1cmF0aW9uIiwiY29tcGxldGUiLCJkZWxheSIsInNsaWRlVXAiLCJhcHBlbmQiLCJwcmVwZW5kIiwiY2xpY2siLCJjdXJyZW50VmFsIiwicGFyc2VJbnQiLCJ2YWwiLCJhZnRlciIsImVhY2giLCJ0ZXh0Iiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZmFkZUluIiwiZmFkZU91dCIsImFuaW1hdGUiLCJjb29raWVCYXIiLCJjbG9zZUJ1dHRvbiIsInJhbmRvbSIsIm93bFNlbGVjdG9yIiwiY2hpbGRyZW4iLCJzb3J0IiwiTWF0aCIsInJvdW5kIiwiYXBwZW5kVG8iLCIkc2xpZGVyMSIsIm9uIiwiZXZlbnQiLCJzZWxlY3RvciIsIm93bENhcm91c2VsIiwiaXRlbXMiLCJsb29wIiwibmF2IiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlUaW1lb3V0IiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwicmVzcG9uc2l2ZUNsYXNzIiwicmVzcG9uc2l2ZSIsIiRzbGlkZXIyIiwiJHNsaWRlcjMiLCJhdXRvSGVpZ2h0IiwiJGN1c3RvbUV2ZW50cyIsIiQiLCJFc05ld3NTdWJzY3JpYmVycyIsImNvb2tpZUxpdmVUaW1lIiwiY29va2llTmFtZSIsImJhc2VVcmwiLCJzZXRDb29raWVMaXZlVGltZSIsInZhbHVlIiwic2V0Q29va2llTmFtZSIsInNldEJhc2VVcmwiLCJ1cmwiLCJnZXRCYXNlVXJsIiwiY3JlYXRlQ29va2llIiwiZGF5cyIsIm5hbWUiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvR01UU3RyaW5nIiwiY29va2llIiwiZXNjYXBlIiwicmVhZENvb2tpZSIsIm5hbWVFUSIsImNhIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJ1bmVzY2FwZSIsImJveENsb3NlIiwicG9wdXAiLCJGb3VuZGF0aW9uIiwiUmV2ZWFsIiwiY2xvc2UiLCJib3hPcGVuIiwib3BlbiIsImVtYWlsIiwicG9zdCIsInJlc3AiLCJlcnJvck1zZyIsImh0bWwiLCJzdWNjZXNzTXNnIiwiY3NzIiwic2V0VGltZW91dCIsImxpZ2h0R2FsbGVyeSIsImlmcmFtZU1heFdpZHRoIiwidmlkZW9NYXhXaWR0aCIsInRodW1ibmFpbCIsImhhc2giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBQSxPQUFPQyxRQUFQLEVBQWlCQyxVQUFqQjs7QUFFQUYsT0FBT0MsUUFBUCxFQUFpQkUsS0FBakIsQ0FBdUIsWUFBWTs7QUFJL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQUgsV0FBTyxtQkFBUCxFQUE0QkksU0FBNUIsQ0FBc0M7QUFDbENDLGtCQUFVLElBRHdCO0FBRWxDQyxrQkFBVSxvQkFBWTtBQUNsQk4sbUJBQU8sbUJBQVAsRUFBNEJPLEtBQTVCLENBQWtDLElBQWxDLEVBQXdDQyxPQUF4QyxDQUFnRCxJQUFoRDtBQUNIO0FBSmlDLEtBQXRDOztBQU9BO0FBQ0FSLFdBQU8sd0JBQVAsRUFBaUNTLE1BQWpDLENBQXdDLHFGQUF4QyxFQUErSEMsT0FBL0gsQ0FBdUksMEZBQXZJO0FBQ0FWLFdBQU8saUJBQVAsRUFBMEJXLEtBQTFCLENBQWdDLFlBQVk7QUFDeEMsWUFBSUMsYUFBYUMsU0FBU2IsT0FBTyxNQUFQLEVBQWVjLEdBQWYsRUFBVCxDQUFqQjtBQUNBLFlBQUksQ0FBQ0YsVUFBRCxJQUFlQSxjQUFjLEVBQTdCLElBQW1DQSxjQUFjLEtBQXJELEVBQTREQSxhQUFhLENBQWI7QUFDNURaLGVBQU8sTUFBUCxFQUFlYyxHQUFmLENBQW1CRixhQUFhLENBQWhDO0FBQ0gsS0FKRDs7QUFNQVosV0FBTyxrQkFBUCxFQUEy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QixnQ0FBM0MsRUFBNkUsRUFBQyxTQUFROEIsS0FBVCxFQUE3RSxFQUE4RixVQUFTRSxJQUFULEVBQWU7QUFDekcsb0JBQUlBLEtBQUtDLFFBQVQsRUFBbUI7QUFDZjlGLDJCQUFPLG9DQUFQLEVBQTZDK0YsSUFBN0MsQ0FBa0QsUUFBTUYsS0FBS0MsUUFBWCxHQUFvQixVQUF0RTtBQUNILGlCQUZELE1BRU87QUFDSDlGLDJCQUFPLG9DQUFQLEVBQTZDK0YsSUFBN0MsQ0FBa0QsRUFBbEQ7QUFDQS9GLDJCQUFPLHNDQUFQLEVBQStDK0YsSUFBL0MsQ0FBb0QsUUFBTUYsS0FBS0csVUFBWCxHQUFzQixVQUExRTtBQUNBaEcsMkJBQU8sMEJBQVAsRUFBbUNpRyxHQUFuQyxDQUF1QyxTQUF2QyxFQUFpRCxNQUFqRDtBQUNBakcsMkJBQU8sc0NBQVAsRUFBK0NpRyxHQUEvQyxDQUFtRCxTQUFuRCxFQUE2RCxPQUE3RDtBQUNBQywrQkFBVyw4QkFBWCxFQUEyQyxJQUEzQztBQUNIO0FBQ0osYUFWRDtBQVdILFNBYkQ7QUFjSCxLQW5CRDs7QUFxQkE7QUFDQWxHLFdBQU8sa0JBQVAsRUFBMkJtRyxZQUEzQixDQUF3QztBQUNwQ0Msd0JBQWdCLE1BRG9CO0FBRXBDQyx1QkFBZSxRQUZxQjtBQUdwQ2pFLGtCQUFVLE9BSDBCO0FBSXBDa0UsbUJBQVcsSUFKeUI7QUFLcENDLGNBQU07QUFMOEIsS0FBeEM7QUFRSCxDQTVQRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb3VuZGF0aW9uIEphdmFTY3JpcHRcbi8vIERvY3VtZW50YXRpb24gY2FuIGJlIGZvdW5kIGF0OiBodHRwOi8vZm91bmRhdGlvbi56dXJiLmNvbS9kb2NzXG5qUXVlcnkoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICBcbiAgICBcbiAgICAvL1RhcmdldCBzcGVjaWZpYyBicm93c2VyXG4gICAgLy9VbmNvbW1lbnQgaWYgeW91IG5lZWQgaXRcbiAgICAvLyBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKSB7XG4gICAgLy8gICAgIGpRdWVyeSgnYm9keScpLmFkZENsYXNzKCdpZS10YXJnZXQnKTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignU2FmYXJpJykgIT0gLTEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA9PSAtMSkge1xuICAgIC8vICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnc2FmYXJpLXRhcmdldCcpO1xuICAgIC8vIH1cblxuICAgIC8vIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPiAtMSkge1xuICAgIC8vICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnY2hyb21lLXRhcmdldCcpO1xuICAgIC8vIH1cblxuICAgIC8vIFNob3cgTW9kYWwgZm9yIFN0b3JlIFZpZXdcbiAgICAvL2lmIChqUXVlcnkuY29va2llKCdzdG9yZV92aWV3JykgPT0gbnVsbCkge1xuICAgIC8vICAgIGpRdWVyeS5jb29raWUoJ3N0b3JlX3ZpZXcnLCAneWVzJywge2V4cGlyZXM6IDcsIHBhdGg6ICcvJ30pO1xuICAgIC8vICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICBqUXVlcnkoXCIjc3RvcmVfdmlld1wiKS5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnb3BlbicpO1xuICAgIC8vICAgIH0sIDMwMDApO1xuICAgIC8vfVxuXG4gICAgLy8gQWxlcnQtQm94IGF1dG9fY2xvc2VcbiAgICBqUXVlcnkoJy5jYWxsb3V0Lm1lc3NhZ2VzJykuc2xpZGVEb3duKHtcbiAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5jYWxsb3V0Lm1lc3NhZ2VzJykuZGVsYXkoNzAwMCkuc2xpZGVVcCgxNTAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUHJvZHVjdCBwYWdlIC8gd2lzaGxpc3QgLSBxdWFudGl0eSBpbmNyZWFzZS9kZWNyZWFzZVxuICAgIGpRdWVyeSgnLnF1YW50aXR5IC5pbnB1dC1ncm91cCcpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1sYWJlbCBwbHVzXCI+PGkgaWQ9XCJhZGQxXCIgY2xhc3M9XCJwbHVzIGZhIGZhLXBsdXNcIiAvPjwvc3Bhbj4nKS5wcmVwZW5kKCc8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWxhYmVsIG1pbnVzXCI+PGkgaWQ9XCJtaW51czFcIiBjbGFzcz1cIm1pbnVzIGZhIGZhLW1pbnVzXCIgLz48L3NwYW4+Jyk7XG4gICAgalF1ZXJ5KCcucXVhbnRpdHkgLnBsdXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsID0gcGFyc2VJbnQoalF1ZXJ5KFwiLnF0eVwiKS52YWwoKSk7XG4gICAgICAgIGlmICghY3VycmVudFZhbCB8fCBjdXJyZW50VmFsID09IFwiXCIgfHwgY3VycmVudFZhbCA9PSBcIk5hTlwiKSBjdXJyZW50VmFsID0gMDtcbiAgICAgICAgalF1ZXJ5KFwiLnF0eVwiKS52YWwoY3VycmVudFZhbCArIDEpO1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcucXVhbnRpdHkgLm1pbnVzJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFZhbCA9IHBhcnNlSW50KGpRdWVyeShcIi5xdHlcIikudmFsKCkpO1xuICAgICAgICBpZiAoY3VycmVudFZhbCA9PSBcIk5hTlwiKSBjdXJyZW50VmFsID0gMDtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWwgPiAxKSB7XG4gICAgICAgICAgICBqUXVlcnkoXCIucXR5XCIpLnZhbChjdXJyZW50VmFsIC0gMSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vR3JpZCAvIExpc3Qgdmlld1xuICAgIGpRdWVyeSgnLnZpZXctbW9kZSBzdHJvbmcuZ3JpZCcpLmFmdGVyKCc8aSBjbGFzcz1cImZhIGZhLXRoXCI+PC9pPicpO1xuICAgIGpRdWVyeSgnLnZpZXctbW9kZSBzdHJvbmcubGlzdCcpLmFmdGVyKCc8aSBjbGFzcz1cImZhIGZhLWFsaWduLWp1c3RpZnlcIj48L2k+Jyk7XG5cbiAgICBqUXVlcnkoJy52aWV3LW1vZGUgYS5saXN0JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChqUXVlcnkodGhpcykudGV4dCgpID09ICdMaXN0JylcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50ZXh0KCcnKTtcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFwcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS1hbGlnbi1qdXN0aWZ5XCI+PC9pPicpO1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcudmlldy1tb2RlIGEuZ3JpZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnRleHQoKSA9PSAnR3JpZCcpXG4gICAgICAgICAgICBqUXVlcnkodGhpcykudGV4dCgnJyk7XG4gICAgICAgIGpRdWVyeSh0aGlzKS5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtdGhcIj48L2k+Jyk7XG4gICAgfSk7XG5cbiAgICAvL1Njcm9sbCB0byB0b3BcbiAgICBqUXVlcnkoJy5jb29raWUtY29udGFpbmVyJykuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJzY3JvbGxUb1RvcFwiPjwvZGl2PicpO1xuICAgIGpRdWVyeSgnLnNjcm9sbFRvVG9wJykuYXBwZW5kKCc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tY2lyY2xlLXVwIGZhLTJ4XCI+PC9pPicpO1xuICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChqUXVlcnkodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbFRvVG9wJykuZmFkZUluKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGxUb1RvcCcpLmZhZGVPdXQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9DbGljayBldmVudCB0byBzY3JvbGwgdG8gdG9wXG4gICAgalF1ZXJ5KCcuc2Nyb2xsVG9Ub3AnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDgwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vQ29va2llQmFyXG4gICAgalF1ZXJ5KCcuY29va2llLWNvbnRhaW5lcicpLmNvb2tpZUJhcih7Y2xvc2VCdXR0b246ICcuY2xvc2UtY29va2llJ30pO1xuXG4gICAgLy9vd2wuY2Fyb3VzZWxcbiAgICAvL1NvcnQgcmFuZG9tIGZ1bmN0aW9uIGZvciBvd2wuY2Fyb3VzZWxcbiAgICBmdW5jdGlvbiByYW5kb20ob3dsU2VsZWN0b3IpIHtcbiAgICAgICAgb3dsU2VsZWN0b3IuY2hpbGRyZW4oKS5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpIC0gMC41O1xuICAgICAgICB9KS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hcHBlbmRUbyhvd2xTZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vSG9tZSBTbGlkZXIgVG9wIFByb2R1Y3RzXG4gICAgdmFyICRzbGlkZXIxID0galF1ZXJ5KCcudG9wLXByb2R1Y3RzLXNsaWRlcicpO1xuICAgICRzbGlkZXIxLm9uKCdpbml0aWFsaXplLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBqUXVlcnkoJy50b3AtcHJvZHVjdHMtc2xpZGVyJyk7XG4gICAgICAgIHJhbmRvbShzZWxlY3Rvcik7XG4gICAgfSk7XG4gICAgalF1ZXJ5KCcudG9wLXByb2R1Y3RzLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IDQsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge2l0ZW1zOiAxfSxcbiAgICAgICAgICAgIDYwMDoge2l0ZW1zOiAyfSxcbiAgICAgICAgICAgIDEwMDA6IHtpdGVtczogM30sXG4gICAgICAgICAgICAxMTAwOiB7aXRlbXM6IDR9LFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9Ib21lIFNsaWRlciBjcmVkZW50aWFsc1xuICAgIHZhciAkc2xpZGVyMiA9IGpRdWVyeSgnLmNyZWRlbnRpYWxzLXNsaWRlcicpO1xuICAgICRzbGlkZXIyLm9uKCdpbml0aWFsaXplLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBqUXVlcnkoJy5jcmVkZW50aWFscy1zbGlkZXInKTtcbiAgICAgICAgcmFuZG9tKHNlbGVjdG9yKTtcbiAgICB9KTtcbiAgICBqUXVlcnkoJy5jcmVkZW50aWFscy1zbGlkZXInKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGl0ZW1zOiA4LFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtpdGVtczogMn0sXG4gICAgICAgICAgICA2MDA6IHtpdGVtczogNX0sXG4gICAgICAgICAgICAxMDAwOiB7aXRlbXM6IDh9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vRm9vdGVyIFNsaWRlciB1c2VyIHJldmlld3NcbiAgICB2YXIgJHNsaWRlcjMgPSBqUXVlcnkoJy5yZXZpZXdzLXNsaWRlcicpO1xuICAgICRzbGlkZXIzLm9uKCdpbml0aWFsaXplLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBqUXVlcnkoJy5yZXZpZXdzLXNsaWRlcicpO1xuICAgICAgICByYW5kb20oc2VsZWN0b3IpO1xuICAgIH0pO1xuICAgIGpRdWVyeSgnLnJldmlld3Mtc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtczogMSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgYXV0b0hlaWdodDogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciAkY3VzdG9tRXZlbnRzID0gJCgnI2N1c3RvbS1ldmVudHMnKTtcblxuICAgIC8vTmV3c2xldHRlclxuICAgIHZhciBFc05ld3NTdWJzY3JpYmVycyA9IHtcblxuICAgICAgICBjb29raWVMaXZlVGltZTogMTAwLFxuICAgICAgICBjb29raWVOYW1lOiAnbmV3c3N1YnNjcmliZXInLFxuICAgICAgICBiYXNlVXJsOiAnJyxcblxuICAgICAgICBzZXRDb29raWVMaXZlVGltZTogZnVuY3Rpb24odmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29va2llTGl2ZVRpbWUgPSB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRDb29raWVOYW1lOiBmdW5jdGlvbih2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb29raWVOYW1lID0gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0QmFzZVVybDogZnVuY3Rpb24odXJsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0QmFzZVVybDogZnVuY3Rpb24odXJsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUNvb2tpZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZGF5cyA9IHRoaXMuY29va2llTGl2ZVRpbWU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAxO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmNvb2tpZU5hbWU7XG4gICAgICAgICAgICBpZiAoZGF5cykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkrKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xuICAgICAgICAgICAgICAgIHZhciBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIrZGF0ZS50b0dNVFN0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB2YXIgZXhwaXJlcyA9IFwiXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBlc2NhcGUobmFtZSkrXCI9XCIrZXNjYXBlKHZhbHVlKStleHBpcmVzK1wiOyBwYXRoPS9cIjtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkQ29va2llOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMuY29va2llTmFtZTtcbiAgICAgICAgICAgIHZhciBuYW1lRVEgPSBlc2NhcGUobmFtZSkgKyBcIj1cIjtcbiAgICAgICAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgICAgICAgICAgZm9yKHZhciBpPTA7aSA8IGNhLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSBjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiB1bmVzY2FwZShjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLGMubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBib3hDbG9zZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcG9wdXAgPSBuZXcgRm91bmRhdGlvbi5SZXZlYWwoalF1ZXJ5KCcjZXNucycpKTtcbiAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYm94T3BlbjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcG9wdXAgPSBuZXcgRm91bmRhdGlvbi5SZXZlYWwoalF1ZXJ5KCcjZXNucycpKTtcbiAgICAgICAgICAgIHBvcHVwLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBqUXVlcnkoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChFc05ld3NTdWJzY3JpYmVycy5yZWFkQ29va2llKCkgIT0gMSkge1xuICAgICAgICAgICAgLy9Fc05ld3NTdWJzY3JpYmVycy5jcmVhdGVDb29raWUoKTtcbiAgICAgICAgICAgIC8vRXNOZXdzU3Vic2NyaWJlcnMuYm94T3BlbigpO1xuICAgICAgICB9XG4gICAgICAgIGpRdWVyeSgnI2VzbnNfc3VibWl0JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IGpRdWVyeSgnI2VzbnNfZW1haWwnKS52YWwoKTtcbiAgICAgICAgICAgIGpRdWVyeS5wb3N0KEVzTmV3c1N1YnNjcmliZXJzLmdldEJhc2VVcmwoKSsnbmV3c2xldHRlci9zdWJzY3JpYmVyL25ld2FqYXgvJywgeydlbWFpbCc6ZW1haWx9LCBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZXNuc19ib3hfc3Vic2NyaWJlX3Jlc3BvbnNlX2Vycm9yJykuaHRtbCgnPHA+JytyZXNwLmVycm9yTXNnKyc8L3A+PGhyPicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2VzbnNfYm94X3N1YnNjcmliZV9yZXNwb25zZV9lcnJvcicpLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNlc25zX2JveF9zdWJzY3JpYmVfcmVzcG9uc2Vfc3VjY2VzcycpLmh0bWwoJzxwPicrcmVzcC5zdWNjZXNzTXNnKyc8L3A+PGhyPicpO1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNlc25zX2JveF9zdWJzY3JpYmVfZm9ybScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjZXNuc19ib3hfc3Vic2NyaWJlX3Jlc3BvbnNlX3N1Y2Nlc3MnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCdFc05ld3NTdWJzY3JpYmVycy5ib3hDbG9zZSgpJywgNTAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvL0xpZ2h0R2FsbGVyeVxuICAgIGpRdWVyeSgnLnByb2R1Y3QtaW1nLWJveCcpLmxpZ2h0R2FsbGVyeSh7XG4gICAgICAgIGlmcmFtZU1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIHZpZGVvTWF4V2lkdGg6ICcxMTQwcHgnLFxuICAgICAgICBzZWxlY3RvcjogJy5pdGVtJyxcbiAgICAgICAgdGh1bWJuYWlsOiB0cnVlLFxuICAgICAgICBoYXNoOiBmYWxzZVxuICAgIH0pO1xuXG59KTsiXX0=
