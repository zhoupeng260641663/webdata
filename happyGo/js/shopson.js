require.config({
	paths: {
		'jquery': 'jquery-1.12.4.min', //去掉扩展名。
		'jqcookie': 'jquery.cookie'
	}
});
define(['jquery', 'jqcookie'], function() {
	var $Cookieid =null;
	var $Cookienum=null
	function haveCookie() {
		if(getCookie('picid')) {
			$Cookieid = getCookie('picid');
			$Cookienum = getCookie('shopnum');
		}
	}
	(function() {
		haveCookie();
		if($Cookieid) {
			$('.shop_tips').hide();
			var $data = $Cookieid.split(',');
			var $datanum = getCookie('shopnum').split(',');
		} else {
			$('.shop_tips').show();
		}
		$.each($data, function(index, value) {
			getdata(value, $datanum[index])
		});

		function getdata(obj, num) {
			$.ajax({
					url: "http://127.0.0.1/js/work/happyGo/php/shopcar.php?__hbt=1526548052253",
					async: true,
					dataType: 'json',
					data: {
						picid: obj,
					}
				})
				.done(function(d) {
					var $html = '';
					var $num = getCookie('shopnum');
					$.each(d, function(index, value) {
						$html += `<div class='list_shop'>
					<div class="cell p_checkbox">
					<input type="checkbox" class="cb_s_goods" />
				</div>
				<div class="cell p_goods">
					<div class="goods_item">
						<div class="goods_item_img">
							<a href="">
								<img src="${value.imgurl}" alt="" />
							</a>
						</div>
						<div class="goods_item_msg">
							<div class="p_name">
								<a href="">${value.title}</a>
							</div>
						</div>
					</div>
				</div>
				<div class="cell p_prices">
					<p class="p_prices2">￥${value.nowprice}</p>
				</div>
				<div class="cell p_quantity">
					<div class="quantity_form">
						<a href="javascript:;" class="a_red">-</a>
						<input type="text" value='${num}' class='shopnum'/>
						<a href="javascript:;" class="a_add">+</a>
					</div>
				</div>
				<div class='cell p_sum'>
					<strong>￥</strong>
					<em>${d[0].nowprice}</em>
				</div>
				<div class="cell p_ops">
					<a href="javascript:;" class="car_remove">删除</a>
				</div>
			</div>
				</div>`;
						$('.item_list ').append($html);
					});
				}).fail(function() {

				});
		}
	})();;
	(function() {
		 haveCookie();
		$('.item_list').on('click', '.p_ops a', function() {
			$.each($Cookieid.split(','),function(index,value){
				console.log(value);
			}) 
//			delCookie('picid');
//			delCookie('shopnum');
//			$(this).first().parent().parent().remove();
			if($Cookieid) {
				$('.shop_tips').hide();
			} else {
				$('.shop_tips').show();
			}
		})

	})();;
	(function() {
		$('.item_list').on('click', '.a_red', function() {
			var $num = parseInt($('.shopnum').val());
			$num--;
			if($num <= 1) {
				$num = 1;
			}
			$('.shopnum').val($num);
		});
		$('.item_list').on('click', '.a_add', function() {
			var $num = parseInt($('.shopnum').val());
			$num++;
			if($num >= 999) {
				$num = 999;
			}
			$('.shopnum').val($num);
		})
	})();
});