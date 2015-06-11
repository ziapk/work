$(document).ready(function () {
	$('.activeMenu').on('click', function () {
		var element = $(this).children('.menutext');
		var html = $(this).parent().find('.active').children().html();
		$(this).parent().find('ul').slideDown();
		$(this).parent().find('a').click(function () {
			$(this).parent().parent().children().removeClass('active');
			$(this).parent().addClass('active');
			element.html($(this).html());
			$(this).parent().parent().slideUp();
			return false;
		})
		//alert($(this).parnet().find($('.active').html()));
		//alert($(this).parent().find('.active').children().html());
	})
	$('.scrollup').on('click', function () {
		$("html, body").animate({ scrollTop: "0" });
		return false;
	})
})