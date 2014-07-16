function cycleImages(){
      var $active = $('.head-landing-image2 .active');
      var $next = ($('.head-landing-image2 .active').next().length > 0) ? $('.head-landing-image2 .active').next() : $('.head-landing-image2 div:first');
      $next.css('z-index',2);//move the next image up the pile
	  $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
      $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

    $(window).load(function(){
		$('.head-landing-image2').fadeIn(1500);//fade the background back in once all the images are loaded
		  // run every 7s
		  setInterval('cycleImages()', 7000);
    });