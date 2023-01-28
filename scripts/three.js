//Select canvas
const canvas = document.querySelector("canvas");
// Create three.js scene
const scene = new THREE.Scene();
// Create new camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
// Create new renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
// Set size to full screen
// Append to DOM
document.body.appendChild(renderer.domElement);
// Create group
const E = new THREE.Group();
const base = new THREE.BoxGeometry(3, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
function animate() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();