;(function($) {
	'use srtict';

	$('document').ready(function() {
	console.log('document is ready');
});

	$('.menu-toggle').on('click', function() {
		console.log('click');

		$('.main-nav__list').slideToggle(300, function() {
			// console.log($(this).css('display'));

			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}

		});
	});
})($);


;(function($) {
	'use srtict';

	$(document).ready(function(){
		$('.works-slider').slick({
			infinite: true,
			speed: 300,
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	});
})($);


;(function($) {
	'use srtict';

	$(document).ready(function(){
		$('.team-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
	    		{
				breakpoint: 1024,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
					}
	    		},
				{
				breakpoint: 800,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1
					}
				},
				{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
					}
				},
				{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
					}
				}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
		]
		});
	});
})($);


;(function($){
	'use strict';

	var mapElement = document.getElementById('map');
	var center = {lat: 49.5687784, lng: 34.5841752};  //центр карты
	var markerPosition = {lat: 49.572164, lng: 34.5821285};
	var map = new google.maps.Map(mapElement,{zoom: 15, center: center});
	var marker = new google.maps.Marker({position: markerPosition, map: map, icon: '../img/marker.png'}); 

})($);