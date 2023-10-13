
function mostrar(x, y) {
    document.querySelector('.bar').style.transform = 'translateX(-100%)'
    
    document.querySelector('.show').style.transform = 'translateX(-150%)'
    document.querySelector('.show').style.opacity = '0'
    
    document.querySelector('.content').style.transform = 'translateX(68%)'
    document.querySelector('.content').style.opacity = '1'

    document.querySelector('.back').style.transform = 'translateX(32vw)'
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
    // document.querySelector('.punto').style.opacity = 0;
    // document.querySelector('.punto').style.transition = 'opacity 1s, all 1s ease-in;';
    setTimeout(function() {
        // document.querySelector('.punto').style.transform = 'translate('+ x + '%, ' + y + '%) scale(0.25)'
        

    }, 1200); setTimeout(function() {
        document.querySelector('.punto').style.opacity = 1;
        

    }, 2500);

}
function mostrarPais(pais) {
    const plantilla = `
        <h1>${pais.nombre}</h1>
        <p>Presidente: ${pais.presidente}</p>
        <p>Población: ${pais.poblacion}</p>
        <p>Tamaño: ${pais.tamaño}</p>
    `;

    document.querySelector('.content').innerHTML = plantilla;
}
const argentina = {
    nombre: 'Argentina',
    presidente: 'Juan Perón',
    poblacion: 44938712,
    tamaño: '1.778.220 km²'
};
const venezuela = {
    nombre: 'Venezuela',
    presidente: 'Juan Perón',
    poblacion: 44938712,
    tamaño: '1.778.220 km²'
};


document.querySelector('#arg').onclick = function() {
    mostrar(10,10)
    marcador(-27.5,45)
    regreso()
    mostrarPais(argentina)
}

document.querySelector('#ven').onclick = function() {
    mostrar(13.2,-10)
    marcador(-28,0)
    regreso('ven')
    mostrarPais(venezuela)
}

document.querySelector('#fin').onclick = function() {
    mostrar(60,15)
    marcador(-35,2)
    regreso()
}

