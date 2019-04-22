/*
 * Basic sample
*/


$('#magazine').turn({
	display: 'double',
	elevation:70,
	duration:1000,
	when: {
		turned: function(e, page) {
			/*console.log('Current view: ', $(this).turn('view'));*/

			stop_aud();
			// switch (view[0]) {
			// 	case 0:
			// 		$('audio').css('display', 'none')
			// 		break;
			// 	case 2:
			// 		$('#two').css('display', 'block')

			// 		$('#four').css('display', 'none')
			// 		break;
			// 	case 4:
			// 		$('#two').css('display', 'none')
			// 		$('#four').css('display', 'block')
			// 		break;
			// 	default:
			// 		$('audio').css('display', 'none')
			// }
		}
	}
});

$(window).bind('keydown', function(e){
		
	if (e.keyCode==37)
		$('#magazine').turn('previous');
	else if (e.keyCode==39)
		$('#magazine').turn('next');
		
});

function stop_aud() {
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i<sounds.length; i++) sounds[i].pause();
}

