

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
    document.querySelector('.bar').style.transform = 'translateX(100%)'

    document.querySelector('.show').style.transform = 'translateX(20vw)'
    document.querySelector('.show').style.opacity = '1'

    document.querySelector('.content').style.transform = 'translateX(-68%)'
    document.querySelector('.content').style.opacity = '0'

    document.querySelector('.back').style.transform = 'translateX(-1200%)'
    document.querySelector('.back').style.opacity = '0'

    document.querySelector('.world').style.transform = 'translate(20vw,0) scale(1.7)'
}