

function regreso() {
    let timeout = setTimeout(function() {
        regresar_animacion()
        console.log('se regreso solo')
    }, 20000);

    document.querySelector('.back').onclick = function() {
        clearTimeout(timeout)
        regresar_animacion()
    }
}

function regresar_animacion() {
    setTimeout(function() {
        document.querySelector('.bar').style.transform = 'translateX(100%)'
    
        document.querySelector('.show').style.transform = 'translateX(20vw)'
        document.querySelector('.show').style.opacity = '1'
    }, 1100)

    document.querySelector('.content').style.transform = 'translateX(-68%)'
    document.querySelector('.content').style.opacity = '0'

    document.querySelector('.back').style.transform = 'translateX(-100%)'
    document.querySelector('.back').style.opacity = '0'

    document.querySelector('.world').style.backgroundPositionX = "13.2%"
    document.querySelector('.world').style.backgroundPositionY = "-10px"

    document.querySelector('.loading').style.transform = 'translateY(250%)'
    document.querySelector('.loading_bar').style.animation = 'reverse 2s'
}