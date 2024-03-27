let cardElements = Array.from(document.getElementsByClassName("card"));
let cardgroup = document.getElementById("card-group");
let prev = document.getElementsByClassName("btn-1")[0]
let next = document.getElementsByClassName("btn-2")[0]
let size;


function updateScreenWidth() {
    let screenWidth = window.innerWidth;
    console.log(screenWidth < 976);
    console.log('Screen Width: ' + screenWidth);
    if (screenWidth < 976 && screenWidth > 776) {
        size = 41;
    } else if (screenWidth < 776) {
        size = 81
    } else {
        size = 27;
    }
}
updateScreenWidth();

window.addEventListener('resize', updateScreenWidth);
cardElements.forEach((element) => {
    function slider(a) {
        element.style.transition = "all 1s";
        if (a === (cardElements.length - 2) * size) {
            element.style.transition = "";
            element.style.transform = `translateX(0vw)`;
            a = 0;
        }
        element.style.transform = `translateX(${-a}vw)`;
        setTimeout(() => {
            slider(a + size);
        }, 3000);
    }
    clearTimeout(element.timeoutID);
    slider(size);
});






