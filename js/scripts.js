$(document).ready(function() {

    $(window).scroll( function(){
        $('.hideme').each( function(){
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
      $('.pageheader__nav').toggleClass('lt-690-show lt-690-hide', 200);
  	});
    setInterval(function(){
       // toggle the class every five seconds
        $('.employee__nav-indicator').each(function(){
          var classes = ['employee__nav-indicator employee__nav-indicator--previousactive','employee__nav-indicator employee__nav-indicator--nextactive','employee__nav-indicator employee__nav-indicator--active'];
          this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
        });
        $('.employee__list-item').each(function(){
          var classes = ['employee__list-item employee__list-item--previousactive hideme','employee__list-item employee__list-item--nextactive hideme','employee__list-item employee__list-item--active hideme'];
          this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
        });
    }, 5000);
});
