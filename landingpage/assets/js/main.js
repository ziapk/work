$(document).ready(function () {
var nav = $('.navbar');
var LocsA = [
    {
        lat: 51.1718798,
        lon: 0.8691323,
        zoom : 17,
        title: 'Title A1',
        html: '<h4>Web Fitness Pro Ltd</h4><p>Web Fitness Pro Ltd,<br> RIFT House,<br> 200 Eureka Park,<br> Upper Pemberton,<br> Ashford,<br> Kent. TN25 4AZ</p>',
        icon: 'assets/images/marker.png',
        animation: google.maps.Animation.DROP
    },
];

	new Maplace({
	    locations: LocsA,
	    map_div: '#gmap',
        controls_on_map: false
	}).Load(); 

    function GetActive () {
        var nav = $(".navbar");
        var currentSection = null;
        $('[data-target]').each(function(){
            var element = $(this).attr('id');   
            if ($('#'+element).is('*')){
                if($(window).scrollTop() >= $('#'+element).offset().top - nav.height())
                {
                    currentSection = element;
                }
            }
        });
        $('.main-nav li').removeClass('active').find('a[href="#'+currentSection+'"]').parent().addClass('active');
        if($(window).scrollTop() >=  ($('#appform').offset().top) + $('#appform').height())
        {
            $('.btn-fixed').css('display', 'inline-block');
        }
        else{
            $('.btn-fixed').css('display', 'none');   
        }
    }

    $(window).bind('scroll resize', GetActive);



    navHight = nav.height();
    $('.main-nav li a,.scroll-to').on('click', function  () {
        $('html, body').stop(true, true).animate({scrollTop: $(this.hash).offset().top - navHight + 1}, 600);
        return false;
    });
    nav.stick_in_parent();    

    $('.bxslider').bxSlider({
        pager : false,
        nextText : '&#xf0da;',
        prevText : '&#xf0d9;'
    });
    $("#appform").validate();
    $("#newsletter").validate();
    $("#contact").validate();
})