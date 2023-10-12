
function mostrar(x, y, pais) {
    document.querySelector('.bar').style.transform = 'translateX(-100%)'
    document.querySelector('.content').style.transform = 'translateX(68%)'
    document.querySelector('.world').style.backgroundPositionX = x + "%"
    document.querySelector('.world').style.backgroundPositionY = y + "px"
    document.querySelector('.world').style.transform = 'translate(20vw,0) scale(1.7)'

}

function marcador(x,y){
    document.querySelector('.punto').style.opacity = 0;
    document.querySelector('.punto').style.transition = 'opacity 1.5s, transform 1.5s';
    setTimeout(function() {
        document.querySelector('.punto').style.transform = 'translate('+ x + '%, ' + y + '%) scale(0.25)'
        

    }, 1200); setTimeout(function() {
        document.querySelector('.punto').style.opacity = 1;
        

    }, 2500);

}
function regreso(){
    setTimeout(function() {
        mostrar(0,0)
        marcador(-28,0)
        document.querySelector('.bar').style.transform = 'translateX(100%)'
        document.querySelector('.show').style.transform = 'translateX(20vw)'
        document.querySelector('.content').style.transform = 'translateX(-68%)'
        document.querySelector('.world').style.transform = 'translate(20vw,0) scale(1.7)'
    }, 20000);

}


document.querySelector('#arg').onclick = function() {
    mostrar(10,10)
    marcador(-27.5,45)
    regreso()
}

document.querySelector('#ven').onclick = function() {
    mostrar(0,0)
    marcador(-28,0)
}

document.querySelector('#fin').onclick = function() {
    mostrar(60,15)
    marcador(-35,2)
    regreso()
}

