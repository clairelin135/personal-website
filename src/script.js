$(document).ready( function () {
	var clicked = false;

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

	$(".button").hover(
		function() {
			$(this).animate({
				opacity: "0.8",
			}, 300);
		},
		function() {
			$(this).animate({
				opacity: "1",
			}, 300);
		}
	);

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
