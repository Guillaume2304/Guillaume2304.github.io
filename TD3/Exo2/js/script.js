

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
var device = new THREEx.DeviceOrientationState();


camera.position.set(2,0,5);

let rendu = new THREE.WebGLRenderer();
rendu.setSize(window.innerWidth, window.innerHeight);
rendu.setClearColor(0x000000);
document.body.appendChild(rendu.domElement);


let geometry = new THREE.BoxGeometry();

let material = new THREE.MeshLambertMaterial({color: 0xD2691E});

const texture = new THREE.TextureLoader().load( './textures/texture.jpg' );

const materialTex = new THREE.MeshBasicMaterial( { map: texture } );


let cube = new THREE.Mesh(geometry, materialTex);

scene.add(cube);

const loader = new THREE.GLTFLoader();

loader.load(
	'./models/wooden crate.glb',
	function (gltf){
		scene.add(gltf.scene);
	},
	function (xhr){
		console.log((xhr.loaded/xhr.total*100)+'% loaded');
	},
	function(error){
		console.log('An error happened');
	}
);
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
scene.add( directionalLight );

camera.position.z=5;

let animer = function animer(){
    requestAnimationFrame(animer);
    //cube.rotation.x += 0.006;
    cube.rotation.y = device.angleY();
	

    rendu.render(scene, camera);
}

animer();