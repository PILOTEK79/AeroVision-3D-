const scene = new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
75,
document.getElementById("aircraft-viewer").clientWidth / 600,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth*0.8,
600
);

document
.getElementById("aircraft-viewer")
.appendChild(renderer.domElement);

const geometry =
new THREE.BoxGeometry(
3,
1,
1
);

const material =
new THREE.MeshStandardMaterial({
color:0x38bdf8
});

const aircraft =
new THREE.Mesh(
geometry,
material
);

scene.add(aircraft);

const light =
new THREE.DirectionalLight(
0xffffff,
3
)

light.position.set(
5,
5,
5
);

scene.add(light);

const ambient =
new THREE.AmbientLight(
0xffffff,
1
);

scene.add(ambient);

camera.position.z=5;

function animate(){

requestAnimationFrame(
animate
);

aircraft.rotation.y += 0.01;

renderer.render(
scene,
camera
);

}

animate();
