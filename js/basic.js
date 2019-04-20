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


function stop_aud() {
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i<sounds.length; i++) sounds[i].pause();
}

$("#flipbook").bind("turned", function(event, page, view) {
	stop_aud()

	switch (view[0]) {
		case 0:
			$('audio').css('display', 'none')
			break;
		case 2:
			$('#two').css('display', 'block')
			$('#four').css('display', 'none')
			break;
		case 4:
			$('#two').css('display', 'none')
			$('#four').css('display', 'block')
			break;
		default:
			$('audio').css('display', 'none')
	}
});


