const container = document.getElementById("aircraft-viewer");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth / container.clientHeight,
0.1,
5000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(
container.clientWidth,
container.clientHeight
);

container.appendChild(renderer.domElement);

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 2));

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(100,100,100);
scene.add(light);

// Loader
const loader = new THREE.GLTFLoader();

let plane;

loader.load("./Plane.glb", function(gltf){

    plane = gltf.scene;

    // The uploaded model is very large.
    plane.scale.set(0.003,0.003,0.003);

    plane.position.set(0,0,0);

    scene.add(plane);

}, undefined, function(error){

    console.error(error);

});

camera.position.set(0,2,8);

function animate(){

    requestAnimationFrame(animate);

    if(plane){
        plane.rotation.y += 0.01;
    }

    renderer.render(scene,camera);

}

animate();
