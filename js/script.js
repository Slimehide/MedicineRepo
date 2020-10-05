$(document).ready(function(){
	$(".drop__li>a").on("focus" ,function(e){
		e.preventDefault();
	});
	$(".drop__li").on("mouseenter" , function(){
		$(this).find(".dropdown__block").fadeIn(300);
	});
	$(".dropdown__block").on("mouseenter" ,function(e){

	});
	$(".drop__li").on("mouseleave" , function(){
		$(this).find(".dropdown__block").fadeOut(300);
	});
	$(".head__certificate").on("click" ,function(e){
		e.preventDefault();
		$(this).parent().find(".text__certificate").slideToggle(400);
		if ($(this).parent().hasClass("active__certificate")) {
			$(this).parent().removeClass("active__certificate");
			$(this).closest(".elem__certificate").find(".arrow__span").css("transform" , "translate(0%,-50%) rotate(0deg)");
		} else {
			$(this).parent().addClass("active__certificate");
			$(this).closest(".elem__certificate").find(".arrow__span").css("transform" , "translate(0%,-50%) rotate(180deg)");
		}
	});
});