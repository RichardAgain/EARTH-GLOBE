let boton = document.getElementById("pais1")
boton.addEventListener("click", animate)
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera ( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

if (window.innerWidth < 768) {
    camera.position.setZ(20);
} else {
    camera.position.setZ(30);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});


renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(2)


const bulb = new THREE.PointLight(0xffffff, 3, 0)
bulb.position.set(0,0,2)
scene.add(bulb)

// const ambient = new THREE.AmbientLight(0xffffff)
// scene.add(ambient)

const globeTexture = new THREE.TextureLoader().load('images/pruebas_2.png')

const globe = new THREE.Mesh(
    new THREE.SphereGeometry( 1, 13, 13 ),
    new THREE.MeshStandardMaterial({ map: globeTexture })  
);
globe.rotation.y += 5.9;
//camera.position.z += -2;

const x = globe.position.x;
globe.position.x = x;


scene.add(globe)

// const spaceTexture = new THREE.TextureLoader().load('images/space.jpg');
// scene.background = spaceTexture; 

renderer.render(scene, camera); 

let z = 0;
const zFinal = 0.6;
let zoom = 0;
const zoomFinal = 2;
const zoomVelocity = 0.005;

function updateZoom() {
    if (zoom < zoomFinal) {
        zoom += zoomVelocity;
    }
    camera.zoom = zoom;
    camera.updateProjectionMatrix();}


    function argentina(){
        z -= 0.01; // Cambio aquí
        if (z > -zFinal) { // Cambio aquí
            globe.rotation.x = z
        }
    
        
    }
function animate() {
    requestAnimationFrame(animate)
    // updateZoom();
    // argentina();
    // globe.rotation.z += 0.001
    globe.rotation.y += 0.01
    renderer.render(scene, camera)
}

animate()

//Podrías hacer que cuando el programa inicie haga un zoom in?