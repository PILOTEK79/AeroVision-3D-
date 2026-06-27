const container = document.getElementById("aircraft-viewer");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth / container.clientHeight,
0.1,
1000
);

camera.position.set(0, 2, 15);

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

loader.load("Plane.glb", function(gltf){

    plane = gltf.scene;

    const box = new THREE.Box3().setFromObject(plane);
    const center = box.getCenter(new THREE.Vector3());

    plane.position.sub(center);

    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    const scale = 6 / maxDim;
    plane.scale.setScalar(scale);

    scene.add(plane);

}, undefined, function(error){

    console.error("Model failed to load:", error);

});

// Calculate model size
const box = new THREE.Box3().setFromObject(plane);
const size = box.getSize(new THREE.Vector3());
const center = box.getCenter(new THREE.Vector3());

// Center the model
plane.position.sub(center);

// Scale automatically
const maxAxis = Math.max(size.x,size.y,size.z);

const scale = 5/maxAxis;

plane.scale.setScalar(scale);

scene.add(plane);

camera.lookAt(0,0,0);

console.log("Plane Loaded");

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
