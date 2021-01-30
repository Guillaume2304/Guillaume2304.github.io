

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=100;
let rendu = new THREE.WebGLRenderer();
rendu.setSize(window.innerWidth, window.innerHeight);
rendu.setClearColor(0x000000);
document.body.appendChild(rendu.domElement);


let geometry = new THREE.BoxGeometry();

let material = new THREE.MeshBasicMaterial({color: 0xD2691E});

let cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z=5;

let animer = function animer(){
    requestAnimationFrame(animer);
    cube.rotation.x += 0.006;
    cube.rotation.y += 0.005;

    rendu.render(scene, camera);
}
animer();