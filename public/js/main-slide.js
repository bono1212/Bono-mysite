(function () {
	var slides = [
		{ id: 0, src: '../img/h2-slider-1.jpg', title: 'people1'},
		{ id: 1, src: '../img/h2-slider-2.jpg', title: 'people2'},
		{ id: 3, src: '../img/h2-slider-3.jpg', title: 'people3'}
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
			html = '<div class="slide" style="background-image: url('+slides[i].src+')">';
			html += '<div class="text">'+slides[i].text+'</div>'; 
			html += '</div>';
			$slides[i] = $(html);
		}
		slideInit();
		interval = setInterval(onNext, 3000);
	}

	function slideInit() {
		//$slideWrap.html($slides[idx].clone());
		var $txt = $($slides[idx].clone()).appendTo($slideWrap.empty());
		$txt.find(".text").css("opacity");
		$txt.find(".text").css("transform");
		$txt.find(".text").css({"opacity": 1, "transform": "translateX(0)"});
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