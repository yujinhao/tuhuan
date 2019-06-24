$(function() {

	$('header').load('../commonhtml/header.html')
	$('footer').load('../commonhtml/footer.html')

	//01.布局
	//02.点击按钮切换图片
	//   picBtn绑定点击事件   遍历数组    for
	//   封装函数 bind函数 绑定事件
	//   得到按钮的索引值
	//   封装了changePic函数   根据索引值改变图片的透明度
	//03.自动轮播 ，每间隔2s换一张图片显示
	//   setInterval  设置一个全局的iNow 控制显示图片的索引
	//   为了确保 点击事件 和自动轮播的图片 能契合 
	//   点击的 时候  index 赋值给 iNow
	//04.向前跳转&向后
	//   oBefore click  iNow--

	var iNow = 0;
	var timer;
	var inow = 0;

	slider();
	$('.iphone-btn').click(function(event) {
		var num = $(this).index(); //取索引值
		//点击的时候，清除自动播放，
		clearInterval(timer);
		//改变当前图片
		changPic(num);
		iNow = num; //改完接着当前图片索引值执行自动播放
		inter()

	})

	function changPic(pic) {
		//先遍历，把所有隐藏
		for(var j = 0; j < $('.iphone-btn').length; j++) {
			$('.iphonepic').eq(j).css('opacity', '0');
			$('.iphone-btn ').eq(j).children('img').css('background', 'transparent');
			$('.bannertxt').eq(j).css('opacity', '0');
			//			$('.bannertxt').eq(pic).css('animation', '');
			$('.bannertxt').eq(j).removeClass('current');

			if(j == pic) {
				//当前的显示

				$('.iphonepic').eq(pic).css('opacity', '1');
				$('.iphone-btn ').eq(pic).children('img').css('background', '#41b77b');

				$('.bannertxt').eq(pic).css('opacity', '1');
				$('.bannertxt').eq(pic).addClass('current').siblings('.bannertxt').removeClass('current');
				//				$('.bannertxt').eq(pic).css('animation', 'animateright 1s linear');
			}
		}
	}
	

	function inter() {
		timer = setInterval(function() {
			iNow++;
			if(iNow > 4) {
				iNow = 0;
			}
			changPic(iNow)

		}, 2500)
	}

	function slider() {
		inter();

	}



//无限循环轮播。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
	//	changleft();
	indexx()

	var inow = 0;
	$('#myslide-next').click(function() {
		clearInterval(timerr)
		inow++;
		if(inow > $('.myslidepic').length - 5) {
			inow = 0
			$('#myslide-ul').css('transition', '')

		}	$('.myslidepic').eq(inow + 2).children('p').addClass('disp').parent().siblings().children('p').removeClass('disp');
		$('.myslidepic').eq(inow + 2).children('img').addClass('tranpic').parent().siblings().children('img').removeClass('tranpic');
		changleft();
		indexx()
	})

	$('#myslide-before').click(function() {
		clearInterval(timerr)
		inow--;
		if(inow < 0) {
			inow = $('.myslidepic').length - 5;
			$('#myslide-ul').css('transition', '')

		}
			$('.myslidepic').eq(inow + 2).children('p').addClass('disp').parent().siblings().children('p').removeClass('disp');
		$('.myslidepic').eq(inow + 2).children('img').addClass('tranpic').parent().siblings().children('img').removeClass('tranpic');
		changleft();
		indexx()
	})

	function changleft() {
		//		inow++;

		var nowleft = -inow * 234;
		var tnowleft = nowleft + 'px';
		$('#myslide-ul').css('left', tnowleft);

	}

	function indexx() {
		$('.myslidepic').eq(inow + 2).children('img').addClass('tranpic')
		$('.myslidepic').eq(inow + 2).children('p').addClass('disp')
		timerr = setInterval(function() {
			inow++;
			console.log('aaa')
			if(inow > $('.myslidepic').length - 5) {
				inow = 0;
				changleft()

				//跳转回来取消过渡效果！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！注意！！！！！！！！！！！！
				$('#myslide-ul').css('transition', '')
				$('.myslidepic').eq(inow + 2).children('p').addClass('disp')
				$('.myslidepic').eq(inow + 2).children('img').addClass('tranpic')
			} else {
				changleft()
				//		$('.myslidepic').children('img').eq(inow+3).css('transform','scale(1.5)')
				$('#myslide-ul').css('transition', 'left 2s')
				$('.myslidepic').eq(inow + 2).children('img').addClass('tranpic').parent().siblings().children('img').removeClass('tranpic');
				
				$('.myslidepic').eq(inow + 2).children('p').addClass('disp').parent().siblings().children('p').removeClass('disp');
			console.log('bbb')
			}

		}, 3000)
	}

})