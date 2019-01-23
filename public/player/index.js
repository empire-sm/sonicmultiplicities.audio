var WaveSurfer = window.WaveSurfer;

// Init & load audio file
document.addEventListener('DOMContentLoaded', function() {
    wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        plugins: [
        ]
    });

    // Load audio from URL
    wavesurfer.load('../releases/Upward.Fall/320/01 Head in the Sand.mp3')
    wavesurfer.on('ready', function () {
	      wavesurfer.play()
    })


    // wavesurfer.load('../media/demo.wav');

    // Play button
    // var button = document.querySelector('[data-action="play"]');

    // button.addEventListener('click', wavesurfer.playPause.bind(wavesurfer));
});

/* ... initialising waveform with plugins
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    plugins: [
    ]
})

wavesurfer.on('ready', function () {
      wavesurfer.play()
})

wavesurfer.load('../releases/Upward.Fall/320/01.Head.in.the.Sand.mp3')

*/
