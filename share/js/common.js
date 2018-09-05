var classNumber = 0, classNumber2 = 0, className = "js-item", className2 = "col";

$(window).on('load resize', function() {
	var windowWidth = window.innerWidth, maxHeight;

	function modalWindow() {
		var width = $(window).width(), centerWidth = $(".drill_menu1").outerWidth();

		$(".drill_menu1").css({
			"left": (width - centerWidth)/2+"px",
		});
	}

	if (windowWidth < 769) {
		$(".name-product").each(function(i) {
			if(i%2 == 0){
				classNumber ++;
			}
			$(this).addClass(className+classNumber);
		});

		var nameArr = new Array();
		for(i=1; i<=classNumber; i++) {
			nameArr[i-1] = className+i;
		}

		$.each(nameArr, function(i, val) {
			maxHeight = 0;
			$("."+nameArr[i]).each(function() {
				if($(this).height() > maxHeight) {
					maxHeight = $(this).height();
				}
			});
			$("."+nameArr[i]).height(maxHeight);
		});

		$(".cont-product_list").each(function(i) {
			if(i%2 == 0){
				classNumber2 ++;
			}
			$(this).addClass(className2+classNumber2);
		});

		$("."+className2+classNumber2).addClass("bottom_border2");

		for (var i=0; i<=classNumber2; i++) {
			$(".cont-product_list").removeClass(className2+i);
		}

		//サイドバー
		$(".js-nav_mouseover").on("click", function() {
			modalWindow();
			$("#modal-bg").fadeIn("slow");
			$(".modal-bg2").fadeIn("slow");
			$(this).children(".drill_menu1").fadeIn("slow");

			$("#modal-bg, .modal-bg2").on("click", function() {
				$("#modal-bg, .drill_menu1").fadeOut("slow", function() {
					$(".modal-bg2").fadeOut("slow");
					$("#modal-bg").fadeOut("slow");
				});
			});

		});

		$(window).on("resize", function() {
			modalWindow();
		});

		$(".js-drill_menu_slideout").on("click", function() {
			$(this).parent().children(".drill_menu2").stop().slideToggle("slow");
		});

	} else {

		$(".list_nav_bottom_left").addClass("list_nav_bottom_left_pc");

		maxHeight = 0;
		$(".name-product").each(function() {
			if($(this).height() > maxHeight ){
				maxHeight = $(this).height();
			}
		});
		$(".name-product").height(maxHeight);

		$(".cont-product_list").each(function(i) {
			if(i%5 == 0){
				classNumber2 ++;
			}
			$(this).addClass(className2+classNumber2);
		});

		$("."+className2+classNumber2).addClass("bottom_border");

		for (var i=0; i<=classNumber2; i++) {
			$(".cont-product_list").removeClass(className2+i)
		}

		//サイドバー
		$(".js-nav_mouseover").on("mouseenter", function() {
			$(this).addClass("js-nav_mouseover_on");
			$(this).children(".menu_list-arrow_icon").toggleClass("aaa");
			$(this).children(".drill_menu1").stop().fadeIn();
		}).on("mouseleave", function() {
			$(this).removeClass("js-nav_mouseover_on");
			$(this).children(".menu_list-arrow_icon").toggleClass("aaa");
			$(this).children(".drill_menu1").stop().fadeOut();
		});

		$(".drill_menu1-list").on("mouseenter", function() {
			$(this).children(".drill_menu2").stop().fadeIn();
		}).on("mouseleave", function() {
			$(this).children(".drill_menu2").stop().fadeOut();
		});

	}

});

$(window).on('load', function() {
	//サイドバーとメインコンテンツのボーダー設定処理
	var sideBarHeight = $('.side_bar').innerHeight(),
			mainAreaHeight = $('.main_area, .main_area_password').innerHeight();
			windowWidth2 = window.innerWidth;

	if ( windowWidth2 >= 769) {
		if (sideBarHeight > mainAreaHeight) {
			$('.side_bar').css('border-right', '2px solid #F5F3F3');
		} else {
			$('.main_area, .main_area_password').css('border-left', '2px solid #F5F3F3');
		}
	}

});

//ヘッダーの処理関連
$(function() {
	var $headerBottom = $('#header_bottom'),
			headerBottomOffset = $headerBottom.offset().top,
			$headerBottomHeight = $headerBottom.height();

	$(window).on('scroll', function() {
		if($(this).scrollTop() > headerBottomOffset) {
			$headerBottom.addClass('is-fixed');
			$("#header_top").css('margin-top', $headerBottomHeight);
			$(".menu_list_sp_content").addClass("menu_list_sp_content_fixed");
			$(".menu_list_sp_content .icon_under").addClass("menu_list_sp_content_font");
			$(".menu_list_sp_content_off").addClass("header_bottom_fixed_dsp_no");
			$(".menu_list_sp_content_on").removeClass("header_bottom_fixed_dsp_no");
		} else {
			$headerBottom.removeClass('is-fixed');
			$("#header_top").css('margin-top', 0);
			$(".menu_list_sp_content").removeClass("menu_list_sp_content_fixed");
			$(".menu_list_sp_content .icon_under").removeClass("menu_list_sp_content_font");
			$(".menu_list_sp_content_off").removeClass("header_bottom_fixed_dsp_no");
			$(".menu_list_sp_content_on").addClass("header_bottom_fixed_dsp_no");
		}
	});

	$("#header_menu_acordion").on("click", function() {
		$(this).toggleClass("bg-white1");
		$(".side_bar, .side_bar2").stop().slideToggle();
	});

	// spメニュー
	$('.menu_list_sp_content:first-child').on("click", function() {
		$(".menu_sp").slideDown();
	});

	$('.close_button').on("click", function() {
		$(".menu_sp").slideUp();
	});

	$(function() {
		$(".menu_list_l .menu_list-cont").on("mouseenter", function() {
			$(this).children(".category_content").stop().slideDown();
		}).on("mouseleave", function() {
			$(this).children(".category_content").stop().slideUp();
		})
	});

	//規格についてアコーディオン
	$(".button_area-social_corporation").on("click", function() {
		$(this).children(".about_agreement").slideToggle();
	});

	//ページャ関連
	var all = $(".pager_cont").length,
			indexFirst1 = 0,
			indexLast1 = all/2-1,
			indexFirst2 = all/2,
			indexLast2 = all-1,
			href,
			index;

	$(".pager_cont").each(function() {
		href = $(this).attr("href");
		if(location.href.match(href)) {
			index = $(".pager_cont").index(this);

			$(this).click(function() {
				return false;
			});
			$(this).parent().addClass("active");
			$(this).addClass("active2");

			if (index-1 == indexFirst1) {
				$(".pager_cont").first().addClass("active2");
				$(".pager_cont").first().parent().addClass("active");
			} else if(index-1 == indexFirst2) {
				$(".pager_cont:eq("+indexFirst2+")").addClass("active2");
				$(".pager_cont:eq("+indexFirst2+")").parent().addClass("active");
			} else if (index+1 == indexLast1) {
				$(".pager_cont:eq("+indexLast1+")").addClass("active2");
				$(".pager_cont:eq("+indexLast1+")").parent().addClass("active");
			} else if (index+1 == indexLast2) {
				$(".pager_cont").last().addClass("active2");
				$(".pager_cont").last().parent().addClass("active");
			}

		} else {
			$(this).parent().removeClass("active");
			$(this).removeClass("active2");
		}
	});

	$(".pager_list").on("mouseenter", function() {
		if (!$(this).hasClass("active")) {
			$(this).addClass("pager_list_on");
			$(this).children(".pager_cont").addClass("pager_cont_on");
		}
	}).on("mouseleave", function() {
		$(this).removeClass("pager_list_on");
		$(this).children(".pager_cont").removeClass("pager_cont_on");
	});

});

// カルーセル関連
$(function() {

	$('.top_carousel').slick({
  	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
		swipe: false,
		centerMode: true
	});

	$('.topics-product_list').slick({
  	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
		swipe: true,
		centerPadding: '50px',
		responsive: [{
			breakpoint: 768,settings: {
				arrows: false,
				swipe: true,
				slidesToShow: 2
			}
		}]
	});

	//ecトップメインのカルーセル
	$('.main_banner ul').slick({
		infinite: true,
		swipe: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		centerMode: true,
		centerPadding: '20%',
		dots: true,
		responsive: [{
			breakpoint: 768,settings: {
				arrows: false,
				swipe: true,
				centerPadding: '0%',
			}
		}]
	});

	// メイン画像のカルーセル
	$('.slider-for').slick({
		initialSlide: 0,
  	slidesToShow: 1,
  	slidesToScroll: 1,
		swipe: false,
  	arrows: false,
  	fade: true,
  	asNavFor: '.slider-nav',
	});

	$('.slider-nav').slick({
		initialSlide: 0,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	asNavFor: '.slider-for',
		touchMove: false,
		focusOnSelect: true,
  	dots: true,
		swipe: false,
		responsive: [{
			breakpoint: 768,settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				swipe: true,
				centerMode: true,
				centerPadding: '25%'
			}
		}]
	});

	// 関連画像と最近見た商品のカルーセル
	$('.product_img-list').slick({
		dots: true,
		infinite: true,
		speed: 300,
		swipe: false,
		slidesToShow: 6,
		slidesToScroll: 6,
		responsive: [{
			arrows: false,
			breakpoint: 768,settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				swipe: true,
				dots: true,
				centerMode: true,
				centerPadding: '6%',
			}
		}]
	});

});

//商品一覧の表示切替ポップアップ
$(function() {
	$(".cont-local_nav_bottom:first-child").on("click", function() {
		if ($(".list_nav_bottom_left").hasClass("list_nav_bottom_left_pc")) {
			if (!$(".cont-local_nav_bottom:nth-child(2)").hasClass("js-siide_on")) {
				$(".list_nav_bottom_left").animate({"width":"635px"}, function() {
					$(".cont-local_nav_bottom:nth-child(2)").addClass("js-siide_on");
				});
			} else {
				$(".list_nav_bottom_left").animate({"width":"106px"}, function() {
					$(".cont-local_nav_bottom:nth-child(2)").removeClass("js-siide_on");
				});
			}
		} else {
			if (!$(".pager").hasClass("mat125")) {
				$(".pager").animate({"marginTop":"125px"});
				$(".cont-local_nav_bottom:nth-child(n+2)").slideToggle(function () {
					$(".pager").addClass("mat125");
				});
			} else {
				$(".pager").animate({"marginTop":"0"});
				$(".cont-local_nav_bottom:nth-child(n+2)").slideToggle(function () {
					$(".pager").removeClass("mat125");
				});
			}
		}
	});
});

// 商品にカーソルが乗ったときの詳細表示処理
$(function(){
	// $(".cont-product_list").on("mouseenter", function(){
	// 	$(this).children(".item_layer").stop().slideDown(500);
	// 	// $(this).find(".item_layer").stop().slideDown(200);
	// }).on("mouseleave", function(){
	// 	$(this).children(".item_layer").stop().slideUp(500);
	// 	// $(this).find(".item_layer").stop().slideUp(200);
	// });

	// $(document).on("mouseenter", ".cont-product_list", function() {
	// 	$(this).children(".item_layer").stop().slideDown(500);
	// }).on("mouseleave", ".cont-product_list",function() {
	// 	$(this).children(".item_layer").stop().slideUp(500);
	// });

	// $(".cont-product_list").on("hover", function(){
	// 	$(this).children(".item_layer").stop().slideToggle();
	// });

	$(".cont-product_list").on("mouseenter", function(){
		$(this).children(".item_layer").css("display", "block");
	}).on("mouseleave", function(){
		$(this).children(".item_layer").css("display", "none");
	});

	// $(".cont-product_list").on("mouseenter", function(){
	// 	$(this).children(".item_layer").animate({
	// 			"margin-top":"-150px"
	// 	});
	// }).on("mouseleave", function(){
	// 	$(this).children(".item_layer").animate({
	// 			"margin-top":"0"
	// 	});
	// });


});

//カート回り
$(function(){
	$(".js-accordion_new_place").hide();
	$(".js-accordion_payment").hide();
	$("#destination_select").change(function(){
		if($(this).is(":checked")){
			$(".js-accordion_new_place").slideDown();
		}else{
			$(".js-accordion_new_place").slideUp();
		}
	});

	$("input[name*=select_payment]").change(function(){
		if($(this).is(":checked")) {
			$(".js-accordion_payment").slideUp();
			$(this).parent("label").next(".js-accordion_payment").slideDown();
		}
	});
});

$(function(){
	$("label.radio_item, label.check_item").each(function(){
		isCheckAction($(this));
	});

	$("label.radio_item, label.check_item").on("click", function(){
		isCheckAction($(this));
	});
});

function isCheckAction(target){
	if(target.children("input").is(":checked")){
		var thisType = target.children().attr("type");
		var thisName = target.children().attr("name");
		if(thisType == "radio"){
			$("input[name=" + thisName + "]").parent().removeClass("checkon");
		}
		target.addClass("checkon");
	}else{
		target.removeClass("checkon");
	}
}

//ウィンドウオープン
function win01(URL,Winname,Wwidth,Wheight){
	var WIN;
	WIN = window.open(URL,Winname,"width="+Wwidth+",height="+Wheight+",scrollbars=no,resizable=no,toolbar=no,location=no,directories=no,status=no");
	WIN.focus();
}

$(function(){
	$(".link_frame-product-list").each(function(){
		var thisWidth = $(this).width();
		$(this).css({
			height:thisWidth + "px",
			overflow:"hidden",
			verticalAlign:"bottom"
		});
	});

	$(window).resize(function(){
		$(".link_frame-product-list").each(function(){
			var thisWidth = $(this).width();
			$(this).css({
				height:thisWidth + "px",
				overflow:"hidden"
			});
		});
	});

});
