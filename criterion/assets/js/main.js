$(document).ready(function () {
	var top = $('.main-nav-area').offset().top;
	var height = $('.main-nav-area').height();
	$(window).scroll(function (argument) {
		if ($(this).scrollTop() > top) {
          $('body').addClass('nav-fixed');
          $('body').css('padding-top', height);
	      } else {
	          $('body').removeClass('nav-fixed');
	          $('body').css('padding-top', 0);
	      }
	});
	$('.scrollTo').on('click',function (e) {
		    e.preventDefault();
		    var target = this.hash;
		    var $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    });
	})
	$('.navbar-toggle').on('click', function () {
		$('.main-nav').slideToggle('fast');
	})
})