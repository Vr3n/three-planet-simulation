import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import jupiterTex from "./images/jupiter.jpg";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Jupiter Texture.
const jupiterTexture = new THREE.TextureLoader().load(jupiterTex);

// Sphere Geometry.
const sphereGeometry = new THREE.SphereGeometry(10, 60, 60);
const sphereMaterial = new THREE.MeshBasicMaterial({
  map: jupiterTexture,
});
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 20, 100);
controls.update();

scene.add(sphereMesh);

camera.position.z = 20;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  sphereMesh.rotation.x += 0.001;
  sphereMesh.rotation.y += 0.001;
}
animate();
