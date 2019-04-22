/*
 * Basic sample
*/

$('#flipbook').turn({

	// Elevation

	elevation: 50,
	
	// Enable gradients

	gradients: true,
	
	// Auto center this flipbook

	autoCenter: true,

	when: {
		turning: function(e, page, view) {
			
			var book = $(this),
					currentPage = book.turn('page'),
					pages = book.turn('pages');

			if (currentPage>3 && currentPage<pages-3) {
				if (page==1) {
					book.turn('page', 2).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				} else if (page==pages) {
					book.turn('page', pages-1).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				}
			} else if (page>3 && page<pages-3) {
				if (currentPage==1) {
					book.turn('page', 2).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				} else if (currentPage==pages) {
					book.turn('page', pages-1).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				}
			}
		},

		turned: function(e, page, view) {

			var book = $(this);

			stop_aud();
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

		}
	}
});


function numberOfPages(book) {
	return book.turn('pages') / 2 + 1;
}

function stop_aud() {
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i<sounds.length; i++) sounds[i].pause();
}


	


