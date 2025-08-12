gsap.from('.loader-lines p',{
    y:100,
    opacity:0,
    stagger:0.25,
    duration:0.8
})

gsap.from('#loader-line-1-counter',{
    opacity:0,
    duration:0.6
})

gsap.from('#loader-line-1-counter-remaining-part',{
    opacity:0,
    duration:0.6
})


const counter = document.querySelector('#loader-line-1-counter')
let count = 0;
const fxnID1 = setInterval(() => {
    if (count < 100){
        count++
    } else {
        clearInterval(fxnID1)
    }
    counter.innerText = count;
},24);

const fontToChange = document.querySelector('#loader-line-3-font-change-section')
const fxnID2 = setInterval(() => {
fontToChange.classList.toggle('change-font-theme-2')
fontToChange.classList.toggle('change-font-theme-1')
}, 500);


let timeLine = gsap.timeline()
timeLine.to('.loader-lines p , #loader-line-1-counter , #loader-line-1-counter-remaining-part , #loader-line-3-font-change-section',{
    opacity:0,
    duration:0.8,
    delay:3.1
})

timeLine.to('#loader',{
    y:'-100%',
    duration:0.6,
    ease: 'power1.in'
})