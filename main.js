var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set(0,0,400);

var pointlight = new THREE.PointLight(0xffffff,2,0);
pointlight.position.set(0,400,200);
scene.add(pointlight);

var spotLight = new THREE.SpotLight(0xffffff, 1.5, 0);
spotLight.position.set( -700, -300, 500 );
scene.add(spotLight);

var ambientLight = new THREE.AmbientLight( 0x404040, 1 ); // soft white light
ambientLight.position.set(100,100,200);
scene.add( ambientLight );

//sphere
var geometry = new THREE.SphereBufferGeometry(100,20,20);
var mesh_params = {
    color:0x333,
    emissive:0x333,
    side:THREE.DoubleSide,
    flatShading:true
};

var material = new THREE.MeshPhongMaterial(mesh_params);
var mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

//plane
var geometry2 = new THREE.PlaneBufferGeometry(1200, 600, 100);
var material2 = new THREE.MeshBasicMaterial({color: 0x32a852, side: THREE.DoubleSide});
var plane = new THREE.Mesh(geometry2, material2);
scene.add(plane);
plane.position.set(0,-150,0);
plane.rotation.set(Math.PI/2.0, 0, 0);

//lathe
var points = [];
for(var i = 0; i < 10; i++){
    points.push(new THREE.Vector2(Math.sin(i * 0.2) * 80 +5,
        (i-5) *10));
}
var geometry3 = new THREE.LatheBufferGeometry(points);
var material3 = new THREE.MeshPhongMaterial({color: 0xffff00});
var lathe = new THREE.Mesh(geometry3,material3);
scene.add(lathe);
//lathe.rotation.set(Math.PI/2.0, 0, 0);

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene,camera);
document.body.appendChild(renderer.domElement);

var render = function(){
    requestAnimationFrame(render);
    renderer.render(scene,camera);
}

window.addEventListener('resize',onWindowResize,false);
function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}
var xSpeed = 5.0;
var ySpeed = 1.0;
var zSpeed = 5.0;
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        console.log(87)
        mesh.position.z -= zSpeed;
        mesh.position.y += ySpeed;
    } else if (keyCode == 83) {
        console.log(83)
        mesh.position.z += zSpeed;
        mesh.position.y -= ySpeed;
    } else if (keyCode == 65) {
        console.log(65)
        mesh.position.x -= xSpeed;
    } else if (keyCode == 68) {
        console.log(68)
        mesh.position.x += xSpeed;
    } else if (keyCode == 32) {
        console.log(32)
        mesh.position.set(0, 0, 0);
    }
    render();
};
