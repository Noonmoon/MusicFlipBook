/*
 * audio handling
 */


$('#magazine').turn({
	display: 'double',
	elevation: 70,
	duration: 1000,
	when: {
		turned: function(event, page, pageObject) {
			let view = $('#magazine').turn('view')
			console.log(view[0])


		}
	}
});

$("#magazine").bind("turning", function(event, page, view) {
	stop_aud();

	switch (view[0]) {
		case 6:
			$('#one').css('display', 'block')
			document.getElementById('one').play();
			break;
		case 10:
			$('#two').css('display', 'block')
			document.getElementById('two').play();
			break;
		case 14:
			$('#three').css('display', 'block')
			document.getElementById('three').play();
			break;
		case 18:
			$('#four').css('display', 'block')
			document.getElementById('four').play();
			break;
		case 22:
			$('#five').css('display', 'block')
			document.getElementById('five').play();
			break;
		case 26:
			$('#six').css('display', 'block')
			document.getElementById('six').play();
			break;
		case 30:
			$('#seven').css('display', 'block')
			document.getElementById('seven').play();
			break;
		case 38:
			$('#eight').css('display', 'block')
			document.getElementById('eight').play();
			break;
		case 42:
			$('#my-video').css('display', 'block')
			break;
		default:
			$('audio').css('display', 'hidden')
			$('#my-video').css('display', 'none')
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

$(window).bind('keydown', function (e) {

	if (e.keyCode == 37)
		$('#magazine').turn('previous');
	else if (e.keyCode == 39)
		$('#magazine').turn('next');

});



$('.nav').click(function () {
	let book = $('#magazine');
	let index = $(this).index();

	switch (index) {
		case 0:
			book.turn('previous');
			break;
		case 1:
			stop_aud();
			$('audio').css('visibility', 'hidden')
			book.turn('page', 2);
			break;
		case 2:
			book.turn('next');
			break;
	}
})

$(document).on('click', '.index', function (e) {
	let book = $('#magazine');
	let index = $(this).index();
	console.log(index)

	switch (index) {
		case 0:
			book.turn('page', 4);
			break;
		case 1:
			book.turn('page', 8);
			break;
		case 2:
			book.turn('page', 12)
			break;
		case 3:
			book.turn('page', 16)
			break;
		case 4:
			book.turn('page', 20)
			break;
		case 5:
			book.turn('page', 24)
			break;
		case 6:
			book.turn('page', 28)
			break;
		case 7:
			book.turn('page', 32)
			break;
		case 8:
			book.turn('page', 38)
			break;
		case 9:
			book.turn('page', 40)
			break;
	}
});




