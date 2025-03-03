const song = document.getElementById("current-song-audio");
const playbutton = document.getElementById("playpause");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const slider = document.getElementById("song-progress");
const volumeSlider = document.getElementById("volume-slider");


playing = 0;
song.volume = 0.8;
volumeSlider.style = `background: linear-gradient(to right, #ffffff 0%, #ffffff ${volumeSlider.value}%, rgba(150, 150, 150, 0.621) ${volumeSlider.value}%, rgba(150, 150, 150, 0.621) 100%);`;




function pauseplay() {
    console.log("Play registered");
    if (!playing){
        document.getElementById("duration").innerText = secsAndMinsfromSecs(song.duration);
console.log(song.duration)
        playing = 1;
        playbutton.getElementsByTagName("img")[0].src = "SVGs/pause.svg";
        playbutton.getElementsByTagName("img")[0].style = "margin-left: 1px; height: 20px;";
        song.play()

    }

    else{
        playing = 0;
        playbutton.getElementsByTagName("img")[0].src = "SVGs/play-button.svg";
        playbutton.getElementsByTagName("img")[0].style = "";
        song.pause()
    }
}


function secsAndMinsfromSecs(sometime) {
    seconds = String(Math.floor(sometime%60)).padStart(2, "0");
    minutes = String(Math.floor(sometime/60)).padStart(2, "0");
    return `${minutes}:${seconds}`
}


song.addEventListener("timeupdate", ()=>{
    let songProgress = (song.currentTime/song.duration)*100;
    slider.style = `background: linear-gradient(to right, #ffffff 0%, #ffffff ${songProgress}%, rgba(150, 150, 150, 0.621) ${songProgress}%, rgba(150, 150, 150, 0.621)  100%);`
    document.getElementById("currentTime").innerText = secsAndMinsfromSecs(song.currentTime)
})

slider.addEventListener("input", ()=>{
    console.log(slider.value)
    song.currentTime = (slider.value * song.duration/100);
    let songProgress = (song.currentTime / song.duration) * 100;
    slider.style = `background: linear-gradient(to right, #ffffff 0%, #ffffff ${songProgress}%, rgba(150, 150, 150, 0.621) ${songProgress}%, rgba(150, 150, 150, 0.621) 100%);`;

})

volumeSlider.addEventListener("input", ()=>{
    song.volume = (volumeSlider.value/100);
    volumeSlider.style = `background: linear-gradient(to right, #ffffff 0%, #ffffff ${volumeSlider.value}%, rgba(150, 150, 150, 0.621) ${volumeSlider.value}%, rgba(150, 150, 150, 0.621) 100%);`;
    if (song.volume === 0){
        document.getElementById("volume-image").src = "SVGs/mute.svg";
    }
    else{
        document.getElementById("volume-image").src = "SVGs/volume.svg";
    }
})

function muteOrNot() {
    if (song.volume){
        mute()
    }
    else {
        unmute()
    }
}

function mute(){
    song.volume = 0;
    volumeSlider.value = 0;
    document.getElementById("volume-image").src = "SVGs/mute.svg";
    volumeSlider.style = `background: linear-gradient(to right, #ffffff 0%, #ffffff ${volumeSlider.value}%, rgba(150, 150, 150, 0.621) ${volumeSlider.value}%, rgba(150, 150, 150, 0.621) 100%);`;

}

function unmute(value = 0.8){
    song.volume = value;
    volumeSlider.value = value*100;
    document.getElementById("volume-image").src = "SVGs/volume.svg";
    volumeSlider.style = `background: linear-gradient(to right, #ffffff 0%, #ffffff ${volumeSlider.value}%, rgba(150, 150, 150, 0.621) ${volumeSlider.value}%, rgba(150, 150, 150, 0.621) 100%);`;

    
}
