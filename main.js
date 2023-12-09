const sliderLine = document.querySelector('.sliderLine')
const leftBtn = document.querySelector('#leftBtn')
const rightBtn = document.querySelector('#rightBtn')

let offset = 0

leftBtn.addEventListener('click', function(){
    offset -= 121.5
    if (offset < 0) offset = 520
    sliderLine.style.right = offset + 'px'
})

rightBtn.addEventListener('click', function(){
    offset += 121.5
    if (offset > 520) offset = 0
    sliderLine.style.right = offset + 'px'
})