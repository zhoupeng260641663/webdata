require.config({
	paths: {
		'jquery': 'jquery-1.12.4.min', //去掉扩展名。
		'jqcookie': 'jquery.cookie'
	}
});
define(['jquery', 'jqcookie'], function() {;
	(function() {
		var $data=getCookie('picid').split('');
		var $datanum=getCookie('shopnum').split('');
		console.log($data);
		console.log($datanum);
		$.each($data,function(index,value){
			getdata(value,$datanum[index])
		});
		function getdata(obj,num) {
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
						<a href="" class="a_red">-</a>
						<input type="text" value='${num}' />
						<a href="" class="a_add">+</a>
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
		$('.item_list').on('click', '.p_ops a', function() {
			delCookie('picid');
			delCookie('shopnum');
			console.log($(this).first().parent().parent().remove());
		})

	})();
});