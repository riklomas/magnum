// console.log('global.js loaded');

$(document).ready(function() {
	
	// adding js body class for styling javascript functionality
	$('body').addClass('js');
	
	// adding ARIA landmark roles for accessibility
	$('#header').attr('role', 'banner');
	$('.nav').attr('role', 'navigation');
	$('#content').attr('role', 'main');
	$('.aside').attr('role', 'complementary');
	$('#footer').attr('role', 'contentinfo');
	$('#search').attr('role', 'search');
	
});
