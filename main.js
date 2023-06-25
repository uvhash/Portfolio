import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Scene
// Camera
// Renderer

// Geometry
// Material
// Light

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setClearColor(0x1d2225);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(12);

renderer.render(scene, camera);

const geometry = new THREE.BoxGeometry(18.981, 8.497, 45, 11, 11, 11);
//const geometry = new THREE.BoxGeometry(30, 20, 5, 1, 1, 1);
const geometry2 = new THREE.PlaneGeometry(6.594, 2.94);
const material = new THREE.MeshBasicMaterial({ color: 0xf5e9c3, wireframe: false });
const material2 = new THREE.MeshBasicMaterial({ color: 0x1d2225, wireframe: false });
const cube = new THREE.Mesh(geometry, material);
const planeCenter = new THREE.Mesh(geometry2, material2);

scene.add(cube);
scene.add(planeCenter);

const gridHelper = new THREE.GridHelper(200, 50);

const controls = new OrbitControls(camera, renderer.domElement);

renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);


  controls.update();
  renderer.render(scene, camera);
}

animate()

