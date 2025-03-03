
//Go to searchbar when slash is pressed!!!
let val1 = "";

document.body.addEventListener("keydown", ()=>{
    search_bar = document.getElementsByClassName("search-bar")[0]
    if (event.key === "/"){
        val1 = document.getElementsByClassName("search-bar")[0].value;
        document.getElementsByClassName("search-bar")[0].focus();
        document.getElementsByClassName("search-bar")[0].value = val1;

    }

})
document.body.addEventListener("keyup", ()=>{
    if (event.key === "/"){
        // val1 = document.getElementsByClassName("search-bar")[0].value;
        document.getElementsByClassName("search-bar")[0].value = val1;
    }

    else if (event.key === "ArrowUp"){
        n = (song.volume>0.93) ? 1 : song.volume+ 0.07
        
        unmute(n)
    }

    else if (event.key ==="ArrowDown"){
        song.volume -= 0.07;
        volumeSlider.value -= 7;

        if (song.volume<0.07){
            mute();
        }
    }

    else if (event.key === " "){
        pauseplay();
    }

    else if (event.key === "m"){
        if (song.volume){
            mute();
        }
        else{
            unmute(0.2);
        }
    }

    volumeSlider.style = `background: linear-gradient(to right, #ffffff 0%, #ffffff ${volumeSlider.value}%, rgba(150, 150, 150, 0.621) ${volumeSlider.value}%, rgba(150, 150, 150, 0.621) 100%);`;

})