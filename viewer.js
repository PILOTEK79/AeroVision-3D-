console.log("Viewer.js loaded");

const container = document.getElementById("aircraft-viewer");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth / container.clientHeight,
0.1,
1000
);

camera.position.set(0, 1, 5);

const renderer = new THREE.WebGLRenderer({
antialias: true
});

renderer.setSize(
container.clientWidth,
container.clientHeight
);

renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 3));

const light = new THREE.DirectionalLight(0xffffff, 4);
light.position.set(5,5,5);
scene.add(light);

// Loader
const loader = new THREE.GLTFLoader();

let plane;

loader.load(

"Plane.glb",

function(gltf){

console.log("Model Loaded!");

plane = gltf.scene;

// Auto-center
const box = new THREE.Box3().setFromObject(plane);
const center = box.getCenter(new THREE.Vector3());
plane.position.sub(center);

// Auto-scale
const size = box.getSize(new THREE.Vector3());
const maxSize = Math.max(size.x,size.y,size.z);

const scale = 2.5/maxSize;
plane.scale.setScalar(scale);

scene.add(plane);

},

undefined,

function(error){

console.error("Loading Error:",error);

}

);

function animate(){

requestAnimationFrame(animate);

if(plane){

plane.rotation.y += 0.01;

}

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect =
container.clientWidth/container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(
container.clientWidth,
container.clientHeight);

});
