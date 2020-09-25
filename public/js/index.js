/* manin slide */
(function(){
	var slides = [
		{ id: 0, src: '../img/h2-slider-1.jpg', title: 'people1'},
		{ id: 1, src: '../img/h2-slider-2.jpg', title: 'people2'},
		{ id: 3, src: '../img/h2-slider-3.jpg', title: 'people3'},
	];

	var $slideWrap = $(".header-wrapper .slide-wrap");
	var $btnPrev = $(".header-wrapper .btn-prev");
	var $btnNext = $(".header-wrapper .btn-next");
	var $slides =[];
	var idx= 0;
	var lastIdx = slides.length - 1;
	var interval;	

	function init() {
		var html, i;
		for(i in slides) {
			html = '<div class="slide">';
			html += '<img class="w-100" src="'+slides[i].src+'">';
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
		$($slides[idx].clone()).appendTo($slideWrap).stop().animate({"opacity": 1}, 500, slideInit);
	}
	init();
})();

/* line down */
$(document).ready(function(){
	$('.titles-wrap').click(function(){
		$(this).find("p").slideToggle("slow", function(){
			if($(this).css("display") == "none") {
				$(this).parent().find(".line").html("+");
			}
			else {
				$(this).parent().find(".line").html("-");

			}
		});
});
});

/* ******text slide********* */
(function(){
	var n = 1;
	function ani() {
		$(".black-wrapper .text-slide").stop().animate({"left": -n*100 + "%"}, 500, function(){
			if(n == 2) {
				$(this).css("left", 0);
				n = 1;
			} else {
				n++;
			}
		});
	}
	setInterval(ani, 5000);
})();