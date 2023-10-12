
function mostrar(x, y) {
    document.querySelector('.bar').style.transform = 'translateX(-100%)'
    
    document.querySelector('.show').style.transform = 'translateX(-150%)'
    document.querySelector('.show').style.opacity = '0'
    
    document.querySelector('.content').style.transform = 'translateX(68%)'
    document.querySelector('.content').style.opacity = '1'

    document.querySelector('.back').style.transform = 'translateX(1200%)'
    document.querySelector('.back').style.opacity = '1'

    document.querySelector('.world').style.backgroundPositionX = x + "%"
    document.querySelector('.world').style.backgroundPositionY = y + "px"
    document.querySelector('.world').style.transform = 'translate(20vw,0) scale(1.7)'

}
function mover(x,y){
document.querySelector('.world').style.backgroundPositionX = x + "%"
document.querySelector('.world').style.backgroundPositionY = y + "px"
}
function marcador(x,y){
    document.querySelector('.punto').style.opacity = 0;
    document.querySelector('.punto').style.transition = 'opacity 1s, all 1s ease-in;';
    setTimeout(function() {
        document.querySelector('.punto').style.transform = 'translate('+ x + '%, ' + y + '%) scale(0.25)'
        

    }, 1200); setTimeout(function() {
        document.querySelector('.punto').style.opacity = 1;
        

    }, 2500);

}
function regreso(pais = null){
    if (pais == "ven"){
        setTimeout(function() {
            document.querySelector('.bar').style.transform = 'translateX(100%)'
    
            document.querySelector('.show').style.transform = 'translateX(20vw)'
            document.querySelector('.show').style.opacity = '1'
    
            document.querySelector('.content').style.transform = 'translateX(-68%)'
            document.querySelector('.content').style.opacity = '0'
    
            document.querySelector('.world').style.transform = 'translate(20vw,0) scale(1.7)'

            doc
        }, 20000);
    }
    else{
    setTimeout(function() {
        mostrar(0,0)
        mostrar()
        marcador(-28,0)
        document.querySelector('.bar').style.transform = 'translateX(100%)'

        document.querySelector('.show').style.transform = 'translateX(20vw)'
        document.querySelector('.show').style.opacity = '1'

        document.querySelector('.content').style.transform = 'translateX(-68%)'
        document.querySelector('.content').style.opacity = '0'

        document.querySelector('.back').style.transform = 'translateX(-1200%)'
        document.querySelector('.back').style.opacity = '0'

        document.querySelector('.world').style.transform = 'translate(20vw,0) scale(1.7)'
    }, 20000);
    }
}


document.querySelector('#arg').onclick = function() {
    mostrar(10,10)
    marcador(-27.5,45)
    regreso()
}

document.querySelector('#ven').onclick = function() {
    mostrar(0,0)
    let ven = "ven"
    marcador(-28,0)
    regreso(ven)
}

document.querySelector('#fin').onclick = function() {
    mostrar(60,15)
    marcador(-35,2)
    regreso()
}

