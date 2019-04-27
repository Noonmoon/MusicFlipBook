/*
 * audio handling
 */


$('#magazine').turn({
	display: 'double',
	elevation: 70,
	duration: 1000,
	when: {
		turned: function(event, page, pageObject) {
			$('#magazine').turn('stop')
		}
	}
});

$("#magazine").bind("turning", function(event, page, view) {
	stop_aud();

	switch (view[0]) {
		case 6:
			$('#two').css('visibility', 'visible')
			document.getElementById('two').play();
			break;
		case 10:
			$('#four').css('visibility', 'visible')
			document.getElementById('four').play();
			break;
		case 14:
			$('#four').css('visibility', 'visible')
			document.getElementById('four').play();
			break;
		default:
			$('audio').css('visibility', 'hidden')
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
			book.turn('page', 6);
			break;
		case 1:
			book.turn('page', 10);
			break;
		case 2:
			book.turn('page', 14)
			break;
		case 3:
			book.turn('page', 18)
			break;
		case 4:
			book.turn('page', 22)
			break;
		case 5:
			book.turn('page', 26)
			break;
	}
});




