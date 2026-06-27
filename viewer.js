const container = document.getElementById("aircraft-viewer");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth / container.clientHeight,
0.1,
1000
);

camera.position.set(0, 2, 8);

const renderer = new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
container.clientWidth,
container.clientHeight
);

container.appendChild(renderer.domElement);

// Lights
const ambient = new THREE.AmbientLight(0xffffff,2);
scene.add(ambient);

const light = new THREE.DirectionalLight(0xffffff,3);
light.position.set(5,5,5);
scene.add(light);

// Loader
const loader = new THREE.GLTFLoader();

let plane;

loader.load(

"Plane.glb",

function(gltf){

plane = gltf.scene;

// Make the model a good size
plane.scale.set(2,2,2);

// Center it
plane.position.set(0,0,0);

scene.add(plane);

},

undefined,

function(error){

console.error(error);

}

);

// Animation
function animate(){

requestAnimationFrame(animate);

if(plane){

plane.rotation.y += 0.005;

}

renderer.render(scene,camera);

}

animate();
