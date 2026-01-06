(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    });

    // lightcase 
    $('a[data-rel^=lightcase]').lightcase();

    $(document).ready(function () {

        /*==== header Section Start here =====*/
        $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
        // drop down menu width overflow problem fix
        $('ul').parent('li').on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
            }
        });
        $('.menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        })
        $('.ellepsis-bar').on('click', function (e) {
            var element = $('.header-top');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.slideUp(300, "swing");
                $('.overlayTwo').removeClass('active');
            } else {
                element.addClass('open');
                element.slideDown(300, "swing");
                $('.overlayTwo').addClass('active');
            }
        });
        $('.header-bar').on('click', function () {
            $(this).toggleClass('active');
            $('.menu').toggleClass('active');
        })

        //Header
        var fixed_top = $("header");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                fixed_top.addClass("header-fixed fadeInUp");
            } else {
                fixed_top.removeClass("header-fixed fadeInUp");
            }
        });

        /*==== header Section End here =====*/

        // scroll up start here
        $(function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 300) {
                    $('.scrollToTop').css({
                        'bottom': '5%',
                        'opacity': '1',
                        'transition': 'all .5s ease'
                    });
                } else {
                    $('.scrollToTop').css({
                        'bottom': '-30%',
                        'opacity': '0',
                        'transition': 'all .5s ease'
                    })
                }
            });

            //Click event to scroll to top
            $('a.scrollToTop').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        });

        // wow animation
        // new WOW().init();

        /*==== Contact Form Enhancement =====*/
                        // Contact form validation and AJAX submission
        $('#contact-form').on('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            var isValid = true;
            var $form = $(this);
            
            // Clear previous error states and alerts
            $form.find('.form-group').removeClass('has-error');
            $form.find('.error-message').remove();
            $form.find('.alert').remove();
            
            // Validate required fields
            $form.find('[required]').each(function() {
                var $field = $(this);
                var value = $field.val().trim();
                
                if (!value) {
                    isValid = false;
                    $field.closest('.form-group').addClass('has-error');
                    $field.after('<small class="error-message" style="color: #ff6b6b; display: block; margin-top: 5px;">This field is required</small>');
                }
            });
            
            // Validate email format
            var email = $form.find('#email').val().trim();
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email)) {
                isValid = false;
                $form.find('#email').closest('.form-group').addClass('has-error');
                $form.find('#email').after('<small class="error-message" style="color: #ff6b6b; display: block; margin-top: 5px;">Please enter a valid email address</small>');
            }
            
            if (!isValid) {
                // Scroll to first error
                $('html, body').animate({
                    scrollTop: $form.find('.has-error').first().offset().top - 350
                }, 500);
                return false;
            }
            
            // Show loading state
            var $submitBtn = $form.find('button[type="submit"]');
            var originalText = $submitBtn.find('span').text();
            $submitBtn.prop('disabled', true).find('span').text('Sending Email...');
            
            // Prepare form data
            var formData = {
                name: $form.find('#name').val().trim(),
                email: email,
                phone: $form.find('#phone').val().trim(),
                subject: $form.find('#subject').val().trim(),
                message: $form.find('#message').val().trim()
            };
            
            // Send AJAX request
            $.ajax({
                url: '/contact',
                method: 'POST',
                data: formData,
                success: function(response) {
                    // Show success message
                    var alertHtml = '<div class="alert alert-success alert-dismissible fade show" role="alert" style="margin-bottom: 20px; background: rgba(40, 167, 69, 0.8); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 4px; color: white; padding: 15px 20px; box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);">' +
                        '<i class="icofont-check-circled"></i> ' +
                        'Thank you! Your message has been sent successfully. We will get back to you soon.' +
                        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="color: white; opacity: 0.8;"></button>' +
                        '</div>';
                    
                    $form.before(alertHtml);
                    
                    // Reset form
                    $form[0].reset();
                    
                    // Scroll to show success message
                    $('html, body').animate({
                        scrollTop: $form.offset().top - 350
                    }, 500);
                    
                    // Auto-hide alert after 8 seconds
                    setTimeout(function() {
                        $form.prev('.alert').fadeOut(1000);
                    }, 8000);
                },
                error: function(xhr, status, error) {
                    // Show error message
                    var errorMsg = 'Sorry, something went wrong. Please try again later.';
                    if (xhr.responseJSON && xhr.responseJSON.error) {
                        errorMsg = xhr.responseJSON.error;
                    }
                    
                    var alertHtml = '<div class="alert alert-danger alert-dismissible fade show" role="alert" style="margin-bottom: 20px; background: rgba(255, 107, 107, 0.8); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 4px; color: white; padding: 15px 20px; box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);">' +
                        '<i class="icofont-exclamation-circle"></i> ' +
                        errorMsg +
                        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="color: white; opacity: 0.8;"></button>' +
                        '</div>';
                    
                    $form.before(alertHtml);
                    
                    // Scroll to show error message
                    $('html, body').animate({
                        scrollTop: $form.offset().top - 350
                    }, 500);
                    
                    // Auto-hide alert after 8 seconds
                    setTimeout(function() {
                        $form.prev('.alert').fadeOut(1000);
                    }, 8000);
                },
                complete: function() {
                    // Re-enable button
                    $submitBtn.prop('disabled', false).find('span').text(originalText);
                }
            });
        });
        

        


        /*==== Agents Form Enhancement =====*/
        // Agents form validation and AJAX submission
        $('#agents-form').on('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            var isValid = true;
            var $form = $(this);
            
            // Clear previous error states and alerts
            $form.find('.form-group').removeClass('has-error');
            $form.find('.error-message').remove();
            $form.find('.alert').remove();
            
            // Validate required fields
            $form.find('[required]').each(function() {
                var $field = $(this);
                var value = $field.val().trim();
                
                if (!value) {
                    isValid = false;
                    $field.closest('.form-group').addClass('has-error');
                    $field.after('<small class="error-message" style="color: #ff6b6b; display: block; margin-top: 5px;">This field is required</small>');
                }
            });
            
            // Validate email format
            var email = $form.find('#email').val().trim();
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email)) {
                isValid = false;
                $form.find('#email').closest('.form-group').addClass('has-error');
                $form.find('#email').after('<small class="error-message" style="color: #ff6b6b; display: block; margin-top: 5px;">Please enter a valid email address</small>');
            }
            
            if (!isValid) {
                // Scroll to first error
                $('html, body').animate({
                    scrollTop: $form.find('.has-error').first().offset().top - 350
                }, 500);
                return false;
            }
            
            // Show loading state
            var $submitBtn = $form.find('button[type="submit"]');
            var originalText = $submitBtn.find('span').text();
            $submitBtn.prop('disabled', true).find('span').text('Sending Application...');
            
            // Prepare form data
            var formData = {
                name: $form.find('#name').val().trim(),
                email: email,
                phone: $form.find('#phone').val().trim(),
                messenger: $form.find('#messenger').val().trim(),
                message: $form.find('#message').val().trim()
            };
            
            // Send AJAX request
            $.ajax({
                url: '/agents',
                method: 'POST',
                data: formData,
                success: function(response) {
                    // Show success message
                    var alertHtml = '<div class="alert alert-success alert-dismissible fade show" role="alert" style="margin-bottom: 20px; background: rgba(40, 167, 69, 0.8); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 4px; color: white; padding: 15px 20px; box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);">' +
                        '<i class="icofont-check-circled"></i> ' +
                        'Application submitted successfully. Our sales team will contact you shortly.' +
                        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="color: white; opacity: 0.8;"></button>' +
                        '</div>';
                    
                    $form.before(alertHtml);
                    
                    // Reset form
                    $form[0].reset();
                    
                    // Scroll to show success message
                    $('html, body').animate({
                        scrollTop: $form.offset().top - 350
                    }, 500);
                    
                    // Auto-hide alert after 8 seconds
                    setTimeout(function() {
                        $form.prev('.alert').fadeOut(1000);
                    }, 8000);
                },
                error: function(xhr, status, error) {
                    // Show error message
                    var errorMsg = 'Sorry, something went wrong. Please try again later.';
                    if (xhr.responseJSON && xhr.responseJSON.error) {
                        errorMsg = xhr.responseJSON.error;
                    }
                    
                    var alertHtml = '<div class="alert alert-danger alert-dismissible fade show" role="alert" style="margin-bottom: 20px;">' +
                        '<i class="icofont-exclamation-circle"></i>' +
                        errorMsg +
                        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                        '</div>';
                    
                    $form.before(alertHtml);
                    
                    // Scroll to show error message
                    $('html, body').animate({
                        scrollTop: $form.offset().top - 350
                    }, 500);
                    
                    // Auto-hide alert after 8 seconds
                    setTimeout(function() {
                        $form.prev('.alert').fadeOut(1000);
                    }, 8000);
                },
                complete: function() {
                    // Re-enable button
                    $submitBtn.prop('disabled', false).find('span').text(originalText);
                }
            });
        });



        //====Player slider================
        var swiper = new Swiper(".player-slider", {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                575: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },

                767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1439: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
        });


        //====testimonial carousel================
        var testimonialSwiper = new Swiper(".testimonial-swiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.testimonial-next',
                prevEl: '.testimonial-prev',
            },
        });

        //====Video Mute/Unmute Toggle================
        $(document).ready(function() {
            const video = document.getElementById('banner-video');
            const muteToggle = document.getElementById('mute-toggle');
            const muteIcon = document.getElementById('mute-icon');
            
            if (video && muteToggle && muteIcon) {
                // Video starts muted by default
                video.muted = true;
                
                // Video sources array
                const videoSources = [
                    '/images/banner/video.mp4',
                    '/images/banner/video-gv.mp4'
                ];
                let currentVideoIndex = 0;
                
                // Function to switch to next video
                function switchToNextVideo() {
                    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
                    video.src = videoSources[currentVideoIndex];
                    video.load();
                    video.play();
                    video.setAttribute('data-current-video', currentVideoIndex);
                }
                
                // Listen for video end event to switch to next video
                video.addEventListener('ended', function() {
                    switchToNextVideo();
                });
                
                // Mute toggle functionality
                muteToggle.addEventListener('click', function() {
                    if (video.muted) {
                        // Unmute video
                        video.muted = false;
                        muteIcon.className = 'icofont-volume-up';
                        muteToggle.classList.add('unmuted');
                        muteToggle.setAttribute('aria-label', 'Mute video');
                    } else {
                        // Mute video
                        video.muted = true;
                        muteIcon.className = 'icofont-volume-mute';
                        muteToggle.classList.remove('unmuted');
                        muteToggle.setAttribute('aria-label', 'Unmute video');
                    }
                });
            }
        });

        $(window).on('load',function() {
            // collection isotope js
            // init Isotope
            var $grid = $('.collection-grid').isotope({
                itemSelector: '.gameListItem',
                layoutMode: 'fitRows',
            });
            
            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
                },
            };
            
            // bind filter button click
            $('.collection-filter-button-group').on( 'click', 'li', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[ filterValue ] || filterValue;
                $grid.isotope({ filter: filterValue });
            });
            
            
            // change is-checked class on buttons
            $('.collection-filter-button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'li', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
                });
            });
        });

        $(window).on('load',function() {
            // match isotope js
            // init Isotope
            var $grid = $('.match-grid').isotope({
                itemSelector: '.matchlistitem',
                layoutMode: 'fitRows',
            });
            
            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
                },
            };
            
            // bind filter button click
            $('.match-filter-button-group').on( 'click', 'li', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[ filterValue ] || filterValue;
                $grid.isotope({ filter: filterValue });
            });
            
            
            // change is-checked class on buttons
            $('.match-filter-button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'li', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
                });
            });
        });

        // accordion start here
        $('.accordion-item .active').slideDown();
        $('.accordion-list').click(function (e){
            if($(this).next('.accordion-answer').css('display') != 'block'){
                $('.accordion-item .active').slideUp(500).removeClass('active');
                $('.accordion-list').removeClass('in');
                $(this).next('.accordion-answer').addClass('active').slideDown(500);
                $(this).addClass('in');
            }else{
                $('.accordion-item .active').slideUp(500).removeClass('active');
                $(this).removeClass('in');
            }
        });


        // Gallery Masonary
        $(window).on('load',function() {
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.col-12',
                // layoutMode: 'fitRows',
                masonry: {
                    columnWidth: 0,
                }
            });
            var $grid = $('.grid').isotope({
                // options
                transitionDuration: '1s'
            });
            
            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
                },
            };
            
            // bind filter button click
            $('.game__filter').on( 'click', 'li', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[ filterValue ] || filterValue;
                $grid.isotope({ filter: filterValue });
            });
            
            
            // change is-checked class on buttons
            $('.game__filter').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'li', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
                });
            });
        });


        // post thumb slider
        var swiper = new Swiper('.post-thumb-container', {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.thumb-next',
                prevEl: '.thumb-prev',
            },
            loop: true,
        });


        // post thumb slider
        var swiper = new Swiper('.banner__slider', {
            slidesPerView: 1,
            // autoplay: {
            //     delay: 8000,
            //     disableOnInteraction: false,
            // },
            loop: true,
        });


        // shop cart + - start here
        var CartPlusMinus = $('.cart-plus-minus');
        $(".qtybutton").on("click", function() {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });


        // shop sidebar menu
        
        $(".shop-menu>li>ul").parent("li").addClass("catmenu-item-has-children");
        $('.shop-menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        })

        // product view mode change js
        $(function() {
            $('.product-view-mode').on('click', 'a', function (e) {
                e.preventDefault();
                var shopProductWrap = $('.shop-product-wrap');
                var viewMode = $(this).data('target');
                $('.product-view-mode a').removeClass('active');
                $(this).addClass('active');
                shopProductWrap.removeClass('grid list').addClass(viewMode);
            });
        });

        // model option start here
        $(function() {
            $('.view-modal').on('click', function () {
                $('.modal').addClass('show');
            });
            $('.close').on('click', function () {
                $('.modal').removeClass('show');
            });
        });
        // product single thumb slider
        $(function() {
            var galleryThumbs = new Swiper('.pro-single-thumbs', {
                spaceBetween: 10,
                slidesPerView: 3,
                loop: true,
                freeMode: true,
                loopedSlides: 1,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                navigation: {
                nextEl: '.pro-single-next',
                prevEl: '.pro-single-prev',
                },
            });
            var galleryTop = new Swiper('.pro-single-top', {
                spaceBetween: 10,
                loop:true,
                loopedSlides: 1,
                thumbs: {
                    swiper: galleryThumbs,
                },
            });
        });
        
        //Review Tabs
        $('ul.review-nav').on('click', 'li', function (e) {
            e.preventDefault();
            var reviewContent = $('.review-content');
            var viewRev = $(this).data('target');
            $('ul.review-nav li').removeClass('active');
            $(this).addClass('active');
            reviewContent.removeClass('review-content-show description-show').addClass(viewRev);
        });
    });




    // 
    //Countdown js initialization
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "complete") {
            var clockdiv = document.getElementsByClassName("count-down");
            var countDownDate = new Array();
            for (var i = 0; i < clockdiv.length; i++) {
                countDownDate[i] = new Array();
                countDownDate[i]['el'] = clockdiv[i];
                countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
                countDownDate[i]['days'] = 0;
                countDownDate[i]['hours'] = 0;
                countDownDate[i]['seconds'] = 0;
                countDownDate[i]['minutes'] = 0;
            }
            var countdownfunction = setInterval(function () {
                for (var i = 0; i < countDownDate.length; i++) {
                    var now = new Date().getTime();
                    var distance = countDownDate[i]['time'] - now;
                    countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
                    countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);
                    if (distance < 0) {
                        countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
                    } else {
                        countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
                        countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
                        countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
                        countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
                    }
                }
            }, 1000);
        }
    });

            //Odometer
        $(".counter__right ul li").each(function () {
            $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                var el = document.querySelectorAll('.odometer')[i];
                el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
            });
        });


}(jQuery));