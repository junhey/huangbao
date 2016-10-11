$(function($) {
	//header 点击跳转
	$('.weibo').on('click',function(){alert("weibo")});
	$('.wechat').on('click',function(){alert("wechat")});
	$('.qq').on('click',function(){alert("qq")});
	//下拉菜单
	$('.nav_cont ul li').hover(function() {
		$(this).children('a').addClass('li_hover');
		$(this).find('dl').slideDown();
	},
	function() {
		$(this).children('a').removeClass('li_hover');
		$(this).find('dl').slideUp();
	});
	//banner的遮幕效果
	$('.banner').mousemove(function() {
		$(this).css('opacity', '0.9')
	});
	$('.banner').mouseleave(function() {
		$(this).css('opacity', '1')
	});

	// news图片轮播代码 采用了html5的sessionStorage存储
	var index;
	var storage = window.sessionStorage;
	storage['index'] = 0;
	var ulObj = $('.news_cont ul');
	var liObj = $('.news_cont ul li');
	$('.pre_page').click(function() {
		index = parseInt(storage['index']);
		index = index - 1;
		console.log(index);
		if (index <= liObj.length && index >= 0) {
			liObj.eq(index).show(1000);
			liObj.eq(index + 3).hide(1000);
			storage['index'] = index;
			console.log(parseInt(storage['index']));
		} else {
			index = 0;
		}

	});
	$('.next_page').click(function() {
		index = parseInt(storage['index']);
		console.log(index);
		if (index + 3 < liObj.length) {
			liObj.eq(index).hide(1000);
			liObj.eq(index + 3).show(1000);
			index = index + 1;
			storage['index'] = index;
			console.log(parseInt(storage['index']));
		} else {
			index = 0;
		}
	});
	//实现左右按钮根据窗口大小来进行适配
	$('.pre_page').css("left", $(document).width() * 0.0889);
	$('.next_page').css("right", $(document).width() * 0.0889);

});