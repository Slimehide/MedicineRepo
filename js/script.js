$(document).ready(function(){
	$(".drop__li>a").on("focus" ,function(e){
		e.preventDefault();
	});
	$(".drop__li").on("mouseenter" , function(){
		$(this).find(".dropdown__block").fadeIn(300);
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

	if ($('.outer__awards').length) {
		$(".outer__awards").slick({
			slidesToShow:3,
			dots:true,
			arrows:false,
			responsive: [{
				breakpoint: 767,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: true
			      }
			},

			{
				breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: true
			      }
		  }

			]
		})
	}

	if ($(".inner__course").length) {
		$(".inner__course").slick({
			slidesToShow:3,
			dots:true,
			arrows:false,
			responsive: [{
				breakpoint: 767,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: true
			      }
			},

			{
				breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: true
			      }
		  }

			]
		});
	}

	$(".drop__zone").on("click" ,function(e){
		e.preventDefault();
		$(this).find("input").click();
	});
	$(".pass__group>a").on("click" ,function(e){
		e.preventDefault();
		if ($(this).closest(".pass__group").find("input").attr("type") == "text") {
			$(this).closest(".pass__group").find("input").attr("type" ,"password");
		} else {
			$(this).closest(".pass__group").find("input").attr("type" ,"text");
		}
	});
});