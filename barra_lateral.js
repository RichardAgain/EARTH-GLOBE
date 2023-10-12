
document.querySelector('.show').onclick = function() {
    document.querySelector('.bar').style.transform = 'translateX(100%)'

    document.querySelector('.show').style.transform = 'translateX(20vw)'
    document.querySelector('.content').style.transform = 'translateX(-68%)'

    document.querySelector('.world').style.transform = 'translate(20vw,0) scale(1.7)'
}