/* manin slide */
(function () {
	var slides = [
		{ id: 0, src: '../img/h2-slider-1.jpg', title: 'people1' },
		{ id: 1, src: '../img/h2-slider-2.jpg', title: 'people2' },
		{ id: 3, src: '../img/h2-slider-3.jpg', title: 'people3' },
	];

	var $slideWrap = $(".header-wrapper .slide-wrap");
	var $btnPrev = $(".header-wrapper .btn-prev");
	var $btnNext = $(".header-wrapper .btn-next");
	var $slides = [];
	var idx = 0;
	var lastIdx = slides.length - 1;
	var interval;

	function init() {
		var html, i;
		for (i in slides) {
			html = '<div class="slide">';
			html += '<img class="w-100" src="' + slides[i].src + '">';
			html += '</div>';
			$slides[i] = $(html);
		}
		slideInit();
		interval = setInterval(onNext, 5000);
	}

	function slideInit() {
		$slideWrap.html($slides[idx].clone());
	}

	$btnPrev.click(onPrev);
	$btnNext.click(onNext);

	function onPrev() {
		idx = (idx == 0) ? lastIdx : idx - 1;
		ani();
	}

	function onNext() {
		idx = (idx == lastIdx) ? 0 : idx + 1;
		ani();
	}

	function ani() {
		$($slides[idx].clone()).appendTo($slideWrap).stop().animate({ "opacity": 1 }, 500, slideInit);
	}

	init();
})();

/* sub-wrap */
$(document).ready(function () {
	$('ul.navi-wrap li').hover(function () {
		$(this).find('.sub-wrap').stop().show();
	}, function () {
		$(this).find('.sub-wrap').stop().hide();
	});
});


/* line down */
$(document).ready(function () {
	$('.titles-wrap').click(function () {
		$(this).find("p").slideToggle("slow", function () {
			if ($(this).css("display") == "none") {
				$(this).parent().find(".line").html("+");
			}
			else {
				$(this).parent().find(".line").html("-");

			}
		});
	});
});

/* ******text slide********* */
(function () {
	var n = 1;

	function ani() {
		$(".black-wrapper .text-slide").stop().animate({ "left": -n * 100 + "%" }, 500, function () {
			if (n == 2) {
				$(this).css("left", 0);
				n = 1;
			}
			else {
				n++;
			}
		});
	}

	setInterval(ani, 5000);
})();

/* ******text slide********* */
(function () {
	var datas = [
		{ id: 0, src: '../img/client-1.png', title: 'logo1' },
		{ id: 1, src: '../img/client-2.png', title: 'logo2' },
		{ id: 2, src: '../img/client-3.png', title: 'logo3' },
		{ id: 3, src: '../img/client-4.png', title: 'logo4' },
		{ id: 4, src: '../img/client-5.png', title: 'logo5' },
		{ id: 5, src: '../img/client-6.png', title: 'logo6' },
		{ id: 6, src: '../img/client-7.png', title: 'logo7' },
		{ id: 7, src: '../img/client-8.png', title: 'logo8' }
	];

	var $wrapper = $(".clients-wrapper");
	var $clientWrap = $(".client-wrap", $wrapper);
	var $slides = [];
	var idx = 0;
	var lastIdx = datas.length - 1;
	var target;
	var interval;

	function init() {
		var i, html;
		for (i in datas) {
			html = '<div class="slide">';
			html += '<img src="' + datas[i].src + '">';
			html += '</div>';
			$slides.push($(html));
		}
		slideInit();
		interval = setInterval(ani, 3000);
	}

	function slideInit() {
		$($slides[idx].clone()).appendTo($clientWrap.empty().attr("style", ""));
		if (idx == 0) $($slides[lastIdx].clone()).prependTo($clientWrap);
		else $($slides[idx - 1].clone()).prependTo($clientWrap);
		for (var i = 1; i <= 7; i++) {
			if (idx + i > lastIdx) $($slides[idx + i - 1 - lastIdx].clone()).appendTo($clientWrap);
			else $($slides[idx + i].clone()).appendTo($clientWrap);
		}
	}

	function ani() {
		$clientWrap.stop().animate({ "left": target + "%" }, 500, slideInit);
	}

	init();
})();