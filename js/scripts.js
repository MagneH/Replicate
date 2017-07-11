$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500);
            }
        });
        $('.fadeinlist').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).delay(i * 300).animate({'opacity':'1'},1500);
            }
        });
    });
  	$('.hamburger').click(function(){
  		$(this).toggleClass('open');
  	});
});
