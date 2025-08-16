gsap.from('.loader-lines p',{
    y:100,
    opacity:0,
    stagger:0.25,
    duration:0.8
})

gsap.from('#loader-line-3-font-change-section span',{
    y:100,
    opacity:1,
    duration:0.8,
    delay:0.5

})

gsap.from('#loader-line-1-counter',{
    opacity:0,
    duration:0.6
})

gsap.from('#loader-line-1-counter-remaining-part',{
    opacity:0,
    duration:0.6
})

gsap.from('#loader-waiting-text p',{
    opacity:0,
    duration:1,
    delay:0.95
})


// const nowText = document.querySelector('#loader-line-3-font-change-section');
// gsap.set(nowText, { className: 'change-font-theme-2' });
// const nowAnimation = gsap.timeline({ repeat: 1 });

// nowAnimation
//     // 1. PLAIN FONT: Visible for 0.6s, then fade out over 0.2s.
//     .to(nowText, {
//         opacity: 0,
//         duration: 0.2,
//         delay: 0.6 // Wait for 0.6s before starting the fade
//     })

//     // 2. FONT CHANGE: While invisible, switch the class to use "Silk Serif".
//     .set(nowText, {
//         className: 'change-font-theme-1'
//     })

//     // 3. SILK SERIF FONT: Fade in over 0.2s.
//     .to(nowText, {
//         opacity: 1,
//         duration: 0.2
//     })

//     // 4. SILK SERIF FONT: Visible for 0.6s, then fade out over 0.2s.
//     .to(nowText, {
//         opacity: 0,
//         duration: 0.2,
//         delay: 0.6 // Wait for 0.6s before starting the fade
//     })

//     // 5. FONT CHANGE: While invisible, switch back to "Plain" for the next loop.
//     .set(nowText, {
//         className: 'change-font-theme-2'
//     })
    
//     // 6. FADE IN for the next loop iteration to start smoothly.
//     .to(nowText, {
//         opacity: 1,
//         duration: 0.2
//     });





// const nowText = document.querySelector('#loader-line-3-font-change-section');
// let nowAnimation = gsap.timeline({ repeat: -1 }); 

// // The corrected animation sequence
// nowAnimation
//     .to(nowText, { opacity: 1, duration: 0.2 }, '+=0')
//     .set(nowText, { className: 'loader-line-3-font-change-section change-font-theme-2' }) // 1. Start with FILLED style
//     .to(nowText, { opacity: 0, duration: 0.2 }, '+=0.6') // 2. Visible for 0.8s, then quick fade OUT
//     .set(nowText, { className: 'loader-line-3-font-change-section change-font-theme-1' }) // 3. Switch to OUTLINED style (while invisible)
//     .to(nowText, { opacity: 1, duration: 0.2 }, '+=0') // 4. After 0.2s pause, quick fade IN
//     .to(nowText, { opacity: 0, duration: 0.2 }, '+=0.6') // 5. Visible for 0.8s, then quick fade OUT
//     .set(nowText, { className: 'loader-line-3-font-change-section change-font-theme-2' },0.2) // 6. Switch back to FILLED style (while invisible)


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

// const fontToChange = document.querySelector('#loader-line-3-font-change-section')
// const fxnID2 = setInterval(() => {
// fontToChange.classList.toggle('change-font-theme-2')
// fontToChange.classList.toggle('change-font-theme-1')
// }, 500);


let timeLine = gsap.timeline()
timeLine.to('.loader-lines p , #loader-line-1-counter , #loader-line-1-counter-remaining-part , #loader-line-3-font-change-section , #loader-waiting-text p',{
    opacity:0,
    duration:0.8,
    delay:2.8
})
timeLine.to('#loader',{
    y:'-100%',
    duration:0.6,
    ease: 'power1.in'
})
timeLine.to('#loader',{
    display:'none'
})
gsap.from('.hero-line',{
    y:'100%',
    stagger:0.1,
    delay:3.6,
    stagger:0.2
})



const customCursor = document.querySelector('#custom-cursor');
const loader = document.querySelector('#loader');
const page1 = document.querySelector('#page1')

window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Get the cursor's dimensions to center it perfectly
    const cursorWidth = customCursor.offsetWidth;
    const cursorHeight = customCursor.offsetHeight;

    // Use the 'translate' property directly
    // This positions the cursor's center under the mouse pointer
    customCursor.style.translate = `${x - cursorWidth / 2}px ${y - cursorHeight / 2}px`;
});


page1.addEventListener('mouseenter', (e) => {
    customCursor.style.display = 'block';
    const x = e.clientX;
    const y = e.clientY;
    
    // Get the cursor's dimensions to center it perfectly
    const cursorWidth = customCursor.offsetWidth;
    const cursorHeight = customCursor.offsetHeight;

    // Use the 'translate' property directly
    // This positions the cursor's center under the mouse pointer
    customCursor.style.translate = `${x - (cursorWidth / 2)}px ${y - (cursorHeight / 2)}px`;

});


const links = document.querySelectorAll('svg , a'); 
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        customCursor.classList.add('hover-effect');
    });
        
    // Remove hover effect when mouse leaves a link
    link.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hover-effect');
    });
});


Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
});