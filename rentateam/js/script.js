$(function() {
	
	// slider
	$('.bxslider').bxSlider({
		pager: false
	});
	
	
	// navigation fixed on scroll
	$(document).ready(function(){
		$("#header-wrap").data("top", $("#header-wrap").offset().top); // set original position on load
		$(window).scroll(fixDiv);
	});
	function fixDiv() {
		var $div = $("#header-wrap");
		if ($(window).scrollTop() > $div.data("top")) { 
			$('#header-wrap').addClass('fixed')
		}
		else {
			$('#header-wrap').removeClass('fixed')
		}
	}
	
	
	$(function() {
		// navigation scroll on click
		
		if ($(window).width() < 767) {
			$("#nav a").click (function () {
				var navHieght = $("#header").height();
				$("#nav li").removeClass('active');
				$(this).parent().addClass('active');
				
				$('html, body').animate({
					scrollTop: $(this.hash).offset().top
				}, 1000);
				return false;
			});
		}
		else{
			$("#nav a").click (function () {
				var navHieght = $("#header").height();
				$("#nav li").removeClass('active');
				$(this).parent().addClass('active');
				
				$('html, body').animate({
					scrollTop: $(this.hash).offset().top - navHieght
				}, 1000);
				return false;
			});
		}
		
		
		// navigation active on scroll
		nav = $("#header");
		$(window).bind('scroll resize', function() {
		 $winWidth = $(window).width()
			 var currentSection = null;
			 $('.common-section').each(function(){
				 var element = $(this).attr('id'); 
				 if ($('#'+element).is('*')){
					 if($(window).scrollTop() >= $('#'+element).offset().top - nav.height() - 50)
					 {
						 currentSection = element;
					 }
				 }
			 });
			 $('.navbar-nav li').removeClass('active').find('a[href="#'+currentSection+'"]').parent().addClass('active');
		});
		
		
		
		
		// scroll item
		$(".scroll-item").click (function () {
			var navHieght2 = $("#header").height();
			$('html, body').animate({
				scrollTop: $(this.hash).offset().top - navHieght2
			}, 1000);
			return false;
		});
		
		
	});
		   
});