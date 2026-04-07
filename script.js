//your JS code here. If required.
let audio;

function playSound(name) {
    audio = new Audio("sounds/" + name);
    audio.play();
}

function stopSound() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}