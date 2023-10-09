
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera ( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

if (window.innerWidth < 768) {
    camera.position.setZ(20);
  } else {
    camera.position.setZ(30);
  }

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30)

// const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
// const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } )
// const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );

// scene.add(sphere);

const bulb = new THREE.PointLight(0xffffff, 300, 0)
bulb.position.set(0,0,25)
scene.add(bulb)

// const ambient = new THREE.AmbientLight(0xffffff)
// scene.add(ambient)

// const helper = new THREE.PointLightHelper(bulb)
// scene.add(helper)

// const grid = new THREE.GridHelper(200,50)
// scene.add(grid)

const globeTexture = new THREE.TextureLoader().load('images/globe.jpg')

const globe = new THREE.Mesh(
    new THREE.SphereGeometry( 15, 32, 16 ),
    new THREE.MeshStandardMaterial({ map: globeTexture})  
);

scene.add(globe)

renderer.render(scene, camera); 

// const controls = new OrbitControls(camera, renderer.domElement);

const spaceTexture = new THREE.TextureLoader().load('images/space.jpg');
scene.background = spaceTexture; 


function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    // globe.rotation.x += 0.01;
    globe.rotation.y += -0.01;
    // globe.rotation.z += 0.01;


    // controls.update()
}

animate()