
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
camera.position.setZ(10)


const bulb = new THREE.PointLight(0xffffff, 100, 0)
bulb.position.set(0,0,10)
scene.add(bulb)

// const ambient = new THREE.AmbientLight(0xffffff)
// scene.add(ambient)

const globeTexture = new THREE.TextureLoader().load('images/globe.jpg')
const normalTexture = new THREE.TextureLoader().load('images/normal.jpg')

const globe = new THREE.Mesh(
    new THREE.SphereGeometry( 5, 16, 16 ),
    new THREE.MeshStandardMaterial({ map: globeTexture, normalMap: normalTexture })  
);

scene.add(globe)

renderer.render(scene, camera); 

const spaceTexture = new THREE.TextureLoader().load('images/space.jpg');
scene.background = spaceTexture; 

let z = 0;
const zFinal = 1;

function animate() {
    requestAnimationFrame(animate)
    z += 0.01;
    if (z < zFinal) {
        globe.rotation.x = z
    }
    renderer.render(scene, camera); 
}

animate()
