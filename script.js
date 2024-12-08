const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Tambahkan Pencahayaan
const light = new THREE.AmbientLight(0xffffff, 1); // Cahaya Ambient
scene.add(light);

// Muat Model GLTF/GLB
const loader = new THREE.GLTFLoader();
loader.load(
    'project.glb', // Ganti dengan path file GLB Anda
    function(gltf) {
        scene.add(gltf.scene); // Tambahkan model ke scene
        gltf.scene.position.set(0, 0, 0); // Atur posisi jika diperlukan
    },
    undefined,
    function(error) {
        console.error('Terjadi kesalahan:', error);
    }
);

// Atur Posisi Kamera
camera.position.set = (0, 2, 5);
camera.lookAt(0, 0, 0);

// Loop Animasi
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();