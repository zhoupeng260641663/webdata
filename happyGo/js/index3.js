require.config({
	paths: {
		'jquery': 'jquery-1.12.4.min', //去掉扩展名。
		'jqcookie':'jquery.cookie'
	}
});
define(['jquery','jqcookie'], function() {;
	(function() { //二级导航数据
		$.ajax({
			url: 'http://127.0.0.1/js/work/happyGo/php/twonav.php?__hbt=1526281770067',
			type: 'get',
			async: true,
			dataType: 'json', //数据类型
		}).done(function(d) { //成功
			var $twonavlist = $('.twonavlist');
			var $html = '';
			$.each(d, function(index, value) {
				$html += `<li>
							<a>${value.twonavlist}
								<i>&gt;</i>
							</a>
						</li>`;
			})
			$twonavlist.append($html);

		}).fail(function() { //失败

		})
	})();;
	(function() { //banner轮播效果
		var $imglist = $('.banner_img li ');
		var $tap = 0;
		var $timer = null;
		$('.banner_list span').on('click', function() {
			$(this).addClass('active').siblings('span').removeClass('active');
			$imglist.eq($(this).index()).addClass('visible').siblings().removeClass('visible');
			$tap = $(this).index();
			clearInterval($timer);
			var $timerout = setTimeout(function() {

				$timer = setInterval(function() {
					$tap++;
					if($tap > 2) {
						$tap = 0;
					}
					$imglist.eq($tap).addClass('visible').siblings().removeClass('visible');
					$('.banner_list span').eq($tap).addClass('active').siblings('span').removeClass('active');

				}, 4000);
			}, 1000)
		});
		$timer = setInterval(function() {
			$tap++;
			if($tap > 2) {
				$tap = 0;
			}
			$imglist.eq($tap).addClass('visible').siblings().removeClass('visible');
			$('.banner_list span').eq($tap).addClass('active').siblings('span').removeClass('active');

		}, 4000);
	})();;
	(function() { //今日直播下的效果
		$.ajax({
			type: "get",
			url: "http://127.0.0.1/js/work/happyGo/php/todaytv.php?__hbt=1526298754987",
			async: true,
			dataType: 'json',
		}).done(function(d) {
			var $ul = $('.todaylive .list ul');
			var $html = '';
			$.each(d, function(index, value) {
				$html += `<li>
							<div class='shoptime'>${value.limit}<i></i></div>
							<a href="details.html" class='img' id="${value.imgid}">
								<img src="${value.imgurl}" alt="" />
							</a>
							<p>${value.tips}</p>
							<span class="list_title"><a href="details.html">${value.title}</a></span>
							<div class='tv_price'>
								<span class='color_c4193f firstspan'>
								<span>￥</span>
								<span class="lastspan">${value.nowprice}</span>
								</span>
								<del>${value.deleteprice}</del>
							</div>
						</li>`
			});
			$ul.append($html);

			var $liwidth = $('.todaylive .list ul li').outerWidth();
			var $ulwidth = $liwidth * $('.todaylive .list ul li').length;
			$ul.css('width', $ulwidth);
			var $position = $liwidth * (($('.todaylive .list ul li').length) / 2);
			var $num = 0;
			$('.todaylive .buttonright').on('click', function() {
				$num++;
				console.log($('.todaylive .list ul li').length / 6);
				if($num >= (($('.todaylive .list ul li').length) / 6)) {
					$num = (($('.todaylive .list ul li').length) / 6);

				} else {
					$ul.animate({
						left: -$position * $num,
					}, 500);
				}

			});

			$('.todaylive .buttonleft').on('click', function() {
				$num--;
				if($num < 0) {
					$num = 0;
				} else {
					$ul.animate({
						left: -$position * $num,
					}, 500);
				}
			});
		}).fail(function() {

		});
	})();;
	var tapcut = function(obj, obj2) { //tap切换
		obj.hover(function() {
			obj.eq($(this).index()).children('a').addClass('active');
			obj.eq($(this).index()).siblings('li').children('a').removeClass('active');
			obj2.eq($(this).index()).addClass('listblock').siblings('.list').removeClass('listblock');
		})
	};
	tapcut($('.shoplist .title2 ul li'), $('.shoplist .list')); //限时抢购
	tapcut($('.newlist .title2 ul li'), $('.newlist .list')); //新品推荐
	tapcut($('.cosmetics1 .title2 ul li'), $('.cosmetics1 .list'));;
	tapcut($('.cosmetics2 .title2 ul li'), $('.cosmetics2 .list'));;
	tapcut($('.cosmetics3 .title2 ul li'), $('.cosmetics3 .list'));;
	tapcut($('.cosmetics4 .title2 ul li'), $('.cosmetics4 .list'));;
	tapcut($('.cosmetics5 .title2 ul li'), $('.cosmetics5 .list'));;
	tapcut($('.cosmetics6 .title2 ul li'), $('.cosmetics6 .list'));;
	tapcut($('.cosmetics7 .title2 ul li'), $('.cosmetics7 .list'));;
	(function() {
		var $ul = $('.shoplist .list:first ul');
		var $liwidth = $('.shoplist .list ul li').outerWidth();
		var $ulwidth = $liwidth * ($('.shoplist .list:first ul li').length + 1);
		$ul.css('width', $ulwidth);

		var $position = $liwidth * (($('.shoplist .list:first ul li').length) / 2);
		var $num = 0;
		$('.shoplist .buttonright').on('click', function() {
			$num++;
			if($num == (($('.shoplist .list:first ul li').length) / 5)) {
				$num = (($('.shoplist .list:first ul li').length) / 5) - 1;
			} else {
				$ul.animate({
					left: -$position * $num,
				}, 500);
			}

		});

		$('.shoplist .buttonleft').on('click', function() {
			$num--;
			if($num < 0) {
				$num = 0;
			} else {
				$ul.animate({
					left: -$position * $num,
				}, 500);
			}
		});
	})();
	(function() { //cosmetics下的效果
		$.ajax({
			type: "get",
			url: "http://127.0.0.1/js/work/happyGo/php/todaytv.php?__hbt=1526298754987",
			async: true,
			dataType: 'json',
		}).done(function(d) {
			var $ul = $('.cosmetics .list ul');
			var $html = '';
			$.each(d, function(index, value) {
				$html += `<li>
								<b></b>
								<a href="" class='img'>
									<img src="${value.imgurl}" alt="" />
								</a>

								<p>${value.tips}</p>
								<span class="list_title"><a href="">${value.title}</a></span>
								<div class='tv_price'>
									<div class='overprice'>
										<span class='color_c4193f span'>
												<span>￥</span>
										<span>${value.nowprice}</span>
										</span>
										<del>${value.deleteprice}</del>
									</div>

								</div>
							</li>`
			});
			$ul.append($html);
		}).fail(function() {

		});
	})();;;
	(function() {
		$(window).on('scroll', function() {
			if($(window).scrollTop() > 600) {
				$('.fixedsearch').show();
				$('.left_slider').show();

			} else {
				$('.left_slider').hide();
				$('.fixedsearch').hide();

			};

		});
		if($(window).scrollTop() > 600) {
			$('.getop').on('click', function() {
				$('html,body').animate({
					scrollTop: 0
				}, 1000)
			});
		}
		var $louti = $('.left_slider');
		var $loutili = $('.left_slider ul li');
		var $louceng = $('.louceng');
		$(window).on('scroll', function() {
			var $st = $(window).scrollTop();
			if($(window).scrollTop() >= 1000) {
				$louti.show();
			} else {
				$louti.hide();
			}
			$louceng.each(function(index, element) {
				var $louTop = $louceng.eq(index).offset().top - 400;
				if($st > $louTop) {
					$loutili.removeClass('active');
					$loutili.eq(index).addClass('active');
				}
			});

		});
		$loutili.on('click', function() {
			var $cengTop = $louceng.eq($(this).index()).offset().top;
			$('html,body').animate({
				scrollTop: $cengTop
			})
		})
	})();;
	(function() {
		$ul = $('.list div ul');
		$ul.on('mouseenter', function() {
			$ul.find('li').find('a').on('click', function() {
			addCookie('imgid',$(this).attr('id'),7);
		});

		})
	})();
});