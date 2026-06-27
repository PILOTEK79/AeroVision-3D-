const container = document.getElementById("aircraft-viewer");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth / container.clientHeight,
0.1,
1000
);

camera.position.set(0,2,8);

const renderer = new THREE.WebGLRenderer({
antialias:true,
alpha:true
});

renderer.setSize(
container.clientWidth,
container.clientHeight
);

renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

// Lighting

scene.add(new THREE.AmbientLight(0xffffff,2));

const light = new THREE.DirectionalLight(0xffffff,3);

light.position.set(5,5,5);

scene.add(light);

// Load Model

const loader = new THREE.GLTFLoader();

let plane;

loader.load(

"Plane.glb",

function(gltf){

plane = gltf.scene;

plane.scale.set(1,1,1);

scene.add(plane);

},

undefined,

function(error){

console.log(error);

}

);

function animate(){

requestAnimationFrame(animate);

if(plane){

plane.rotation.y += 0.003;

}

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect =
container.clientWidth /
container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(
container.clientWidth,
container.clientHeight
);

});
