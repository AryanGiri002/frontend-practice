const images = document.getElementsByClassName('image')
let last = { x:0 , y:0};

const activate = (image , x , y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`
    image.dataset.status = 'active'
    last ={x,y}
}

const calcDistance = (x,y) => {
    return Math.hypot(x-last.x,y - last.y)
}


let globalIndex = 0;

window.onmousemove = e => {
    if (calcDistance(e.clientX, e.clientY) > 100) {
        const lead = images[(globalIndex) % (images.length)]
        activate(lead, e.clientX, e.clientY)
        globalIndex++;
    }
}