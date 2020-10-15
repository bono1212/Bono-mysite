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


/* ******main slide********* */
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