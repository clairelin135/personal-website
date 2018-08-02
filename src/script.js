$(document).ready( function () {
	var clicked = false;
	sizeBannerBackground();
	createGalleryIcons();

	$('.gallery-image').first().css("opacity", "1");
	$('.gallery-buttons').first().css("opacity", "1");

	$(".navbar-option").hover(
		function() {
			$(this).animate({
				backgroundColor: "rgba(89, 102, 230, 1)",
				color: "#ffffff"
			}, 300);
		},
		function() {
			$(this).animate({
				backgroundColor: "rgba(255, 255, 255, 0.0)",
				color: "#000000"
			}, 300);
		}
	);

	$(".link-image").hover(
		function() {
			$(this).animate({
				opacity: "1",
			}, 300);
		},
		function() {
			$(this).animate({
				opacity: "0.7",
			}, 300);
		}
	);

	$(".button-blue").hover(
		function() {
			$(this).animate({
				backgroundColor: "#33a1fe",
			}, 300);
		},
		function() {
			$(this).animate({
				backgroundColor: "#008aff",
			}, 300);
		}
	);
	$(".button-orange").hover(
		function() {
			$(this).animate({
				backgroundColor: "#fad45e",
			}, 300);
		},
		function() {
			$(this).animate({
				backgroundColor: "#f8c424",
			}, 300);
		}
	);

	$(".gallery-buttons").hover(
		function() {
			$(this).animate({
				opacity: "1",
			}, 300);
		},
		function() {
			if($(this).hasClass("selected-gallery-button")) {

			} else {
				$(this).animate({
					opacity: "0.5",
				}, 300);
			};
		}
	);

	$(".gallery-control").hover(
		function() {
			$(this).animate({
				opacity: "0.5",
			}, 300);
		},
		function() {
			$(this).animate({
				opacity: "1",
			}, 300);
		}
	);

	$( ".gallery-buttons" ).click(function() {
		var $gallerybuttons = $('.gallery-buttons');
		var index = jQuery.inArray(this, $gallerybuttons);

		var $galleryimage = $('.gallery-image');
		for(var i = 0; i < $galleryimage.length; i++) {
			if($galleryimage.eq(i).css("opacity")=='1') {
				$galleryimage.eq(i).animate({
					opacity: "0",
				}, 300);
				$gallerybuttons.eq(i).animate({
					opacity: "0.5",
				}, 300);
				$gallerybuttons.eq(i).removeClass('selected-gallery-button');
			}
		}
		$galleryimage.eq(index).animate({
			opacity: "1",
		}, 300);
		$gallerybuttons.eq(index).animate({
			opacity: "1",
		}, 300);
		$gallerybuttons.eq(index).addClass('selected-gallery-button');
	});

	$( ".gallery-control" ).click(function() {
		var $gallerycontrol = $('.gallery-control');
		var control = jQuery.inArray(this, $gallerycontrol);

		var index = 0;
		var $galleryimage = $('.gallery-image');
		var $gallerybuttons = $('.gallery-buttons');

		for(var i = 0; i < $galleryimage.length; i++) {
			if($galleryimage.eq(i).css("opacity")=='1') {
				index = i;
				$galleryimage.eq(i).animate({
					opacity: "0",
				}, 300);
				$gallerybuttons.eq(i).removeClass('selected-gallery-button');
				$gallerybuttons.eq(i).animate({
					opacity: "0.5",
				}, 300);
			}
		}

		if(control == 0) {
			//BACK
			index = index - 1;
			if(index < 0) {
				index = $galleryimage.length - 1;
			}
			$galleryimage.eq(index).animate({
				opacity: "1",
			}, 300);
			$gallerybuttons.eq(index).addClass('selected-gallery-button');
			$gallerybuttons.eq(index).animate({
				opacity: "1",
			}, 300);
		} else {
			//FORWARD
			index = index + 1;
			if(index >= $galleryimage.length) {
				index = 0;
			}
			$galleryimage.eq(index).animate({
				opacity: "1",
			}, 300);
			$gallerybuttons.eq(index).addClass('selected-gallery-button');
			$gallerybuttons.eq(index).animate({
				opacity: "1",
			}, 300);
		}
	});

	$(document).on('scroll', function() {
		$(".selected-navbar-option").removeClass("selected-navbar-option");
		var scrollBottom = $(window).scrollTop() + $(window).height();
	    if(scrollBottom>=$('#experience').position().top){
    		if(scrollBottom>=$('#projects').position().top){
    			if(scrollBottom>=$('#design').position().top){
						$(".navbar-option").eq(3).addClass("selected-navbar-option");
    			} else {
    				// projects
						$(".navbar-option").eq(2).addClass("selected-navbar-option");
    			}
    		} else {
    			// experience
					$(".navbar-option").eq(1).addClass("selected-navbar-option");
				};
	    } else {
				$(".navbar-option").eq(0).addClass("selected-navbar-option");
	    }
	})
	if ( $(window).width() < 763) {
		switchToMenu();
	};
});

function switchToMenu() {
	$(".navbar-option").css("display", "none");
	var clicked = false;
	$("#menu").hover(
		function() {
			$(this).animate({
				opacity: "1",
			}, 300);
		},
		function() {
			$(this).animate({
				opacity: "0.8",
			}, 300);
		}
	);
	$("#menu").click(function() {
		if(clicked == false) {
			$(".navbar-option").css("display", "block");
			clicked = true;
		} else {
			$(".navbar-option").css("display", "none");
			clicked = false;
		}
	});
}

function sizeBannerBackground() {
	var back = $('.background-image-wrapper');
	var top = $('#front-banner').height()-(back.width()/2);
	var image = $('#banner-image-background');
	image.css('margin-top', top);
	var front = $('#banner-image-front');
	front.css('margin-top', top);
}

function createGalleryIcons() {
	$("#gallery-nav").append('<img src="https://i.imgur.com/31sAs1C.png" class="gallery-control"><img src="https://i.imgur.com/avXRzyu.png" class="gallery-buttons selected-gallery-button">');
	var numItems = $('.gallery-image').length;
	numItems = numItems - 1;
	for (i = 0; i < numItems; i++) {
		$("#gallery-nav").append('<img src="https://i.imgur.com/avXRzyu.png" class="gallery-buttons">');
	}
	$("#gallery-nav").append('<img src="https://i.imgur.com/cez68ik.png" class="gallery-control">');
}
