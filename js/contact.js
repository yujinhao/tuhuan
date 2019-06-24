$(function() {

	$('header').load('../commonhtml/header.html')
	$('footer').load('../commonhtml/footer.html')

	window.onload = function() {

		//直接加载地图

		var init = function() {
			var center = new qq.maps.LatLng(30.586330, 104.056820);
			var map = new qq.maps.Map(document.getElementById('thmap'), {
				center: center,
				zoom: 14
			});
			var infoWin = new qq.maps.InfoWindow({
				map: map
			});
			infoWin.open();
			//tips  自定义内容
			infoWin.setContent('<div style="width:200px;padding-top:10px;">' +

				'四川省成都市高新区府城大道399号天府新谷7栋</div>');
			infoWin.setPosition(center);
		}
		//调用初始化函数地图
		init();

	}

})