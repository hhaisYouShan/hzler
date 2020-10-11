(function($) {
    "use strict";

    // Windows load

    $(window).on("load", function() {
        console.log("123");

        // Site loader

        // $(".loader-inner").fadeOut();
        // $(".loader").delay(200).fadeOut("slow");

    });



// var height=document.body.offsetHeight;





    // Site navigation setup

    var header = $('.header'),
        pos = header.offset(),
        blockTop = $('.block-top');

   

    //Hero resize

    var mainHero = $(" .hero .main-slider .slides li");
    function mainHeroResize() {
        mainHero.css('height', $(window).height());
    }

    $(function() {
            mainHeroResize()
        }),
        $(window).resize(function() {
            mainHeroResize()
        });



    

    




    // Mobile menu

    var mobileBtn = $('.mobile-but');
    var nav = $('.main-nav ul.main-menu');
    var navHeight = nav.height();

    $(mobileBtn).on("click", function() {
        $(".toggle-mobile-but").toggleClass("active");
        nav.slideToggle();
        $('.main-nav li a').addClass('mobile');
        return false;


    });

    $("#showCornerImg a").on("click", function () {
        $(".backColor").show();

        $("#showNewImg").css('display','block');
        // console.log($(this).children().attr('src'));

        $("#showNewImg img").attr("src",$(this).children().attr('src'));

    });

    $(document).mouseup(function(e){
        var _con = $('#showCornerImg ');   // 设置目标区域
        if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
            $("#showNewImg").css('display','none');
            $(".backColor").hide();
            // some code...   // 功能代码
        }
    });



   


    // Append images as css background

    $('.background-img').each(function() {
        var path = $(this).children('img').attr('src');
        $(this).css('background-image', 'url("' + path + '")').css('background-position', 'initial');
    });

   




})(jQuery);
