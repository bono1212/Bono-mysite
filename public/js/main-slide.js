(function () {

	var $slideWrap = $(".header-wrapper .slide-wrap");
	var $btnPrev = $(".header-wrapper .btn-prev");
	var $btnNext = $(".header-wrapper .btn-next");
	var slides = $(".slide-wrap .slide");
	var idx = 0;
	var lastIdx = slides.length - 1;
	var interval;

	function init() {
		slideInit();
		interval = setInterval(onNext, 3000);
	}

	function slideInit() {
		//$slideWrap.html($slides[idx].clone());
		$(slides[idx]).clone().appendTo($slideWrap.empty());
		/*
		$txt.find(".text").css("opacity");
		$txt.find(".text").css("transform");
		$txt.find(".text").css({"opacity": 1, "transform": "translateX(0)"});
		*/
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
		$(slides[idx]).clone().appendTo($slideWrap).css("opacity", 0).stop().animate({ "opacity": 1 }, 500, slideInit);
	}

	init();
})();