
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

let scrollY = window.scrollY;
let currentSection = 0;

const animData = {
    "txt":""
}

const body = document.getElementsByClassName('scroll-wrapper2')[0];


let sy = 0;

let dy = sy;

function lerp(a, b, n) {
    return (1 - n) * a + n * b;
}


window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    const newSection = Math.floor(scrollY / window.innerHeight)
    if(newSection !== currentSection){
        currentSection = newSection
    }
    sy = window.scrollY/2;
    console.log(sy)

    document.getElementById(`txt${currentSection}`).style.color = `rgba(255,255,255,${1 - ((scrollY-(vars.height*currentSection))/vars.height)*4})`;
    if(currentSection === 0){
        document.getElementById(`scroll-down-txt`).style.color = `rgba(255,255,255,${1 - ((scrollY-(vars.height*currentSection))/vars.height)*16})`;
        document.getElementById(`scroll-down-img`).style.opacity = `${1 - ((scrollY-(vars.height*currentSection))/vars.height)*16}`;
    }
});


const tick = () => {
    dy = lerp(dy, sy, 0.05);
    dy = Math.floor(dy * 100) / 100;

    body.style.transform = `translate(0px, -${dy}px)`;

    window.requestAnimationFrame(tick);
}
tick();

