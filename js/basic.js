/*
 * audio handling
 */


$('#magazine').turn({
	display: 'double',
	elevation: 70,
	duration: 1500,
	when: {
		turned: function(event, page, pageObject) {
			let view = $('#magazine').turn('view')
			console.log(view[0])


		}
	}
});

$("#magazine").bind("turning", function(event, page, view) {
	stop_aud();
	$('#my-video').css('display', 'none')

	if (view[0] == 4 || view[0] == 6) {
		$('#two').css('display', 'none')
		$('#one').css('display', 'block')
	} else if (view[0] == 8 || view[0] == 10) {
		$('#one').css('display', 'none')
		$('#three').css('display', 'none')
		$('#two').css('display', 'block')
	} else if (view[0] == 12 || view[0] == 14) {
		$('#two').css('display', 'none')
		$('#four').css('display', 'none')
		$('#three').css('display', 'block')
	} else if (view[0] == 16 || view[0] == 18) {
		$('#three').css('display', 'none')
		$('#five').css('display', 'none')
		$('#four').css('display', 'block')
	} else if (view[0] == 20 || view[0] == 22) {
		$('#four').css('display', 'none')
		$('#six').css('display', 'none')
		$('#five').css('display', 'block')
	} else if (view[0] == 24 || view[0] == 26) {
		$('#five').css('display', 'none')
		$('#seven').css('display', 'none')
		$('#six').css('display', 'block')
	} else if (view[0] == 28 || view[0] == 30) {
		$('#six').css('display', 'none')
		$('#eight').css('display', 'none')
		$('#seven').css('display', 'block')
	} else if (view[0] == 36 || view[0] == 38) {
		$('#eight').css('display', 'block')
	} else if (view[0] == 42) {
		$('#eight').css('display', 'none')
		$('#my-video').css('display', 'block')
		$('#magazine').turn('stop')
	} else {
		$('audio').css('display', 'none')
	}

	switch (view[0]) {
		case 6:
			document.getElementById('one').play();
			break;
		case 10:
			document.getElementById('two').play();
			break;
		case 14:
			document.getElementById('three').play();
			break;
		case 18:
			document.getElementById('four').play();
			break;
		case 22:
			document.getElementById('five').play();
			break;
		case 26:
			document.getElementById('six').play();
			break;
		case 30:
			document.getElementById('seven').play();
			break;
		case 38:
			document.getElementById('eight').play();
			break;
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




