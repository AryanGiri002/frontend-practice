const colors = ['rgb(0, 187, 249)','rgb(0, 245, 212)','rgb(252, 254, 255)']
const animations = ['fall-1','fall-2','fall-3']
const rand = (min,max) => Math.floor((Math.random()*(max - min + 1)) + min)
const selectRandom = (item) => item[rand(0,item.length -1)]

const originPosition = { x:0,y:0}
const last = {
    starPosition : originPosition,
    mousePosition : originPosition
}

const calcDistance = (prev,current) =>{
    const diffX = current.x - prev.x
    const diffY = current.y - prev.y
    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
}


window.onmousemove = (e) =>{

    let star = document.createElement('i')
    star.className = 'fa-solid fa-star'
    let mouseX = e.clientX
    let mouseY = e.clientY
    star.style.top =`${mouseY}px` 
    star.style.left = `${mouseX}px`
    star.style.fontSize = '1rem'
    star.style.position ='absolute'
    
    star.style.color = selectRandom(colors)
    star.style.animation =`${selectRandom(animations)}`
    star.style.animationDuration = '1200ms'    
    star.style.animationFillMode ='forwards'

    let glow = document.createElement('div')
    glow.className = 'glow-effect'
    glow.style.left=`${mouseX}px`
    glow.style.top=`${mouseY}px`
    document.body.appendChild(glow)

    setTimeout(() => {
        glow.remove()
    }, 100);
    

    last.mousePosition = {x:e.clientX,y:e.clientY}

    if (calcDistance(last.starPosition,last.mousePosition)>= 50){
        document.body.appendChild(star)
        last.starPosition = last.mousePosition
    }
    setTimeout(() => {star.remove()}, 800);

}