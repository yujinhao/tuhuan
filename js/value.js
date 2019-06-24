$(function() {

	$('header').load('../commonhtml/header.html')
	$('footer').load('../commonhtml/footer.html')

	$(window).scroll(function() {
		var st = $(this).scrollTop();
		console.log(st);
		if(st >= 150) {
			$(".circleChart#circle1").circleChart({

				value: 40,
				text: 0,
				onDraw: function(el, circle) {
					circle.text(Math.round(circle.value) + "%");
				}
			});

			$(".circleChart#circle2").circleChart({

				value: 85,
				text: 0,
				onDraw: function(el, circle) {
					circle.text(Math.round(circle.value) + "%");
				}
			});

			$(".circleChart#circle3").circleChart({

				value: 20,
				text: 0,
				onDraw: function(el, circle) {
					circle.text(Math.round(circle.value) + "%");
				}
			});

			$(".circleChart#circle4").circleChart({

				value: 60,
				text: 0,
				onDraw: function(el, circle) {
					circle.text(Math.round(circle.value) + "%");
				}
			});
		}

	});

})