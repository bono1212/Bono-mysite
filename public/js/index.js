/**************scroll************* */
$(window).on("scroll", onScroll);
function onScroll() {
	var sctop = $(this).scrollTop();
	var opWrapper = $(".op-wrapper").offset().top - $(this).height()/2;
	if(sctop > opWrapper) {
		$(".op-wrapper").find(".box").each(function(){
			var pct = $(this).data("pct");
			$(this).css("width", pct+"%");
			$(this).find("span").text(pct);
		});
	}
}

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
		$(slides[idx]).clone().appendTo($slideWrap.empty());
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




/* ********small-banner effect********** */
$(".small-banner .box").on("mouseenter", function(){
	$(this).find(".slogan").show();
});
$(".small-banner .box").on("mouseleave", function(){
	$(this).find(".slogan").hide();
});

$(".small-banner .box").on("mousemove", function(e){
	$(this).find(".slogan").css({ "top": (e.offsetY + 10) + "px", "left": (e.offsetX + 10) + "px" });
});


/**************navi-wrap************* */
$(".navi-wrap > .navi").on("mouseenter", onOver);
$(".navi-wrap > .navi").on("mouseleave", onLeave);

function onOver() {
	$(this).find(".sub-wrap").show();
	if($(this).hasClass("navi-static")) $(this).find(".sub-wrap").css("display", "flex");
}

function onLeave() {
	$(this).find(".sub-wrap").hide();
}

/* bar change*/
$(".bar-wrap").on("mouseenter", onShow);
$(".bar-wrap").on("mouseleave", onHide);

function onShow() {
	$(this).find(".menu").hide();
	$(this).find(".plus").show();
}

function onHide(){
	$(this).find(".menu").show();
	$(this).find(".plus").hide();
}

/* bar-side */

$(".bar-wrap .plus").on("click", function(){
	var winWid = $(window).width();
	if(winWid < 992) {
		$(".header-wrapper .bar-menu").slideDown(500);
	}
	else { 
		$(".header-wrapper .bar-side").fadeIn(500);
	 } 
});

$(".bar-side .top i").on("click", function(){
	$(".header-wrapper .bar-side").fadeOut(500);
	$(".header-wrapper .bar-menu").slideUp(500);
});


/* line down */
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



new WOW({ 
	offset: 300,
	animateClass: 'wow-ani',
	mobile: false
}).init();

/* ******text slide********* */
(function () {
	var n = 1;
	function ani() {
		$(".black-wrapper .slide-wrap1").stop().animate({"left": -n*100+ "%"}, 500, function () {
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


/* ******logo slide********* */
(function () {
	var datas = [
		{ id: 0, src: '../img/client-1.png', title: 'logo1' },
		{ id: 1, src: '../img/client-2.png', title: 'logo2' },
		{ id: 2, src: '../img/client-3.png', title: 'logo3' },
		{ id: 3, src: '../img/client-4.png', title: 'logo4' },
		{ id: 4, src: '../img/client-5.png', title: 'logo5' },
		{ id: 5, src: '../img/client-6.png', title: 'logo6' },
		{ id: 6, src: '../img/client-7.png', title: 'logo7' },
		{ id: 7, src: '../img/client-8.png', title: 'logo8' },
		{ id: 8, src: '../img/client-1.png', title: 'logo1' },
		{ id: 9, src: '../img/client-2.png', title: 'logo2' },
		{ id: 10, src: '../img/client-3.png', title: 'logo3' },
		{ id: 11, src: '../img/client-4.png', title: 'logo4' },
		{ id: 12, src: '../img/client-5.png', title: 'logo5' },
		{ id: 13, src: '../img/client-6.png', title: 'logo6' },
		{ id: 14, src: '../img/client-7.png', title: 'logo7' },
		{ id: 15, src: '../img/client-8.png', title: 'logo8' }
	];
	var $wrapper = $(".clients-wrapper");
	var $clientWrap = $(".slide-wrap", $wrapper);
	var $slides = [];
	var idx = 0;
	var lastIdx = datas.length - 1;
	var interval;

	function init() {
		var i, html;
		for (i in datas) {
			html = '<div class="slide">';
			html += '<img src="' + datas[i].src + '" class="w100">';
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
		for (var i = 1; i <= 8; i++) {
			if (idx + i > lastIdx) $($slides[idx + i - 1 - lastIdx].clone()).appendTo($clientWrap);
			else $($slides[idx + i].clone()).appendTo($clientWrap);
		}
	}

	function ani() {
		if(idx == 8) idx = 0;
		else idx++;
		//console.log((-idx*8) + "%");
		$clientWrap.stop().animate({ "left": (-idx*8) + "%" }, 500, slideInit);
	}

	init();
})();


//$(".video").YTPlayer();


/* map */
var container = document.getElementById('map');
var options = { 
	center: new kakao.maps.LatLng(37.561010, 127.076242),
	level: 8
};

var map = new kakao.maps.Map(container, options);

var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
    imageSize = new kakao.maps.Size(60, 69),
    imageOption = {offset: new kakao.maps.Point(27, 69)};
      
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); 

var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage 
});

marker.setMap(map);  