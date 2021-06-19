
$(window).on("load", function() {
    /*---------------- Preloader -----------------*/
    $(".preloader").fadeOut("slow");
});


$(document).ready(function() {
    /*---------------- Navbar Shrink -----------------*/
    $(window).on("scroll", function() {
        if($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });

    /*---------------- Video Popup -----------------*/ 
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup-close").on("click", function() {
        if($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $(".#player-1").attr("src", "");
        }
        else {
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")=='') {
                $("#player-1").attr("src",videoSrc)
            }
        }
    });

    /*---------------- Features Carousel -----------------*/ 
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*---------------- App Screenshots Carousel -----------------*/ 
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });

    /*---------------- Testimonials Carousel -----------------*/ 
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*---------------- Team Member Carousel -----------------*/ 
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*---------------- Page Scroll - ScroolIT -----------------*/
    $.scrollIt( {
        topOffset: -50
    });

    /*---------------- Navbar Hide -----------------*/
    $(".nav-link").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });

    /*---------------- Toggle Theme Mode Dark and Light -----------------*/
    function toggleTheme() {
        if(localStorage.getItem("randy-theme") !== null) {
            if(localStorage.getItem("randy-theme") === "dark") {
                $("body").addClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();

    $(".toggle-theme").on("click", function() {
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")) {
            localStorage.setItem("randy-theme", "dark");
        }
        else {
            localStorage.setItem("randy-theme", "light");
        }
        updateIcon();
    });

    function updateIcon() {
        if($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }

}); 