

//Variables for setup

let container;
let camera;
let renderer;
let scene;
let doll;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(-2, 1, 6);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xdddddd, 2);
  light.position.set(-500, 150, 200);
  scene.add(light);
  
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./newnew.gltf", function(gltf) {
    scene.add(gltf.scene);
    doll = gltf.scene.children[0];
    animate();
  });

}




function animate() {
  requestAnimationFrame(animate);
  doll.rotation.z += 0.005;
  doll.rotation.y += 0.01;
  doll.rotation.x += 0.005;
  renderer.render(scene, camera);

  
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);


