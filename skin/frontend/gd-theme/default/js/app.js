jQuery(document).foundation();
jQuery(document).ready(function () {

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

    //12 reasons
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.reasons').fadeIn(2500);
        } else {
            jQuery('.reasons').fadeOut();
        }
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
        items: 6,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {items: 1},
            640: {items: 2},
            1024: {items: 4}
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
            640: {items: 5},
            1024: {items: 8}
        }
    });

    //LightGallery
    jQuery('.product-img-box').lightGallery({
        iframeMaxWidth: '100%',
        selector: '.item',
        thumbnail: true,
        hash: false
    });

    jQuery('#password').focus(function () {
        jQuery('#toolTipPasswordStrength').css("display", "inline");
    });
    jQuery('#password').blur(function () {
        jQuery('#toolTipPasswordStrength').css("display", "none");
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
    jQuery('ul.options-list').each(function () {
        var max = 2;
        if (jQuery(this).find("li").length > max) {
            jQuery(this)
                .find('li:gt(' + max + ')')
                .hide()
                .end()
                .append(
                    jQuery('<li class="show-more">weitere Optionen anzeigen</li>').click(function () {
                        jQuery(this).siblings(':hidden').show().end().remove();
                    })
                );
        }
    });

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gQWxlcnQtQm94IGF1dG9fY2xvc2VcbiAgICBqUXVlcnkoJy5jYWxsb3V0Lm1lc3NhZ2VzJykuc2xpZGVEb3duKHtcbiAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5jYWxsb3V0Lm1lc3NhZ2VzJykuZGVsYXkoNzAwMCkuc2xpZGVVcCgxNTAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUHJvZHVjdCBwYWdlIC8gd2lzaGxpc3QgLSBxdWFudGl0eSBpbmNyZWFzZS9kZWNyZWFzZVxuICAgIGpRdWVyeSgnLnF1YW50aXR5IC5pbnB1dC1ncm91cCcpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1sYWJlbCBwbHVzXCI+PGkgaWQ9XCJhZGQxXCIgY2xhc3M9XCJmYSBmYS1wbHVzXCIgLz48L3NwYW4+JykucHJlcGVuZCgnPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1sYWJlbCBtaW51c1wiPjxpIGlkPVwibWludXMxXCIgY2xhc3M9XCJmYSBmYS1taW51c1wiIC8+PC9zcGFuPicpO1xuICAgIGpRdWVyeSgnLnF1YW50aXR5IC5wbHVzJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFZhbCA9IHBhcnNlSW50KGpRdWVyeShcIi5xdHlcIikudmFsKCkpO1xuICAgICAgICBpZiAoIWN1cnJlbnRWYWwgfHwgY3VycmVudFZhbCA9PSBcIlwiIHx8IGN1cnJlbnRWYWwgPT0gXCJOYU5cIikgY3VycmVudFZhbCA9IDA7XG4gICAgICAgIGpRdWVyeShcIi5xdHlcIikudmFsKGN1cnJlbnRWYWwgKyAxKTtcbiAgICB9KTtcblxuICAgIGpRdWVyeSgnLnF1YW50aXR5IC5taW51cycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRWYWwgPSBwYXJzZUludChqUXVlcnkoXCIucXR5XCIpLnZhbCgpKTtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWwgPT0gXCJOYU5cIikgY3VycmVudFZhbCA9IDA7XG4gICAgICAgIGlmIChjdXJyZW50VmFsID4gMSkge1xuICAgICAgICAgICAgalF1ZXJ5KFwiLnF0eVwiKS52YWwoY3VycmVudFZhbCAtIDEpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL0dyaWQgLyBMaXN0IHZpZXdcbiAgICBqUXVlcnkoJy52aWV3LW1vZGUgc3Ryb25nLmdyaWQnKS5hZnRlcignPGkgY2xhc3M9XCJmYSBmYS10aFwiPjwvaT4nKTtcbiAgICBqUXVlcnkoJy52aWV3LW1vZGUgc3Ryb25nLmxpc3QnKS5hZnRlcignPGkgY2xhc3M9XCJmYSBmYS1hbGlnbi1qdXN0aWZ5XCI+PC9pPicpO1xuXG4gICAgalF1ZXJ5KCcudmlldy1tb2RlIGEubGlzdCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnRleHQoKSA9PSAnTGlzdCcpXG4gICAgICAgICAgICBqUXVlcnkodGhpcykudGV4dCgnJyk7XG4gICAgICAgIGpRdWVyeSh0aGlzKS5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtYWxpZ24tanVzdGlmeVwiPjwvaT4nKTtcbiAgICB9KTtcblxuICAgIGpRdWVyeSgnLnZpZXctbW9kZSBhLmdyaWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS50ZXh0KCkgPT0gJ0dyaWQnKVxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnRleHQoJycpO1xuICAgICAgICBqUXVlcnkodGhpcykuYXBwZW5kKCc8aSBjbGFzcz1cImZhIGZhLXRoXCI+PC9pPicpO1xuICAgIH0pO1xuXG4gICAgLy9TY3JvbGwgdG8gdG9wXG4gICAgalF1ZXJ5KCcuY29va2llLWNvbnRhaW5lcicpLmFmdGVyKCc8ZGl2IGNsYXNzPVwic2Nyb2xsVG9Ub3BcIj48L2Rpdj4nKTtcbiAgICBqUXVlcnkoJy5zY3JvbGxUb1RvcCcpLmFwcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWNpcmNsZS11cCBmYS0yeFwiPjwvaT4nKTtcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGxUb1RvcCcpLmZhZGVJbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsVG9Ub3AnKS5mYWRlT3V0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vQ2xpY2sgZXZlbnQgdG8gc2Nyb2xsIHRvIHRvcFxuICAgIGpRdWVyeSgnLnNjcm9sbFRvVG9wJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCA4MDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLzEyIHJlYXNvbnNcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5yZWFzb25zJykuZmFkZUluKDI1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgalF1ZXJ5KCcucmVhc29ucycpLmZhZGVPdXQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9Db29raWVCYXJcbiAgICBqUXVlcnkoJy5jb29raWUtY29udGFpbmVyJykuY29va2llQmFyKHtcbiAgICAgICAgY2xvc2VCdXR0b246ICcuY2xvc2UtY29va2llJ1xuICAgIH0pO1xuXG4gICAgLy9vd2wuY2Fyb3VzZWxcbiAgICAvL1NvcnQgcmFuZG9tIGZ1bmN0aW9uIGZvciBvd2wuY2Fyb3VzZWxcbiAgICBmdW5jdGlvbiByYW5kb20ob3dsU2VsZWN0b3IpIHtcbiAgICAgICAgb3dsU2VsZWN0b3IuY2hpbGRyZW4oKS5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpIC0gMC41O1xuICAgICAgICB9KS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hcHBlbmRUbyhvd2xTZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vSG9tZSBTbGlkZXIgVG9wIFByb2R1Y3RzXG4gICAgdmFyICRzbGlkZXIxID0galF1ZXJ5KCcudG9wLXByb2R1Y3RzLXNsaWRlcicpO1xuICAgICRzbGlkZXIxLm9uKCdpbml0aWFsaXplLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBqUXVlcnkoJy50b3AtcHJvZHVjdHMtc2xpZGVyJyk7XG4gICAgICAgIHJhbmRvbShzZWxlY3Rvcik7XG4gICAgfSk7XG4gICAgalF1ZXJ5KCcudG9wLXByb2R1Y3RzLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IDYsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge2l0ZW1zOiAxfSxcbiAgICAgICAgICAgIDY0MDoge2l0ZW1zOiAyfSxcbiAgICAgICAgICAgIDEwMjQ6IHtpdGVtczogNH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vSG9tZSBTbGlkZXIgY3JlZGVudGlhbHNcbiAgICB2YXIgJHNsaWRlcjIgPSBqUXVlcnkoJy5jcmVkZW50aWFscy1zbGlkZXInKTtcbiAgICAkc2xpZGVyMi5vbignaW5pdGlhbGl6ZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0galF1ZXJ5KCcuY3JlZGVudGlhbHMtc2xpZGVyJyk7XG4gICAgICAgIHJhbmRvbShzZWxlY3Rvcik7XG4gICAgfSk7XG4gICAgalF1ZXJ5KCcuY3JlZGVudGlhbHMtc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtczogOCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwOiB7aXRlbXM6IDJ9LFxuICAgICAgICAgICAgNjQwOiB7aXRlbXM6IDV9LFxuICAgICAgICAgICAgMTAyNDoge2l0ZW1zOiA4fVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL0xpZ2h0R2FsbGVyeVxuICAgIGpRdWVyeSgnLnByb2R1Y3QtaW1nLWJveCcpLmxpZ2h0R2FsbGVyeSh7XG4gICAgICAgIGlmcmFtZU1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIHNlbGVjdG9yOiAnLml0ZW0nLFxuICAgICAgICB0aHVtYm5haWw6IHRydWUsXG4gICAgICAgIGhhc2g6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBqUXVlcnkoJyNwYXNzd29yZCcpLmZvY3VzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgalF1ZXJ5KCcjdG9vbFRpcFBhc3N3b3JkU3RyZW5ndGgnKS5jc3MoXCJkaXNwbGF5XCIsIFwiaW5saW5lXCIpO1xuICAgIH0pO1xuICAgIGpRdWVyeSgnI3Bhc3N3b3JkJykuYmx1cihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeSgnI3Rvb2xUaXBQYXNzd29yZFN0cmVuZ3RoJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgfSk7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgIG9wdGlvbnMudWkgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogXCIjdG9vbFRpcFBhc3N3b3JkU3RyZW5ndGhcIixcbiAgICAgICAgdmlld3BvcnRzOiB7XG4gICAgICAgICAgICBwcm9ncmVzczogXCIjcGFzc3dvcmRTdHJlbmd0aEJhclwiLFxuICAgICAgICAgICAgdmVyZGljdDogXCIucHJvZ3Jlc3MtbWV0ZXJcIixcbiAgICAgICAgICAgIGVycm9yczogXCIjcGFzc3dvcmRTdHJlbmd0aEhlYWRMaW5lXCJcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgd29yZExlbmd0aDogXCJJaHIgUGFzc3dvcnQgaXN0IHp1IGt1cnpcIixcbiAgICAgICAgICAgIHdvcmROb3RFbWFpbDogXCJLZWluZSBFbWFpbFwiLFxuICAgICAgICAgICAgd29yZFNpbWlsYXJUb1VzZXJuYW1lOiBcIktlaW4gQmVudXR6ZXJuYW1lXCIsXG4gICAgICAgICAgICB3b3JkVHdvQ2hhcmFjdGVyQ2xhc3NlczogXCJLZWluZSBnbGVpY2hlbiBXb3J0Z3J1cHBlblwiLFxuICAgICAgICAgICAgd29yZFJlcGV0aXRpb25zOiBcIlp1IHZpZWxlIFdpZWRlcmhvbHVuZ2VuXCIsXG4gICAgICAgICAgICB3b3JkU2VxdWVuY2VzOiBcIklociBQYXNzd29ydCBlbnRow6RsdCBTZXF1ZW56ZW5cIlxuICAgICAgICB9LFxuICAgICAgICB2ZXJkaWN0czogW1wienUga3VyelwiLCBcInNjaHdhY2hcIiwgXCJndXRcIiwgXCJzdGFya1wiLCBcInNlaHIgc3RhcmtcIl0sXG4gICAgICAgIHNob3dWZXJkaWN0c0luc2lkZVByb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgICBzY29yZXM6IFsxNiwgMjYsIDM4LCA0NV0sXG4gICAgICAgIHNob3dFcnJvcnM6IHRydWUsXG4gICAgfTtcbiAgICBvcHRpb25zLnJ1bGVzID0ge1xuICAgICAgICBhY3RpdmF0ZWQ6IHtcbiAgICAgICAgICAgIHdvcmROb3RFbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRMZW5ndGg6IHRydWUsXG4gICAgICAgICAgICB3b3JkU2ltaWxhclRvVXNlcm5hbWU6IHRydWUsXG4gICAgICAgICAgICB3b3JkU2VxdWVuY2VzOiB0cnVlLFxuICAgICAgICAgICAgd29yZFR3b0NoYXJhY3RlckNsYXNzZXM6IHRydWUsXG4gICAgICAgICAgICB3b3JkUmVwZXRpdGlvbnM6IHRydWUsXG4gICAgICAgICAgICB3b3JkTG93ZXJjYXNlOiB0cnVlLFxuICAgICAgICAgICAgd29yZFVwcGVyY2FzZTogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRPbmVOdW1iZXI6IHRydWUsXG4gICAgICAgICAgICB3b3JkVGhyZWVOdW1iZXJzOiB0cnVlLFxuICAgICAgICAgICAgd29yZE9uZVNwZWNpYWxDaGFyOiB0cnVlLFxuICAgICAgICAgICAgd29yZFR3b1NwZWNpYWxDaGFyOiB0cnVlLFxuICAgICAgICAgICAgd29yZFVwcGVyTG93ZXJDb21ibzogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRMZXR0ZXJOdW1iZXJDb21ibzogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRMZXR0ZXJOdW1iZXJDaGFyQ29tYm86IHRydWVcbiAgICAgICAgfVxuICAgIH07XG4gICAgb3B0aW9ucy5jb21tb24gPSB7XG4gICAgICAgIG1pbkNoYXI6IDhcbiAgICB9O1xuICAgIGpRdWVyeSgnI3Bhc3N3b3JkJykucHdzdHJlbmd0aChvcHRpb25zKTtcblxuICAgIC8vUHJvZHVjdCBPcHRpb24gc2hvdyBtb3JlIGFuZCBsZXNzXG4gICAgalF1ZXJ5KCd1bC5vcHRpb25zLWxpc3QnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1heCA9IDI7XG4gICAgICAgIGlmIChqUXVlcnkodGhpcykuZmluZChcImxpXCIpLmxlbmd0aCA+IG1heCkge1xuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpOmd0KCcgKyBtYXggKyAnKScpXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgICAgIC5lbmQoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnPGxpIGNsYXNzPVwic2hvdy1tb3JlXCI+d2VpdGVyZSBPcHRpb25lbiBhbnplaWdlbjwvbGk+JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnNpYmxpbmdzKCc6aGlkZGVuJykuc2hvdygpLmVuZCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSk7XG4iXX0=
