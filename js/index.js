$(function() {

	//	var banlong= $('.sebanbtn').length;
	//	console.log(banlong);
	//	for (var i =0; i<$('.sebanbtn').length;i++) {
	//		console.log(i)
	//		bind(i)
	//	}
	//	

	var iNow = 0;
	var timer;
	inter()

	function bind() {

		$('.sebanbtn').click(function() {
			clearInterval(timer)
			iNow = $('.sebanbtn').index(this);
			//		console.log(h)
			//		var s = h+1;
			//		
			//		var path ='img/banner/sebanner'+s+'.jpg';
			//		
			//		$('.sebannerimg').attr("src",path);
			changPic()
			inter()
		})
	}

	bind();

	function changPic() {
		var s = iNow + 1;
		var path = 'img/banner/sebanner' + s + '.jpg';
		$('.sebannerimg').attr("src", path);
		$('.sebanbtn:eq(s)').addclass('')
	}

	function inter() {
		timer = setInterval(function() {
			iNow++;
			if(iNow > $('.sebanbtn').length - 1) {
				iNow = 0;
			}
			changPic()
		}, 1500)
	}

})