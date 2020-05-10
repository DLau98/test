var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 3000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);

//ground plane
var geometry5 = new THREE.PlaneBufferGeometry(1200, 600, 100);
var material5 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "bottom2.png"), side: THREE.DoubleSide});
var plane = new THREE.Mesh(geometry5, material5);
scene.add(plane);
plane.position.set(0, -15, 0);
plane.rotation.set(Math.PI/2.0, 0, 0);

//sphere for the sun
var sun = new THREE.SphereGeometry( 20, 32, 32 );
var sun_material = new THREE.MeshBasicMaterial( {color: 0xffff00, emmisive: 0xf7b945 } );
var sphere = new THREE.Mesh( sun, sun_material );
sphere.position.set(-82, 250,-136);
scene.add( sphere );

//pyramid code
const radius = 50;
const height = 60;

var pyraMaterials =
    [
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load( "PyramidText.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load( "PyramidText.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load( "PyramidText.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load( "PyramidText.jpg"), side: THREE.DoubleSide})
    ]

const shape = new THREE.CylinderGeometry(0, radius, height, 4, 1 );
const p_material = new THREE.MeshFaceMaterial(pyraMaterials)
const pyramid = new THREE.Mesh(shape, p_material);
pyramid.position.set(60,15,-180);
scene.add(pyramid);

camera.position.z = 20;

//skybox code
var skyMaterials =
        [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "right2.png"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "left2.png"), side: THREE.DoubleSide}), // left side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "top2.png"), side: THREE.DoubleSide}), // top
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "bottom2.png"), side: THREE.DoubleSide}), //bottom
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "front2.png"), side: THREE.DoubleSide}), // front
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "back2.png"), side: THREE.DoubleSide}) // back
        ]

    const skybox = new THREE.BoxGeometry( 500, 500, 500 );
    const sky_material = new THREE.MeshFaceMaterial( skyMaterials );
    const sky = new THREE.Mesh( skybox, sky_material );
    sky.position.set(0, 0, 0);
    scene.add( sky );

//sign code
var sign_stand = new THREE.CylinderGeometry( .5, .5, 4, 3.2 );
var sign_material = new THREE.MeshBasicMaterial( {color: 0x4a3200} );
var stand = new THREE.Mesh( sign_stand, sign_material );
stand.position.set(-25, -10, -10);
scene.add( stand );

var sign_materials =
    [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide})
    ]

const sign_board = new THREE.BoxGeometry( 8, 3, .5 );
const sign_mat = new THREE.MeshFaceMaterial( sign_materials );
const sign = new THREE.Mesh( sign_board, sign_mat );
sign.position.set(-25, -6.5, -10);
sign.rotation.set(0, Math.PI*2.2, 0);
scene.add( sign );

//oasis code
var water_materials =
    [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide})
    ]

const circle = new THREE.CylinderGeometry( 20, 20, .5, 132  );
const water_mat = new THREE.MeshFaceMaterial( water_materials );
const oasis = new THREE.Mesh( circle, water_mat );
oasis.position.set(60, -15, -20);
scene.add( oasis );

//palm tree code
var palm_materials =
    [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide})
    ]

const tree = new THREE.CylinderGeometry( .5, 3, 64, 3.2 );
const tree_mat = new THREE.MeshFaceMaterial( palm_materials);
const palm = new THREE.Mesh( tree, tree_mat );
palm.position.set(130, 10 , -50);
scene.add( palm );

var geometry1 = new THREE.ConeBufferGeometry( 4, 15, 2 );
var material1 = new THREE.MeshBasicMaterial( {color: 0x45c400} );
var cone = new THREE.Mesh( geometry1, material1 );
cone.position.set(128, 40 , -57);
cone.rotation.set(0,5,5);
scene.add( cone );

var geometry2 = new THREE.ConeBufferGeometry( 4, 15, 2 );
var material2 = new THREE.MeshBasicMaterial( {color: 0x398a0e} );
var cone2 = new THREE.Mesh( geometry2, material2 );
cone2.position.set(136, 40 , -54);
cone2.rotation.set(0,10,5);
scene.add( cone2 );

var geometry3 = new THREE.ConeBufferGeometry( 4, 15, 2 );
var material3 = new THREE.MeshBasicMaterial( {color: 0x69bf39} );
var cone3 = new THREE.Mesh( geometry3, material3 );
cone3.position.set(136, 40 , -44);
cone3.rotation.set(0,15,5);
scene.add( cone3 );

//code for the clouds
var step = 0;
var step2 = 60;

var geometry4 = new THREE.BoxGeometry(25, 2, 50);
var material4 = new THREE.MeshPhongMaterial({color:0xFeFeFe, wireframe: false});
var cube = new THREE.Mesh(geometry4, material4);
cube.position.set(70,100,-70);
scene.add(cube);

var geometry = new THREE.BoxGeometry(25, 2, 50);
var material = new THREE.MeshPhongMaterial({color:0xFeFeFe, wireframe: false});
var cloud = new THREE.Mesh(geometry, material);
cloud.position.set(-50,100,50);
scene.add(cloud);

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
scene.add(ambientLight);

var update = function()
{
    cube.rotation.y -= 0.0023;
    cloud.rotation.y -= 0.0023;
};

var render = function()
{
    step += 0.002;
    step2 += 0.002;
    cube.position.x = 70*Math.cos(step);

    cloud.position.x = 70*Math.cos(step2);

    cube.position.z = 70*Math.sin(step);

     cloud.position.z = 70*Math.sin(step2);

    renderer.render(scene, camera);
};

var GameLoop = function()
{
  requestAnimationFrame(GameLoop);

  update();
  render();
};

GameLoop();