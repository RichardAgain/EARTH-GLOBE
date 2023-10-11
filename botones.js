
function mostrar(x, y, pais) {
    document.querySelector('.bar').style.transform = 'translateX(-100%)'
    document.querySelector('.content').style.transform = 'translateX(5%)'
}

document.querySelector('#arg').onclick = function() {
    mostrar(1,2)
}

document.querySelector('#ven').onclick = function() {
    mostrar(2,1)
}
