
const title = document.querySelector('.hello:first-child h1')

function handleTitleclick(){
    console.log("that was clicked")
    title.style.color = "blue"
}
function handeTitlemouseenter(){
    title.innerText = "마우스 엔터"
}
function handeTitlemouseleave(){
    title.innerText = "마우스 리브"
}

function handleTitlesize(){
    document.body.style.background = "tomato"
}

title.onclick = handleTitleclick
title.onmouseenter = handeTitlemouseenter
title.onmouseleave = handeTitlemouseleave
window.addEventListener('resize',handleTitlesize)