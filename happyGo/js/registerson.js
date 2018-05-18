require.config({
	paths: {
		'jquery': 'jquery-1.12.4.min', //去掉扩展名。
	}
});
define(['jquery'], function() {;
	(function() {
		var $loginbox1 = $('.login1');
		var $loginbox2 = $('.login2');
		var $input = $('input');
		$('#radio1').on('click', function() {
			$loginbox1.addClass('mc1').siblings('.mc').removeClass('mc1');
		})
		$('#radio2').on('click', function() {
			$loginbox2.addClass('mc1').siblings('.mc').removeClass('mc1');
		});
		$input.on('focus', function() {
			$(this).parent().next('.err_box').find('div').show();
		});
		$input.on('blur', function() {
			var $reg=null;
			if($(this).attr('placeholder')=='请输入手机号码'){
				$reg = /^1[3789]\d{9}$/;
			}else if($(this).attr('placeholder')=='请输入短信验证码'){
				$reg = /\d/;
			}else{
				$reg = /\w/;	
			};
				if($reg.test($(this).val())) {
					$(this).parent().next('.err_box').find('div').hide();
					$(this).parent().next('.err_box').find('div').html('√');
					$(this).parent().next('.err_box').find('div').css('color', '#8c8c8c');
					
				} else {
					$(this).parent().next('.err_box').find('div').html('格式错误');
					$(this).parent().next('.err_box').find('div').css('color', 'red');

				}

		});
	})();
});