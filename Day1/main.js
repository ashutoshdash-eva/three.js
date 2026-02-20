import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

//Camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
// camera.position.z = 3;
camera.position.set(2,2,5);
camera.lookAt(0,0,0);

//Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

//Controls
const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.autoRotate = true;
controls.autoRotateSpeed = 3.0;
controls.target.set(3,0,0);

// controls.dampingFactor = 0.05;

//Grid
const gridHelper = new THREE.GridHelper(11,10);
scene.add(gridHelper);

//Cube
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 'red'});
const cube = new THREE.Mesh(geometry,material);
scene.add(cube);


// renderer.render(scene,camera);

//Animation Loop
function animate(){
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene,camera);
}
animate();

//Handle window resizr
window.addEventListener('resize' ,()=>{
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.render(scene,camera);
});