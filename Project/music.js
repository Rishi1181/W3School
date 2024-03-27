let audio = new Audio();
let MBOX = document.getElementById("M-BOX")
let playButton = Array.from(document.getElementsByClassName("playButton"));
let progressBar = document.getElementsByClassName("progressBar");
let globalIndex = 0;
let s = 0

let musicContent = [
    { songName: "DAVID GUETTA MIAMI ULTRA", src: "songs/1.mp3" },
    { songName: "DAVID GUETTA MIAMI ULTRA2", src: "songs/2.mp3" },
    { songName: "DAVID GUETTA MIAMI ULTRA3", src: "songs/3.mp3" },
    { songName: "DAVID GUETTA MIAMI ULTRA4", src: "songs/4.mp3" },
    { songName: "DAVID GUETTA MIAMI ULTRA5", src: "songs/5.mp3" },
    { songName: "DAVID GUETTA MIAMI ULTRA6", src: "songs/6.mp3" },
    { songName: "DAVID GUETTA MIAMI ULTRA7", src: "songs/7.mp3" },
    { songName: "DAVID GUETTA MIAMI ULTRA8", src: "songs/8.mp3" },
    { songName: "DAVID GUETTA MIAMI ULTRA9", src: "songs/9.mp3" },
    { songName: "DAVID GUETTA MIAMI ULTRA10", src: "songs/10.mp3" },
];

musicContent.forEach((song, index) => {
    var audio = new Audio(song.src);
    audio.addEventListener('loadedmetadata', function () {
        var minutes = Math.floor(Math.floor(audio.duration) / 60);
        var seconds = Math.floor(audio.duration) % 60;
        var formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        musicContent[index].time = formattedTime;
        progressBar[index].firstElementChild.nextElementSibling.max = parseInt(audio.duration)
        progressBar[index].lastElementChild.innerHTML = musicContent[index].time
    });
});


function gif() {
    Array.from(progressBar).forEach((element) => {
        element.parentElement.nextElementSibling.firstElementChild.style.visibility = "hidden";
    })
}



playButton.forEach((element, i) => {

    element.addEventListener("click", (e) => {
        globalIndex = i;
        audio.src = musicContent[i].src;

        progressBar[globalIndex].firstElementChild.nextElementSibling.addEventListener("input", () => {
            audio.currentTime = progressBar[globalIndex].firstElementChild.nextElementSibling.value;
        });

        if (e.target.tagName === "I" && e.target.classList.contains("fa-pause")) {
            PlayPause();
            e.target.classList.remove("fa-pause");
            e.target.classList.add("fa-play");
            audio.pause();
            gif();
        }

        else if (e.target.tagName === "I") {
            PlayPause()
            e.target.classList.add("fa-pause")
            e.target.classList.remove("fa-play")
            audio.play()
            gif();
            progressBar[globalIndex].parentElement.nextElementSibling.firstElementChild.style.visibility = "visible";
            progressBar[globalIndex].parentElement.nextElementSibling.firstElementChild.style.opacity = "1";
            audio.addEventListener("loadedmetadata", function () {
                audio.currentTime = parseInt(progressBar[globalIndex].firstElementChild.nextElementSibling.value);
            });
        }
    });

});

function PlayPause() {
    playButton.forEach((unit) => {
        unit.classList.remove("fa-pause");
        unit.classList.add("fa-play");
    });
};

audio.addEventListener("timeupdate", (e) => {
    let l = parseInt(audio.currentTime);
    console.log(audio.src);
    for (let index = 0; index < musicContent.length; index++) {
        if (audio.src === "http://127.0.0.1:5500/" + musicContent[index].src || audio.src === "https://rishi1181.github.io/SnapSage/" + musicContent[index].src) {
            if (audio.currentTime === 0) {
                console.log("hr");
            } else {
                progressBar[index].firstElementChild.nextElementSibling.value = l;
                audio.volume = progressBar[index].nextElementSibling.lastElementChild.value / 10
            }
        };
    };
    for (let index = 0; index < musicContent.length; index++) {
        let value = parseInt(progressBar[index].firstElementChild.nextElementSibling.value)
        let minutes = parseInt(value / 60)
        let seconds = () => {
            if (audio.currentTime > 60) {
                s = parseInt(value - (minutes * 60))
            } else {
                s = parseInt(value)
            }
        }
        seconds();
        let formattedTime = `${String(minutes).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        progressBar[index].firstElementChild.innerHTML = formattedTime
    }
});







