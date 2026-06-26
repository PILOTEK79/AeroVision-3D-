const container = document.getElementById("aircraft-viewer");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth / container.clientHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(
    container.clientWidth,
    container.clientHeight
);

container.appendChild(renderer.domElement);

// Cube (temporary aircraft)
const geometry = new THREE.BoxGeometry(3,1,1);

const material = new THREE.MeshStandardMaterial({
    color:0x38bdf8,
    metalness:0.7,
    roughness:0.2
});

const aircraft = new THREE.Mesh(
    geometry,
    material
);

scene.add(aircraft);

// Lights
const light = new THREE.DirectionalLight(0xffffff,3);
light.position.set(5,5,5);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff,1);
scene.add(ambient);

camera.position.z = 7;

// Animation
function animate(){

    requestAnimationFrame(animate);

    aircraft.rotation.x += 0.003;
    aircraft.rotation.y += 0.01;

    renderer.render(scene,camera);

}

animate();

// Resize
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
