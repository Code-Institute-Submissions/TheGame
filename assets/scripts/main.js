$(document).ready(function () {


	$(".toRed").on("click", function () {
		$(this).toggleClass("red selected")

		if (($("#toRed1").hasClass("red")) && ($("#toRed2").hasClass("red"))) {

			$(".red").addClass("unwiped")
			$(".red").delay(800).addClass("wiped")
			setTimeout(function () {
				$(".red").addClass("disabled")
			}, 300);
		};
		return toCheck();
	});


	$(".toBlue").on("click", function () {

		$(this).toggleClass("blue selected")

		if (($("#toBlue1").hasClass("blue")) && ($("#toBlue2").hasClass("blue"))) {

			$(".blue").addClass("unwiped")
			$(".blue").delay(800).addClass("wiped")
			setTimeout(function () {
				$(".blue").addClass("disabled")
			}, 300);
		};
		return toCheck();
	});

	$(".toGreen").on("click", function () {

		$(this).toggleClass("green selected")

		if (($("#toGreen1").hasClass("green")) && ($("#toGreen2").hasClass("green"))) {

			$(".green").addClass("unwiped")
			$(".green").delay(800).addClass("wiped")
			setTimeout(function () {
				$(".green").addClass("disabled")
			}, 300);
		};

		return toCheck();
	});


	$(".toOrange").on("click", function () {
		$(this).toggleClass("orange selected")

		if (($("#toOrange1").hasClass("orange")) && ($("#toOrange2").hasClass("orange"))) {

			$(".orange").addClass("unwiped")
			$(".orange").delay(800).addClass("wiped")
			setTimeout(function () {
				$(".orange").addClass("disabled")
			}, 500);
		};
		return toCheck();
	});

	$(".toZonk").on("click", function () {
		$(this).toggleClass("zonk").text("nothing's here")
		$(this).delay(4000).addClass("unwiped").delay(1000)
		$(this).delay(1000).addClass("wiped")
		setTimeout(function () {
			$(".zonk").addClass("disabled")
		}, 500);

		return toCheck();
	});


	$(".toWhite").on("click", function () {
		$(this).toggleClass("white selected").text(" ")

		if (($("#toWhite1").hasClass("white")) && ($("#toWhite2").hasClass("white"))) {

			$(".white").addClass("unwiped")
			$(".white").delay(800).addClass("wiped")
		};
		return toCheck();

	});

	$(".toYellow").on("click", function () {
		$(this).toggleClass("yellow selected").text(" ")

		if (($("#toYellow1").hasClass("yellow")) && ($("#toYellow2").hasClass("yellow"))) {

			$(".yellow").addClass("unwiped")
			$(".yellow").delay(800).addClass("wiped")
		};
		return toCheck();
	});


	$(".toGrey").on("click", function () {
		$(this).toggleClass("grey selected").text(" ")

		if (($("#toGrey1").hasClass("grey")) && ($("#toGrey2").hasClass("grey"))) {

			$(".grey").addClass("unwiped")
			$(".grey").delay(800).addClass("wiped").addClass("disabled")
		};

		return toCheck();

	});

	$(".toDark").on("click", function () {
		$(this).toggleClass("dark selected").text(" ")

		if (($("#toDark1").hasClass("dark")) && ($("#toDark2").hasClass("dark"))) {

			$(".dark").addClass("unwiped")
			$(".dark").delay(800).addClass("wiped")
		};
		return toCheck();
	});


	$(".toBlack").on("click", function () {
		$(this).toggleClass("black selected").text(" ")

		if (($("#toBlack1").hasClass("black")) && ($("#toBlack2").hasClass("black"))) {

			$(".black").addClass("unwiped")
			$(".black").delay(800).addClass("wiped")
		};

		return toCheck();

	});

	$(".toPink").on("click", function () {
		$(this).toggleClass("pink selected").text(" ")

		if (($("#toPink1").hasClass("pink")) && ($("#toPink2").hasClass("pink"))) {

			$(".pink").addClass("unwiped")
			$(".pink").delay(800).addClass("wiped")
		};
		return toCheck();
	});


	$(".toLight").on("click", function () {
		$(this).toggleClass("light selected").text(" ")

		if (($("#toLight1").hasClass("light")) && ($("#toLight2").hasClass("light"))) {

			$(".light").addClass("unwiped")
			$(".light").delay(800).addClass("wiped")
		};

		return toCheck();

	});

	$(".toSmth").on("click", function () {
		$(this).toggleClass("smth selected").text(" ")

		if (($("#toSmth1").hasClass("smth")) && ($("#toSmth2").hasClass("smth"))) {

			$(".smth").addClass("unwiped")
			$(".smth").delay(800).addClass("wiped")
		};

		return toCheck();

	});

	// First part of the toCheck function is supposed to check for us if we matched the pair of tiles, and "flip it" back if we didn't

	function toCheck(selected, wiped) {

		var selected = $(".selected").length;
		var color = $(".red .blue .green .yellow .white .orange .grey .dark .light .smth .black .pink ").length;

		if ((selected == 2) && (color != 2)) {
			setTimeout(function () {
				$(".selected").removeClass("red blue green yellow white orange grey dark light smth black pink selected")
			}, 400);

		};
		//Once we paired all the tiles, we want this function to show us the button, that allow us to go to next level
		var wiped = $(".wiped").length;

		if (($("#home").hasClass("active")) && (wiped == 9)) {
			setTimeout(function () {
				$("#welcome").addClass("disabled")
				$("#theGame").addClass("disabled")
				$("#Complete").removeClass("disabled");
			}, 700);
		} else if ($("#level2").hasClass("active") && (wiped == 15)) {
			setTimeout(function () {

				$("#welcome").addClass("disabled")
				$("#theGame").addClass("disabled")
				$("#Complete").removeClass("disabled");
			}, 700)
		} else if (($("#level3").hasClass("active")) && (wiped == 24)) {
			alert(`Your time was: `)
			setTimeout(function () {
				$("#welcome").addClass("disabled")
				$("#theGame").addClass("disabled")
				$("#Complete").removeClass("disabled");
			}, 700);
		}
	};

	// Check time function is the idea of my friend Jack, who was the first person to check if he likes my app.
	// While creating it, I was following the tutorial found on Youtube at: https://www.youtube.com/watch?v=knbUg0Q3qLU


})