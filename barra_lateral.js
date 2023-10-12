
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

function show() {
    document.querySelector('.bar').style.transform = 'translateX(100%)'

    document.querySelector('.show').style.transform = 'translateX(20vw)'

    document.querySelector('.world').style.transform = 'translate(20vw,0) scale(2)'

    document.querySelector('.icon').setAttribute('src','icons/close.png')
}

function hide() {
    document.querySelector('.bar').style.transform = 'translateX(0)'

    document.querySelector('.show').style.transform = 'translateX(0)'

    document.querySelector('.world').style.transform = 'translate(0,0) scale(1)'

    document.querySelector('.icon').setAttribute('src','icons/search.png')
}