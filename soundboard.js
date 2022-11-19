

var buttonElement1 = document.getElementById('button1');
var buttonElement2 = document.getElementById('button2');
var buttonElement3 = document.getElementById('button3');

var testAudio1 = new Audio ("quick_fart_x.wav");
var testAudio2 = new Audio ("honk_x.wav");
var testAudio3 = new Audio ("laugh_track_x.wav");

buttonElement1.addEventListener('click', function () {
    console.log('pressed button 1')
    testAudio1.play();
})

buttonElement2.addEventListener('click', function () {
    testAudio2.play();
})

buttonElement3.addEventListener('click', function () {
    testAudio3.play();
})
