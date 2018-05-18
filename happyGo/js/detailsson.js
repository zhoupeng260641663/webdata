require.config({
	paths: {
		'jquery': 'jquery-1.12.4.min', //去掉扩展名。
		'jqcookie': 'jquery.cookie'
	}
});
define(['jquery', 'jqcookie'], function() {;
	(function() { //接收接口数据
		$.ajax({
			url: 'http://127.0.0.1/js/work/happyGo/php/details.php?__hbt=1526544846268',
			async: true,
			dataType: 'json', //数据类型
			data: {
				imgid: getCookie('imgid')
			}
		}).done(function(d) { //成功
			var $img = $('.smallPic');
			var $imglist = $('.divLi ul li a img');
			var $lastimg = $('.lastimg')
			var $h1 = $('.info h1');
			var $h1span = $('.info h1 span');
			var $h2 = $('.info h2');
			var $price = $('.now-price');
			var $oldprice = $('del');
			var $bigpic = $('.bigPic');
			$.each(d, function(index, value) {
				$img.attr('src', value.imgurl);
				$img.attr('id', getCookie('imgid'));
				$imglist.attr('src', value.imgurl);
				$lastimg.attr('src', 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/295/237795/1_05781572288065339_550.jpg');
				$h1.html(value.title);
				$h2.html(value.tips);
				$price.html(value.nowprice);
				$oldprice.html(value.deleteprice)
				$bigpic.attr('src', value.imgurl);
			});

		}).fail(function() { //失败

		})
	})();;
	(function() { //增加数量或者减少数量
		var $addnum = $('.add');
		var $reducenum = $('.reduce');
		var $num = $('.numeber');
		$addnum.on('click', function() {
			var $numtext = parseInt($num.val());
			$numtext++;
			if($numtext > 999) {
				$numtext = 999;
			}
			$num.val($numtext);

		});
		$reducenum.on('click', function() {
			var $numtext = parseInt($num.val());
			$numtext--;
			if($numtext < 1) {
				$numtext = 1;
			}
			$num.val($numtext);
		});
	})();;
	(function() {
		var $maxbox = $('.maxbox');
		var $smallBox = $('.smallBox');
		var $smallpic = $('.smallPic');
		var $xf = $('.xf');
		var $bigBox = $('.bigBox');
		var $bigpic = $('.bigPic');
		$maxbox.on('mouseenter', function() {
			$bigBox.css('display', 'block');
			$xf.css('display', 'block');
			var $fwidth = $bigBox.width() * $smallpic.width() / $bigpic.width();
			var $fHeight = $bigBox.height() * $smallpic.height() / $bigpic.height();
			$xf.css('width', $fwidth);
			$xf.css('height', $fHeight);
			var $bili = $bigpic.width() / $smallpic.width();
			$(document).on('mousemove', function(ev) {
				var ev = ev || window.event;
				var $left = ev.pageX - $maxbox.offset().left - $xf.width() / 2;
				var $top = ev.pageY - $maxbox.offset().top - $xf.height() / 2;
				if($left <= 0) {
					$left = 0;
				} else if($left >= $maxbox.width() - $xf.width()) {
					$left = $maxbox.width() - $xf.width();
				}
				if($top <= 0) {
					$top = 0;
				} else if($top >= $smallpic.height() - $xf.height()) {
					$top = $smallpic.height() - $xf.height();
				}
				$xf.css('left', $left);
				$xf.css('top', $top);
				$bigpic.css('left', -($left * $bili));
				$bigpic.css('top', -($top * $bili));
			})
			$maxbox.on('mouseleave', function() {
				$bigBox.css('display', 'none');
				$xf.css('display', 'none');

			});
		});

		var $divLi = $('.divLi ul li ');
		$divLi.on('click', function() {
			$smallpic.attr('src', $(this).find('img').attr('src'));
			$bigpic.attr('src', $(this).find('img').attr('src'));
		})
	})();;
	(function() {
		var $addcar = $('.add_car');
		var $imgid = [];
		var $imgnum = [];

		function haveCookie() {
			if(getCookie('picid')) {
				$imgid = getCookie('picid').split(',');

			}
			if(getCookie('shopnum')) {
				$imgnum = getCookie('shopnum').split(',');

			}
		}

		$addcar.on('mouseenter', function() {
			var $shopnum = $('.numeber').val();
			var $img = $('.smallPic').attr('id');
			 haveCookie();
			if($.inArray($img,$imgid)!=-1) {
				var $num=parseInt($imgnum[$.inArray($img,$imgid)])+parseInt($shopnum);
				$imgnum[$.inArray($img,$imgid)]=$num;
			}else{
				$imgid.push($img);
				$imgnum.push($shopnum);
			}

			$addcar.on('click', function() {
				addCookie('picid', $imgid, 7);
				addCookie('shopnum', $imgnum, 7);
			});
		})
	})();
});