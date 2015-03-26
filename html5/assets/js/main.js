$(function () {
	$winWidth = $(window).width();
	$('.our-services-slider').bxSlider({
		controls : false
	});
	$('.our-creative-slider').bxSlider({
		minSlides: $winWidth > 479 ? 2 : 1 ,
		maxSlides: $winWidth > 479 ? 3 : 1 ,
		moveSlides: 1,
		slideWidth: 267,
		nextText : '&#xf105;',
		prevText : '&#xf104;',
		onSlideAfter: function(el) {
			if($winWidth > 767){
				$(el).parent().children().removeClass('active');
				$(el).next().addClass('active');
			}
			else{
				$(el).parent().children().removeClass('active');
				$(el).addClass('active');	
			}
		}
	});
	$('.project-carosel ul').bxSlider({
		minSlides: 1,
		maxSlides: 5,
		moveSlides: 1,
		slideWidth: 254,
		pager : false,
		nextText : '&#xf105;',
		prevText : '&#xf104;',
		onSlideAfter: function(el) {
			$(el).parent().children().removeClass('active');
			$(el).addClass('active');
			$(el).find('.show-project').trigger('click');
		}
	});
	$('.top-banner').parallax("50%", 0.1);
	function OpenProject() {
		$(this).parent().parent().children().removeClass('active');
		$(this).parent().addClass('active');

		var project = $(this.hash);
		project.parent().children().removeClass('active');
		project.addClass('active');
		return false;
	}
	function OpenAllProject() {
		var projects = $(this).closest('.project-slider-section').find('.project').addClass('active');
		return false;
	}
	$('.show-project').on('click',OpenProject);
	$('.project-slider-section .view-more').on('click', OpenAllProject);
})
$(function () {
	navHight = $(".header").height();
	$('.navbar-nav li a').on('click', function  () {
		$('html, body').stop(true, true).animate({scrollTop: $(this.hash).offset().top - navHight + 1}, 600);
		return false;
	});
		// body...
});
function GetActive () {
	var nav = $(".header");
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
    $('.navbar-nav li').removeClass('active').find('a[href="#'+currentSection+'"]').parent().addClass('active');
}
$(window).bind('scroll resize', GetActive);
$(function (){
	$("#commentForm").validate({
		 rules: {
			interest: {
				required: true
			}
		},
		messages : {
			interest: "Please select atleast one 'Services of Interest'"
		},
		errorPlacement: function(error, element) {
			if (element.attr("name") == "interest") {
				$('.checkbox-error').html(error)
			} else {
				error.insertAfter(element);
			}
		},
		 submitHandler: function(form) {
			$('.success-message').trigger('click');
			$('.reset-form').trigger('click');
		}
	});
});