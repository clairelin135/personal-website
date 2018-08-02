$(document).ready( function () {
	
	function navstarthover(hoverbar) {
		var elem = $("#"+hoverbar);
		elem.animate({opacity: 1}, 300);
	}
	
	function navendhover(hoverbar) {
		var elem = $("#"+hoverbar);
		elem.animate({opacity: 0}, 300);
	}
	
	$("#applytext").hover(
		function() {
			navstarthover("apply-bar");
		},
		function() {
			navendhover("apply-bar");
		}
	);

	$("#prequalifytext").hover(
		function() {
			navstarthover("pre-qualify-bar");
		},
		function() {
			navendhover("pre-qualify-bar");
		}
	);

	$(".button").hover(
		function() {
			$(this).animate({
					marginTop: "-=10px"
				},
				200
			);
		},
		function() {
			$(this).animate({
					marginTop: "+=10px"
				},
				200
			);
		}
	);
});
