
let n = 0;

document.querySelector('.show').onclick = function() {
    if (n == 0) {
        show()
        n++;
    }
    else {
        hide()
        n = 0;
    }
}

document.querySelector('.back').onclick = function() {
    hideC()

}
function show() {
    document.querySelector('.bar').style.transform = 'translateX(100%)'

    document.querySelector('.show').style.transform = 'translateX(20vw)'

    document.querySelector('.world').style.transform = 'translate(20vw,0) scale(2)'

    document.querySelector('.icon').setAttribute('src','icons/close.png')

    document.querySelector('.punto').style.opacity = '1'

    document.querySelector('.world').style.backgroundPositionX = '13.2%'
    document.querySelector('.world').style.backgroundPositionY = '-10px'
}

function hide() {
    document.querySelector('.bar').style.transform = 'translateX(0)'

    document.querySelector('.show').style.transform = 'translateX(0)'

    document.querySelector('.world').style.transform = 'translate(0,0) scale(1)'

    document.querySelector('.icon').setAttribute('src','icons/search.png')

    document.querySelector('.punto').style.transition = 'opacity 0.3s'

    document.querySelector('.punto').style.opacity = "0"
}

function hideC(){
    document.querySelector('.bar').style.transform = 'translateX(100%)'
    
        document.querySelector('.content').style.transform = 'translateX(-68%)'
        document.querySelector('.content').style.opacity = '0'

        document.querySelector('.show').style.transform = 'translateX(20vw)'
        document.querySelector('.show').style.opacity = '1'


        document.querySelector('.world').style.transform = 'translate(20vw,0) scale(1.7)'
        
        document.querySelector('.back').style.transform = 'translateX(-1200%)'
        document.querySelector('.back').style.opacity = '0'
}