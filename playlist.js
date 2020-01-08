var WaveSurfer = window.WaveSurfer;

var wavesurfer;

// Init on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#fffb9d',
        progressColor: '#d5751f',
        height: 120,
        barWidth: 3,
	// partialRender: true,
	responsive: true,
	normalize: true,
	scrollParent: true,
        // backend: 'MediaElement',
	hideScrollbar:true,
	plugins: [
		WaveSurfer.timeline.create({
			container: "#wave-timeline",
			    primaryColor: 'orange',
			    secondaryColor: 'red',
			    primaryFontColor: 'blue',
			    secondaryFontColor: 'red'
		}),
		WaveSurfer.mediasession.create({
			metadata: {
			    title: '',
			    artist: 'Broken Hearts on Ice',
			    album: 'Upward Fall'
			}
		}),
        WaveSurfer.regions.create({
            dragSelection: false
        })
	]
    });
    /* Progress bar */
    (function() {
        var progressDiv = document.querySelector('#progress-bar');
        var progressBar = progressDiv.querySelector('.progress-bar');

        var showProgress = function(percent) {
            progressDiv.style.display = 'block';
            progressBar.style.width = percent + '%';
        };

        var hideProgress = function() {
            progressDiv.style.display = 'none';
        };

        wavesurfer.on('loading', showProgress);
        wavesurfer.on('ready', hideProgress);
        wavesurfer.on('destroy', hideProgress);
        wavesurfer.on('error', hideProgress);

	wavesurfer.on('play', hideProgress);
	wavesurfer.on('pause', hideProgress);
	wavesurfer.on('waveform-ready', hideProgress);

    })();
});

// Bind controls
document.addEventListener('DOMContentLoaded', function() {
    var playPause = document.querySelector('#playPause');
    playPause.addEventListener('click', function() {
        wavesurfer.playPause();
    });

    // Toggle play/pause text
    wavesurfer.on('play', function() {
        document.querySelector('#play').style.display = 'none';
        document.querySelector('#pause').style.display = '';
    });
    wavesurfer.on('pause', function() {
        document.querySelector('#play').style.display = '';
        document.querySelector('#pause').style.display = 'none';
    });

    // The playlist links
    var links = document.querySelectorAll('#playlist a');
    var currentTrack = 0;

    // Load a track by index and highlight the corresponding link
    var setCurrentSong = function(index) {
	    links[currentTrack].classList.remove('active');
        currentTrack = index;
        links[currentTrack].classList.add('active');
        switch (index) {
            case 1:
            cred1.innerHTML = 'Featuring:<br> Tyler Dinner and Joseph Werle<br>Acoustic Guitars';
            break
            case 2:
            cred1.innerHTML = 'Featuring:<br> Michael and Tyler Dinner<br>Acoustic Guitars';
            case 0:
            default:
            break
        }
        wavesurfer.load(links[currentTrack].href);
    };
    // Load the track on click
    Array.prototype.forEach.call(links, function(link, index) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            setCurrentSong(index);
        });
    });

    // Play on audio load
    wavesurfer.on('ready', function() {
        wavesurfer.play();
    });

    // Go to the next track on finish
    wavesurfer.on('finish', function() {
       	setCurrentSong((currentTrack + 1) % links.length);
    });

    // Load the first track
    setCurrentSong(currentTrack);

});
