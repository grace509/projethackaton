// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('house-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Création d'une maison simple
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const house = new THREE.Mesh(geometry, material);
scene.add(house);

// Positionnement de la caméra
camera.position.z = 5;

// Fonction de rendu
function animate() {
    requestAnimationFrame(animate);
    house.rotation.x += 0.01;
    house.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();