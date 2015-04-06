function extendMenu() {
	$('body').toggleClass('sidebar-show');
	return false;
}
function dismissPanel() {
	var $this = $(this);
	$this.closest('.panel').slideUp();
	return false;
}
$.fn.SMenu = function(options){
	if(this.length == 0) return this;
	// support mutltiple elements
	if(this.length > 1){
		this.each(function(){$(this).SMenu(options)});
		return this;
	}
	var el = this;
	superLink = el.find('a');
	superLink.each(function () {
		$(this).click(function () {
			link = $(this);
			if(link.parent().hasClass('active')){
				link.parent().removeClass('active').find('ul').slideUp();
			}
			else{
				link.parent().parent().children().removeClass('active');
				link.parent().parent().children().find('ul').slideUp();
				link.parent().addClass('active')
				link.next('ul').slideDown();
			}
		})
	})
	return this;
}
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	$('.extend-sidebar').click(extendMenu);
	$('[data-dismiss="panel"]').click(dismissPanel);
	$('.sidebar-menu').SMenu();
	$('.theme-selector > a').click(function () {
		$(this).parent().toggleClass('show')
	});
	$('.theme-selector li a').click(function () {
		newClass = $(this).data('class');
		oldClass = "theme-yellow theme-red theme-purple theme-green theme-blue";
		$('body').removeClass(oldClass);
		$('body').addClass(newClass);
		return false;
	});
});
$(function () {
	$('#world-map-markers').vectorMap();
});



$(function () {
	/* SPARKLINE CHARTS
   * ----------------
   * Create a inline charts with spark line
   */

  //-----------------
  //- SPARKLINE BAR -
  //-----------------
  $('.sparkbar').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type: 'bar',
      height: $this.data('height') ? $this.data('height') : '30',
      barColor: $this.data('color')
    });
  });

})


/* for fixed-layout page only */
$(document).ready(function () {
	var hh = $('.header').outerHeight(true); // header height
	var fh = $('.footer').outerHeight(true); // footer height
	$(window).bind('resize load scroll', function () {
		var wh = $(window).height();	// window height

		$('.fixed-layout .main-content').height(wh - (hh + fh));
		
	})
})
$(document).ready(function () {
	$('.slimscroll').slimScroll();
})