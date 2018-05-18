require.config({
	paths: {
		'jquery': 'jquery-1.12.4.min', //去掉扩展名。
	}
});
define(['jquery'], function() {;
	(function() {
		var $yzm = (function() {
			var $ranyzm = $('.ranyzm');
			var $arr = [];
			var $str = '';
			var $botton = true;
			for(var $i = 48; $i <= 57; $i++) {

				$arr.push(String.fromCharCode($i));
			}
			for(var $i = 97; $i <= 122; $i++) {
				$arr.push(String.fromCharCode($i));
			}

			for(var $i = 0; $i < 4; $i++) {
				var $numRandom = parseInt(Math.random() * $arr.length);
				if($numRandom > 9) {
					var $bostop = Math.random() > 0.5 ? true : false;
					if($bostop) {
						$str += $arr[$numRandom].toUpperCase();
					} else {
						$str += $arr[$numRandom];
					}
				} else {
					$str += $arr[$numRandom];
				}
			}
			$ranyzm.html($str);
		});
		$yzm();
		$('.changeyzm').on('click', function() {
			$yzm();
		});
	})();;
	(function() {
		var $exp = null;
		var $input = $('input');
		var $password1 = $('.password1');
		var $password2 = $('.password2');
		$input.on('focus', function() {
			$(this).parent().next('.err_box').find('div').show();
		});
		$input.on('blur', function() {
			if($(this).attr('placeholder') == '请输入手机号码') {
				$exp = /^1[3789]\d{9}$/;
			} else if($(this).attr('placeholder') == '请输入密码') {
				$exp = /\w/;
			} else if($(this).attr('placeholder') == '请再次输入密码') {
				$exp = /\w/;
			} else {
				$exp = /\w/;
			}
			if($exp.test($(this).val())) {
				$(this).parent().next('.err_box').find('div').hide();

				if($password1.val() == $password2.val()) {

				} else {
					$password2.parent().next('.err_box').find('div').html('两次输入密码不一致');
				}
				if($('.picyzm').val().toLowerCase() == $('.ranyzm').html().toLowerCase()) {
					$('.picyzm').parent().parent().find('.err_box').find('div').html('√');
				} else {
					$('.picyzm').parent().parent().find('.err_box').find('div').html('验证码错误');

				}
				$(this).parent().next('.err_box').find('div').css('color', '#8c8c8c');
				if($(this).attr('placeholder') == '请输入手机号码') { //查询数据是否已经存在数据库中
					$.ajax({
						url: "http://127.0.0.1/js/work/happyGo/php/logon.php?__hbt=1526522169802",
						data: {
							phoneyz: $(this).val()
						}
					}).done(function(d) {
						console.log(d);
						$('.phone_err').html(d);

					}).fail(function() {

					});

				}
				$(this).parent().next('.err_box').find('div').html('√');
			} else {
				if($password1.val() == $password2.val()) {

				} else {
					$password2.parent().next('.err_box').find('div').html('两次输入密码不一致');
				}

				$(this).parent().next('.err_box').find('div').html('格式错误');
				$(this).parent().next('.err_box').find('div').css('color', 'red');

			}

		});
	})();;;
	(function() {
		var $from = $('.form form');
		var $bestop = false;
		//		console.log($simbit);

		$from.on('submit', function() {
			if($('.userphone').find('.err_box').find('div').html() == '√') {
				$bestop=true;
			}else{
				$bestop=false;	
			}
			if($('.psd1').find('.err_box').find('div').html() == '√') {
				$bestop=true;
			}else{
				$bestop=false;
			}
			if($('.psd2').find('.err_box').find('div').html() == '√') {
				$bestop=true;
			}else{
				$bestop=false;
			}
			if($('.img_yzm').find('.err_box').find('div').html() == '√') {
				$bestop=true;
			}else{
				$bestop=false;		
			}
			if($bestop ==false) {
				
				return false;
			}
		});
	})();
});