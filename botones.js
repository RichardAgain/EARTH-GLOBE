
function mostrar(x, y) {
    document.querySelector('.bar').style.transform = 'translateX(-100%)'
    
    document.querySelector('.show').style.transform = 'translateX(-150%)'
    document.querySelector('.show').style.opacity = '0'
    
    document.querySelector('.content').style.transform = 'translateX(78%)'
    document.querySelector('.content').style.opacity = '1'

    document.querySelector('.back').style.transform = 'translateX(28vw)'
    document.querySelector('.back').style.opacity = '1'

    document.querySelector('.world').style.backgroundPositionX = x + "%"
    document.querySelector('.world').style.backgroundPositionY = y + "px"
    document.querySelector('.world').style.transform = 'scale(2.5)'

    document.querySelector('.loading').style.opacity = '1'
    document.querySelector('.loading').style.transform = 'translate(0)'
    document.querySelector('.loading_bar').style.animation = 'loading 21s'

}

function marcador(x,y){
    setTimeout(function() {
        document.querySelector('.punto').style.opacity = 1;
    }, 2500);

}
function mostrarPais(pais) {
    let dic = pais.bandera

    console.log(dic)
    const plantilla = `
        <h1>${pais.nombre}</h1>
        <hr>
        <img class='bandera' src='${pais.bandera}'>
        <br>
        <img class='limitacion' src='${pais.limit}'>
        <p>Capital: ${pais.capital}</p>
        <p>Presidente: ${pais.presidente}</p>
        <p>Población: ${pais.poblacion}</p>
        <p>Superficie: ${pais.tamaño}</p>
        <p>Idioma: ${pais.idioma}</p>
        <p>Moneda: ${pais.moneda}</p>
        <p>PIB: ${pais.pib}</p>
        <p>PIB per cápita: ${pais.pibpc}</p>
    `;

    document.querySelector('.content').innerHTML = plantilla;
}
const argentina = {
    nombre: 'Argentina',
    capital: 'Buenos Aires',
    bandera: 'banderas/argentina.webp',
    limit: 'limits/argentina_l.png',
    presidente: 'Alberto Fernández',
    poblacion: '46.044.703 habitantes | Censo (2022)',
    tamaño: '2.780.400 km²',
    idioma: 'Castellano',
    moneda: 'Peso argentino',
    pib: '149.259 millones de euros',
    pibpc:'3.258 euros'
};
const venezuela = {
    nombre: 'Venezuela',
    capital: 'Caracas',
    bandera: 'banderas/venezuela.png',
    limit: 'limits/venezuela_l.png',
    presidente: 'Nicolás Maduro',
    poblacion: '30.518.260 habitantes | Estimación (2023)',
    tamaño: '916.445 km²',
    idioma: 'Castellano',
    moneda: 'Bolívar',
    pib: '86.349 millones de euros',
    pibpc:' 2.895 euros'
};
const finlandia = {
    nombre: "Finlandia",
    capital: "Helsinki",
    bandera: 'banderas/finlandia.svg',
    limit: 'limits/finlandia_l.png',
    presidente: "Sauli Niinistö",
    poblacion: "5,5 millones de habitantes | Estimación (2023)",
    tamaño: "338.424 km²",
    idioma: "Finés",
    moneda: "Euro",
    pib: "224.800 millones de euros",
    pibpc: "40.600 euros"
};

const singapur = {
    nombre: "Singapur",
    capital: "Singapur",
    bandera: 'banderas/singapur.svg',
    limit: 'limits/singapur_l.png',
    presidente: "Halimah Yacob",
    poblacion: "5,7 millones",
    tamaño: "719 km²",
    idioma: "Inglés, malayo, mandarín y tamil",
    moneda: "Dólar de Singapur",
    pib: "582.600 millones de euros",
    pibpc: "101.500 euros"
};

const canada= {
    nombre: "Canadá",
    capital: "Ottawa",
    bandera: 'banderas/canada.svg',
    limit: 'limits/canada_l.png',
    presidente: "Justin Trudeau",
    poblacion: "38,2 millones",
    tamaño: "9.984.670 km²",
    idioma: "Inglés y francés",
    moneda: "Dólar canadiense",
    pib: "1.774.000 millones de euros",
    pibpc: "46.600 euros"
  }

  const india = {
    nombre: "India",
    capital: "Nueva Delhi",
    bandera: 'banderas/india.svg',
    limit: 'limits/india_l.png',
    presidente: "Narendra Modi",
    poblacion: "1.452 millones",
    tamaño: "3.287.263 km²",
    idioma: "Hindi, inglés y otros 22 idiomas oficiales",
    moneda: "Rupia india",
    pib: "3.225.000 millones de euros",
    pibpc: "2.220 euros"
  }
  const irlanda = {
    nombre: "Irlanda",
    capital: "Dublín",
    bandera: 'banderas/irlanda.svg',
    limit: 'limits/irlanda_l.png',
    presidente: "Michael D. Higgins",
    poblacion: "5,1 millones",
    tamaño: "70.273 km²",
    idioma: "Inglés y gaélico irlandés",
    moneda: "Euro",
    pib: "434.000 millones de euros",
    pibpc: "85.100 euros"
  }
  const chad= {
    nombre: "Chad",
    capital: "Yamena",
    bandera: 'banderas/chad.svg',
    limit: 'limits/chad_l.png',
    presidente: "Mahamat Idriss Déby Itno",
    poblacion: "16,3 millones",
    tamaño: "1.284.000 km²",
    idioma: "Árabe, shuwa árabe, francés y otros idiomas locales",
    moneda: "Franco CFA",
    pib: "12.100 millones de euros",
    pibpc: "736 euros"
  }
  const etiopia= {
    nombre: "Etiopía",
    capital: "Adís Abeba",
    bandera: 'banderas/etiopia.png',
    limit: 'limits/etiopia_l.png',
    presidente: "Sahle-Work Zewde",
    poblacion: "115,2 millones",
    tamaño: "1.104.300 km²",
    idioma: "Amhárico, oromo, tigriña y otros idiomas locales",
    moneda: "Birr etíope",
    pib: "88.000 millones de euros",
    pibpc: "760 euros"
}
const australia = {
    nombre: "Australia",
    capital: "Canberra",
    bandera: 'banderas/australia.svg',
    limit: 'limits/australia_l.png',
    presidente: "Anthony Albanese",
    poblacion: "25,8 millones",
    tamaño: "7.692.024 km²",
    idioma: "Inglés",
    moneda: "Dólar australiano",
    pib: "1.615.000 millones de euros",
    pibpc: "62.500 euros"
  };
  const nueva_zelanda = {
    nombre: "Nueva Zelanda",
    capital: "Wellington",
    bandera: 'banderas/nuevaZelanda.svg',
    limit: 'limits/zelanda_l.png',
    presidente: "Jacinda Ardern",
    poblacion: "5,1 millones",
    tamaño: "268.680 km²",
    idioma: "Inglés y maorí",
    moneda: "Dólar neozelandés",
    pib: "246.000 millones de euros",
    pibpc: "48.000 euros"
  };


document.querySelector('#arg').onclick = function() {
    mostrar(15,-180)
    console.log(argentina)
    marcador()
    regreso()
    mostrarPais(argentina)
}

document.querySelector('#ven').onclick = function() {
    mostrar(13.2,-10)
    marcador()
    regreso()
    mostrarPais(venezuela)
}

document.querySelector('#fin').onclick = function() {
    mostrar(62,180)
    document.querySelector('.world').style.transform = 'scale(2.8)'
    marcador()
    regreso()
    mostrarPais(finlandia)
}

document.querySelector('#irl').onclick = function() {
    mostrar(45,155)
    marcador()
    regreso()
    mostrarPais(irlanda)
}
document.querySelector('#can').onclick = function() {
    mostrar(-7,150)
    marcador()
    regreso()
    mostrarPais(canada)
}

document.querySelector('#ind').onclick = function() {
    mostrar(90,46)
    marcador()
    regreso()
    mostrarPais(india)
}

document.querySelector('#sing').onclick = function() {
    mostrar(103.2,-35.2)
    marcador()
    regreso()
    mostrarPais(singapur)
}

document.querySelector('#cha').onclick = function() {
    mostrar(58,24)
    marcador()
    regreso()
    mostrarPais(chad)
}

document.querySelector('#etio').onclick = function() {
    mostrar(69,-6)
    marcador()
    regreso()
    mostrarPais(etiopia)
}
document.querySelector('#aus').onclick = function() {
    mostrar(118,-135)
    marcador()
    regreso()
    mostrarPais(australia)
}
document.querySelector('#nuz').onclick = function() {
    mostrar(138.5,-195)
    document.querySelector('.world').style.transform = 'scale(2.8)'
    marcador()
    regreso()
    mostrarPais(nueva_zelanda)
}

