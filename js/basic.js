/*
 * Basic sample
*/

$('#flipbook').turn({

	// Elevation

	elevation: 50,
	
	// Enable gradients

	gradients: true,
	
	// Auto center this flipbook

	autoCenter: true

});

$("#flipbook").bind("turned", function(event, page, view) {
	console.log("Page: "+view[0]);
	switch (view[0]) {
		case 0:
			$('.audio').css('display', 'none')
			break;
		case 2:
			$('#two').css('display', 'block')
			break;
		case 4:
			$('#four').css('display', 'block')
			break;
		default:
			$('audio').css('display', 'none')
	}
});





