$(function() {

    /* Fixed header */
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", function(){
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    });



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementOffset);
        nav.removeClass("show");

        $("HTML, body").animate({
            scrollTop: elementOffset - 65
        }, 700);

    });


    /*burger menu || navToggle*/
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });




});
