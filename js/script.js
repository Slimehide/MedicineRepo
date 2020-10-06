$(document).ready(function(){

	$(".menu__button").on("click" ,function(e){
		if ($(this).hasClass("active__button")) {
			$("body,html").css("overflow-y" ,"auto");
			$(".center__list").css("top" ,"-100vh");
			$(this).removeClass("active__button");
			if ($(window).width() < 640) {
				$(".header__buttons").css("top" , "-100vh");
			}
		} else {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			$(".center__list").css("top" ,"0px");
			$(this).addClass("active__button");
			$("body,html").css("overflow-y" ,"hidden");
			if ($(window).width() < 640) {
				$(".header__buttons").css("top" , "0");
			}
		}
	});
	$(".drop__li>a").on("blur" ,function(e){
		if ($(window).width() < 991) {
			$(this).removeClass("opened__drop");
		}
	});
	$(".drop__li>a").on("click" ,function(e){
		if ($(window).width() < 991) {
			if ($(this).hasClass("opened__drop")) {
				$(this).removeClass("opened__drop");
			} else {
				e.preventDefault();
				$(this).addClass("opened__drop");
			}
		}
	});
	$(".drop__li").on("mouseenter" , function(){
		if ($(window).width() > 991) {
			$(this).find(".dropdown__block").fadeIn(300);
		} else {
			$(this).find(".dropdown__block").slideDown(300);
		}
	});
	$(".drop__li").on("mouseleave" , function(){
		if ($(window).width() > 991) {
			$(this).find(".dropdown__block").fadeOut(300);
		} else {
			$(this).find(".dropdown__block").slideUp(300);
		}
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