jQuery(document).foundation();
jQuery(document).ready(function () {

    // not hide do remove!
    if (Foundation.MediaQuery.is('small only')) {
        jQuery('.hide-for-small-only').remove();
    }

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
        items: 4,
        lazyLoad: true,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {items: 1},
            640: {items: 3},
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
        items: 16,
        lazyLoad: true,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {items: 2},
            640: {items: 5},
            1024: {items: 12}
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

    //Product other Payments
    jQuery('.regular-price .price, .mwst-price').hide();
    jQuery('.regular-price .price-label').text('andere Zahlarten anzeigen >>');
    jQuery('.regular-price .price-label').on('click', function () {
        jQueryparent_box = jQuery(this).closest('.price-box');
        jQueryparent_box.siblings().find('.regular-price .price, .mwst-price').hide();
        jQueryparent_box.find('.regular-price .price, .mwst-price').toggle();
    });

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkuZm91bmRhdGlvbigpO1xualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBub3QgaGlkZSBkbyByZW1vdmUhXG4gICAgaWYgKEZvdW5kYXRpb24uTWVkaWFRdWVyeS5pcygnc21hbGwgb25seScpKSB7XG4gICAgICAgIGpRdWVyeSgnLmhpZGUtZm9yLXNtYWxsLW9ubHknKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBBbGVydC1Cb3ggYXV0b19jbG9zZVxuICAgIGpRdWVyeSgnLmNhbGxvdXQubWVzc2FnZXMnKS5zbGlkZURvd24oe1xuICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGpRdWVyeSgnLmNhbGxvdXQubWVzc2FnZXMnKS5kZWxheSg3MDAwKS5zbGlkZVVwKDE1MDApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBQcm9kdWN0IHBhZ2UgLyB3aXNobGlzdCAtIHF1YW50aXR5IGluY3JlYXNlL2RlY3JlYXNlXG4gICAgalF1ZXJ5KCcucXVhbnRpdHkgLmlucHV0LWdyb3VwJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWxhYmVsIHBsdXNcIj48aSBpZD1cImFkZDFcIiBjbGFzcz1cImZhIGZhLXBsdXNcIiAvPjwvc3Bhbj4nKS5wcmVwZW5kKCc8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWxhYmVsIG1pbnVzXCI+PGkgaWQ9XCJtaW51czFcIiBjbGFzcz1cImZhIGZhLW1pbnVzXCIgLz48L3NwYW4+Jyk7XG4gICAgalF1ZXJ5KCcucXVhbnRpdHkgLnBsdXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsID0gcGFyc2VJbnQoalF1ZXJ5KFwiLnF0eVwiKS52YWwoKSk7XG4gICAgICAgIGlmICghY3VycmVudFZhbCB8fCBjdXJyZW50VmFsID09IFwiXCIgfHwgY3VycmVudFZhbCA9PSBcIk5hTlwiKSBjdXJyZW50VmFsID0gMDtcbiAgICAgICAgalF1ZXJ5KFwiLnF0eVwiKS52YWwoY3VycmVudFZhbCArIDEpO1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcucXVhbnRpdHkgLm1pbnVzJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFZhbCA9IHBhcnNlSW50KGpRdWVyeShcIi5xdHlcIikudmFsKCkpO1xuICAgICAgICBpZiAoY3VycmVudFZhbCA9PSBcIk5hTlwiKSBjdXJyZW50VmFsID0gMDtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWwgPiAxKSB7XG4gICAgICAgICAgICBqUXVlcnkoXCIucXR5XCIpLnZhbChjdXJyZW50VmFsIC0gMSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vR3JpZCAvIExpc3Qgdmlld1xuICAgIGpRdWVyeSgnLnZpZXctbW9kZSBzdHJvbmcuZ3JpZCcpLmFmdGVyKCc8aSBjbGFzcz1cImZhIGZhLXRoXCI+PC9pPicpO1xuICAgIGpRdWVyeSgnLnZpZXctbW9kZSBzdHJvbmcubGlzdCcpLmFmdGVyKCc8aSBjbGFzcz1cImZhIGZhLWFsaWduLWp1c3RpZnlcIj48L2k+Jyk7XG5cbiAgICBqUXVlcnkoJy52aWV3LW1vZGUgYS5saXN0JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChqUXVlcnkodGhpcykudGV4dCgpID09ICdMaXN0JylcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50ZXh0KCcnKTtcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFwcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS1hbGlnbi1qdXN0aWZ5XCI+PC9pPicpO1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcudmlldy1tb2RlIGEuZ3JpZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnRleHQoKSA9PSAnR3JpZCcpXG4gICAgICAgICAgICBqUXVlcnkodGhpcykudGV4dCgnJyk7XG4gICAgICAgIGpRdWVyeSh0aGlzKS5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtdGhcIj48L2k+Jyk7XG4gICAgfSk7XG5cbiAgICAvLzEyIHJlYXNvbnNcbiAgICBqUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5yZWFzb25zJykuZmFkZUluKDI1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgalF1ZXJ5KCcucmVhc29ucycpLmZhZGVPdXQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9Db29raWVCYXJcbiAgICBqUXVlcnkoJy5jb29raWUtY29udGFpbmVyJykuY29va2llQmFyKHtcbiAgICAgICAgY2xvc2VCdXR0b246ICcuY2xvc2UtY29va2llJ1xuICAgIH0pO1xuXG4gICAgLy9vd2wuY2Fyb3VzZWxcbiAgICAvL1NvcnQgcmFuZG9tIGZ1bmN0aW9uIGZvciBvd2wuY2Fyb3VzZWxcbiAgICBmdW5jdGlvbiByYW5kb20ob3dsU2VsZWN0b3IpIHtcbiAgICAgICAgb3dsU2VsZWN0b3IuY2hpbGRyZW4oKS5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpIC0gMC41O1xuICAgICAgICB9KS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hcHBlbmRUbyhvd2xTZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vSG9tZSBTbGlkZXIgVG9wIFByb2R1Y3RzXG4gICAgdmFyICRzbGlkZXIxID0galF1ZXJ5KCcudG9wLXByb2R1Y3RzLXNsaWRlcicpO1xuICAgICRzbGlkZXIxLm9uKCdpbml0aWFsaXplLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBqUXVlcnkoJy50b3AtcHJvZHVjdHMtc2xpZGVyJyk7XG4gICAgICAgIHJhbmRvbShzZWxlY3Rvcik7XG4gICAgfSk7XG4gICAgalF1ZXJ5KCcudG9wLXByb2R1Y3RzLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IDQsXG4gICAgICAgIGxhenlMb2FkOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIG5hdlRleHQ6IFsnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JywnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiddLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtpdGVtczogMX0sXG4gICAgICAgICAgICA2NDA6IHtpdGVtczogM30sXG4gICAgICAgICAgICAxMDI0OiB7aXRlbXM6IDR9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL0hvbWUgU2xpZGVyIGNyZWRlbnRpYWxzXG4gICAgdmFyICRzbGlkZXIyID0galF1ZXJ5KCcuY3JlZGVudGlhbHMtc2xpZGVyJyk7XG4gICAgJHNsaWRlcjIub24oJ2luaXRpYWxpemUub3dsLmNhcm91c2VsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IGpRdWVyeSgnLmNyZWRlbnRpYWxzLXNsaWRlcicpO1xuICAgICAgICByYW5kb20oc2VsZWN0b3IpO1xuICAgIH0pO1xuICAgIGpRdWVyeSgnLmNyZWRlbnRpYWxzLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IDE2LFxuICAgICAgICBsYXp5TG9hZDogdHJ1ZSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPicsJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nXSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDEwMDAsXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwOiB7aXRlbXM6IDJ9LFxuICAgICAgICAgICAgNjQwOiB7aXRlbXM6IDV9LFxuICAgICAgICAgICAgMTAyNDoge2l0ZW1zOiAxMn1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9MaWdodEdhbGxlcnlcbiAgICBqUXVlcnkoJy5wcm9kdWN0LWltZy1ib3gnKS5saWdodEdhbGxlcnkoe1xuICAgICAgICBpZnJhbWVNYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBzZWxlY3RvcjogJy5pdGVtJyxcbiAgICAgICAgdGh1bWJuYWlsOiB0cnVlLFxuICAgICAgICBoYXNoOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcjcGFzc3dvcmQnKS5mb2N1cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeSgnI3Rvb2xUaXBQYXNzd29yZFN0cmVuZ3RoJykuY3NzKFwiZGlzcGxheVwiLCBcImlubGluZVwiKTtcbiAgICB9KTtcbiAgICBqUXVlcnkoJyNwYXNzd29yZCcpLmJsdXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkoJyN0b29sVGlwUGFzc3dvcmRTdHJlbmd0aCcpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIH0pO1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICBvcHRpb25zLnVpID0ge1xuICAgICAgICBjb250YWluZXI6IFwiI3Rvb2xUaXBQYXNzd29yZFN0cmVuZ3RoXCIsXG4gICAgICAgIHZpZXdwb3J0czoge1xuICAgICAgICAgICAgcHJvZ3Jlc3M6IFwiI3Bhc3N3b3JkU3RyZW5ndGhCYXJcIixcbiAgICAgICAgICAgIHZlcmRpY3Q6IFwiLnByb2dyZXNzLW1ldGVyXCIsXG4gICAgICAgICAgICBlcnJvcnM6IFwiI3Bhc3N3b3JkU3RyZW5ndGhIZWFkTGluZVwiXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICAgIHdvcmRMZW5ndGg6IFwiSWhyIFBhc3N3b3J0IGlzdCB6dSBrdXJ6XCIsXG4gICAgICAgICAgICB3b3JkTm90RW1haWw6IFwiS2VpbmUgRW1haWxcIixcbiAgICAgICAgICAgIHdvcmRTaW1pbGFyVG9Vc2VybmFtZTogXCJLZWluIEJlbnV0emVybmFtZVwiLFxuICAgICAgICAgICAgd29yZFR3b0NoYXJhY3RlckNsYXNzZXM6IFwiS2VpbmUgZ2xlaWNoZW4gV29ydGdydXBwZW5cIixcbiAgICAgICAgICAgIHdvcmRSZXBldGl0aW9uczogXCJadSB2aWVsZSBXaWVkZXJob2x1bmdlblwiLFxuICAgICAgICAgICAgd29yZFNlcXVlbmNlczogXCJJaHIgUGFzc3dvcnQgZW50aMOkbHQgU2VxdWVuemVuXCJcbiAgICAgICAgfSxcbiAgICAgICAgdmVyZGljdHM6IFtcInp1IGt1cnpcIiwgXCJzY2h3YWNoXCIsIFwiZ3V0XCIsIFwic3RhcmtcIiwgXCJzZWhyIHN0YXJrXCJdLFxuICAgICAgICBzaG93VmVyZGljdHNJbnNpZGVQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgc2NvcmVzOiBbMTYsIDI2LCAzOCwgNDVdLFxuICAgICAgICBzaG93RXJyb3JzOiB0cnVlLFxuICAgIH07XG4gICAgb3B0aW9ucy5ydWxlcyA9IHtcbiAgICAgICAgYWN0aXZhdGVkOiB7XG4gICAgICAgICAgICB3b3JkTm90RW1haWw6IHRydWUsXG4gICAgICAgICAgICB3b3JkTGVuZ3RoOiB0cnVlLFxuICAgICAgICAgICAgd29yZFNpbWlsYXJUb1VzZXJuYW1lOiB0cnVlLFxuICAgICAgICAgICAgd29yZFNlcXVlbmNlczogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRUd29DaGFyYWN0ZXJDbGFzc2VzOiB0cnVlLFxuICAgICAgICAgICAgd29yZFJlcGV0aXRpb25zOiB0cnVlLFxuICAgICAgICAgICAgd29yZExvd2VyY2FzZTogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRVcHBlcmNhc2U6IHRydWUsXG4gICAgICAgICAgICB3b3JkT25lTnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgd29yZFRocmVlTnVtYmVyczogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRPbmVTcGVjaWFsQ2hhcjogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRUd29TcGVjaWFsQ2hhcjogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRVcHBlckxvd2VyQ29tYm86IHRydWUsXG4gICAgICAgICAgICB3b3JkTGV0dGVyTnVtYmVyQ29tYm86IHRydWUsXG4gICAgICAgICAgICB3b3JkTGV0dGVyTnVtYmVyQ2hhckNvbWJvOiB0cnVlXG4gICAgICAgIH1cbiAgICB9O1xuICAgIG9wdGlvbnMuY29tbW9uID0ge1xuICAgICAgICBtaW5DaGFyOiA4XG4gICAgfTtcbiAgICBqUXVlcnkoJyNwYXNzd29yZCcpLnB3c3RyZW5ndGgob3B0aW9ucyk7XG5cbiAgICAvL1Byb2R1Y3QgT3B0aW9uIHNob3cgbW9yZSBhbmQgbGVzc1xuICAgIGpRdWVyeSgndWwub3B0aW9ucy1saXN0JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtYXggPSAyO1xuICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLmZpbmQoXCJsaVwiKS5sZW5ndGggPiBtYXgpIHtcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKVxuICAgICAgICAgICAgICAgIC5maW5kKCdsaTpndCgnICsgbWF4ICsgJyknKVxuICAgICAgICAgICAgICAgIC5oaWRlKClcbiAgICAgICAgICAgICAgICAuZW5kKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJzxsaSBjbGFzcz1cInNob3ctbW9yZVwiPndlaXRlcmUgT3B0aW9uZW4gYW56ZWlnZW48L2xpPicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5zaWJsaW5ncygnOmhpZGRlbicpLnNob3coKS5lbmQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL1Byb2R1Y3Qgb3RoZXIgUGF5bWVudHNcbiAgICBqUXVlcnkoJy5yZWd1bGFyLXByaWNlIC5wcmljZSwgLm13c3QtcHJpY2UnKS5oaWRlKCk7XG4gICAgalF1ZXJ5KCcucmVndWxhci1wcmljZSAucHJpY2UtbGFiZWwnKS50ZXh0KCdhbmRlcmUgWmFobGFydGVuIGFuemVpZ2VuID4+Jyk7XG4gICAgalF1ZXJ5KCcucmVndWxhci1wcmljZSAucHJpY2UtbGFiZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeXBhcmVudF9ib3ggPSBqUXVlcnkodGhpcykuY2xvc2VzdCgnLnByaWNlLWJveCcpO1xuICAgICAgICBqUXVlcnlwYXJlbnRfYm94LnNpYmxpbmdzKCkuZmluZCgnLnJlZ3VsYXItcHJpY2UgLnByaWNlLCAubXdzdC1wcmljZScpLmhpZGUoKTtcbiAgICAgICAgalF1ZXJ5cGFyZW50X2JveC5maW5kKCcucmVndWxhci1wcmljZSAucHJpY2UsIC5td3N0LXByaWNlJykudG9nZ2xlKCk7XG4gICAgfSk7XG5cbn0pO1xuIl19
