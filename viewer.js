console.log("Viewer Started");

const container = document.getElementById("aircraft-viewer");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth / container.clientHeight,
0.1,
5000
);

const renderer = new THREE.WebGLRenderer({
antialias:true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(
container.clientWidth,
container.clientHeight
);

container.appendChild(renderer.domElement);

// LIGHTS
scene.add(new THREE.AmbientLight(0xffffff,3));

const light=new THREE.DirectionalLight(0xffffff,5);
light.position.set(200,300,200);
scene.add(light);

// GRID (helps us know where the model is)
const grid=new THREE.GridHelper(500,50);
scene.add(grid);

// AXES
scene.add(new THREE.AxesHelper(100));

const loader=new THREE.GLTFLoader();

let plane=null;

loader.load(

"Plane.glb",

(gltf)=>{

console.log("MODEL LOADED");

plane=gltf.scene;

scene.add(plane);

// Find size
const box=new THREE.Box3().setFromObject(plane);

const center=box.getCenter(new THREE.Vector3());

const size=box.getSize(new THREE.Vector3());

plane.position.sub(center);

const maxDim=Math.max(size.x,size.y,size.z);

camera.position.set(
maxDim,
maxDim*0.6,
maxDim*2
);

camera.lookAt(0,0,0);

},

undefined,

(err)=>{

console.error(err);

}

);

function animate(){

requestAnimationFrame(animate);

if(plane){

plane.rotation.y+=0.003;

}

renderer.render(scene,camera);

}

animate();
