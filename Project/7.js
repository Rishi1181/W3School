let animation = document.getElementsByClassName("animation")[0]
let slideh2 = document.querySelector(".animation h2")
let slideP = document.querySelector(".animation p")
let slidea = document.querySelector(".animation a")
let slidea2 = animation.lastElementChild.previousElementSibling



function silde(a) {
    slideh2.style.transform = 'translateY(50px)';
    slideP.style.transform = 'translateY(50px)';
    slidea.style.transform = 'translateY(50px)';
    slidea2.style.transform = 'translateY(50px)';
    slideh2.style.opacity = '0';
    slideP.style.opacity = '0';
    slidea.style.opacity = '0';
    slidea2.style.opacity = '0';

    setTimeout(() => {
        slideh2.style.opacity = '1';
        slideh2.style.transition = "all 0.5s"
        slideh2.style.transform = `translateY(${a}px)`;
    }, 500)

    setTimeout(() => {
        slideP.style.opacity = '1';
        slideP.style.transition = "all 0.5s"
        slideP.style.transform = `translateY(${a}px)`;
    }, 1000)

    setTimeout(() => {
        slidea.style.opacity = '1';
        slidea2.style.opacity = '1';
        slidea.style.transition = "all 0.5s"
        slidea2.style.transition = "all 0.5s"
        slidea.style.transform = `translateY(${a}px)`;
        slidea2.style.transform = `translateY(${a}px)`;
    }, 1500)

    setTimeout(() => {
        slideh2.style.transition = "";
        slideP.style.transition = "";
        slidea.style.transition = "";
        slidea2.style.transition = "";
        slideh2.style.transform = 'translateY(50px)';
        slideP.style.transform = 'translateY(50px)';
        slidea.style.transform = 'translateY(50px)';
        slidea2.style.transform = 'translateY(50px)';
    }, 5999)
    setTimeout(() => silde(0), 6000);
}
silde(0)

let h2 = `<span class="text-danger">Music</span> for everyone.`

let h2b = `<span class="text-danger">Listen </span> to new music.`

let innerText = ()=>{
    if(slideh2.innerHTML === ""){
        slideh2.innerHTML = h2
    }else if(slideh2.innerHTML === h2){
        slideh2.innerHTML = h2b
    }else{
        slideh2.innerHTML = h2
    }
    setTimeout(innerText, 6000)
}
innerText()