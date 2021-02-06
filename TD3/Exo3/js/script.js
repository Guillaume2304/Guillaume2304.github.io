

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

camera.position.set(3,0,5);

let rendu = new THREE.WebGLRenderer();
rendu.setSize(window.innerWidth, window.innerHeight);
rendu.setClearColor(0x000000);
document.body.appendChild(rendu.domElement);


let geometry = new THREE.SphereGeometry( 2, 32, 32 );

let material = new THREE.MeshLambertMaterial({color: 0xD2691E});

const texture = new THREE.TextureLoader().load( './textures/texture.png' );

const materialTex = new THREE.MeshBasicMaterial( { map: texture } );


let sphere = new THREE.Mesh(geometry, materialTex);

scene.add(sphere);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
scene.add( directionalLight );

//camera.position.z=5;

let animer = function animer(){
    requestAnimationFrame(animer);
	sphere.rotation.y += 0.005;
	sphere.rotation.x += 0.006;	   
	

    rendu.render(scene, camera);
}

animer();