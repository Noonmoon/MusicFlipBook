/*
 * audio handling
*/


$('#magazine').turn({
	display: 'double',
	elevation:70,
	duration:1000,
	when: {
		turned: function(e, page) {
			let view = $(this).turn('view');

			stop_aud();
			switch (view[0]) {
				case 6:
					$('#two').css('display', 'block')
					document.getElementById('two').play();
					break;
				case 10:
					$('#four').css('display', 'block')
					document.getElementById('four').play();
					break;
				default:
					$('audio').css('display', 'none')
			}
		}
	}
});

function stop_aud() {
	var sounds = document.getElementsByTagName('audio');
	
	for (let i = 0; i < sounds.length; i++) {
		sounds[i].pause();
		sounds[i].currentTime = 0;
	}
}

/*
 * Navigation
*/

$(window).bind('keydown', function(e){
		
	if (e.keyCode==37)
		$('#magazine').turn('previous');
	else if (e.keyCode==39)
		$('#magazine').turn('next');
		
});

$('#toc').children().click(function() {
	let book = $('#magazine');
	let index = $('#toc').children().index(this);

	switch (index) {
		case 0:
			book.turn('page', 6);
			book.turn('stop');
			break;
		case 1:
			book.turn('page', 10);
			book.turn('stop');
			break;
		case 2:
			book.turn('page', 0)
			break;
		case 3:
			book.turn('page', 0)
			break;
		case 4:
			book.turn('page', 0)
			break;
		case 5:
			book.turn('page', 0)
			break;
	}
})
