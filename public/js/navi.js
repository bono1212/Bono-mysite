$(".navi-wrap > .navi").mouseover(onOver);
$(".navi-wrap > .navi").mouseleave(onLeave);

function onOver() {
	$(this).find(".sub-wrap").show();
	if($(this).hasClass("navi-static")) $(this).find(".sub-wrap").css("display", "flex");
}

function onLeave() {
	$(this).find(".sub-wrap").hide();
}