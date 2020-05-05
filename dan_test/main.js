// let camera, scene, renderer;
//
// const mouse = new THREE.Vector2();
// const target = new THREE.Vector2();
// const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );
//
//
// init();
// animate();
//
// function init() {
//
//     camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 500 );
//     camera.position.z = 150;
//     camera.position.y= -10;
//
//     scene = new THREE.Scene();
//
//     const light = new THREE.PointLight(0xfff08c,0.30,0);
//     light.position.set(40, 30,-10);
//     scene.add(light)
//
//     const ambientLight = new THREE.AmbientLight( 0xf0de65, .10 ); // soft white light
//     ambientLight.position.set(45, 30,-10);
//     ambientLight.castShadow = true;
//     scene.add( ambientLight );
//
//     // Pyramid Code
//     const radius = 32;
//     const height = 40;
//
//     var pyraMaterials =
//         [
//             new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "PyramidText.jpg"), side: THREE.DoubleSide}),
//             new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "PyramidText.jpg"), side: THREE.DoubleSide}),
//             new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "PyramidText.jpg"), side: THREE.DoubleSide}),
//             new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "PyramidText.jpg"), side: THREE.DoubleSide})
//         ]
//
//     const shape = new THREE.CylinderGeometry(0, radius, height, 4, 1 );
//     const p_material = new THREE.MeshFaceMaterial(pyraMaterials)
//     const pyramid = new THREE.Mesh(shape, p_material);
//     pyramid.position.set(0,-10,0);
//     scene.add(pyramid);
//
//     // So, the floor or ground is on the ceiling and is slanted. I would use it as the sky, but it is crooked.
//     // If you use the position.set and change the middle value lower than 10, it will cut the pyramid off.
//     // We need to figure out how to make this the ground, and then how to make a sky box, or some kind of object for the sky.
//     // I have commented out the add line so that you can see it without it.
//
//     const ground = new THREE.PlaneGeometry( 1000, 1000, 10);
//     const g_material = new THREE.MeshPhongMaterial({color:0x4f9bd1, emissive:0x4f9bd1 });
//     const sand_ground = new THREE.Mesh(ground, g_material);
//     sand_ground.position.set(0, 50, 0);
//     sand_ground.rotation.set(Math.PI*.5,0,0);
//     //scene.add(sand_ground);  //*** If you want to see the ground plane, just remove this comment.
//
//     // Sun code
//     var sun = new THREE.SphereGeometry( 5, 32, 32 );
//     var sun_material = new THREE.MeshBasicMaterial( {color: 0xffff00, emmisive: 0xf7b945 } );
//     var sphere = new THREE.Mesh( sun, sun_material );
//     sphere.position.set(40, 40,-10);
//     scene.add( sphere );
//
//
//
//     var skyMaterials =
//         [
//             new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "right.png"), side: THREE.DoubleSide}),// right side
//             new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "left.png"), side: THREE.DoubleSide}), // left side
//             new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "top.png"), side: THREE.DoubleSide}), // top
//             new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "bottom.png"), side: THREE.DoubleSide}), //bottom
//             new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "back.png"), side: THREE.DoubleSide}), // back
//             new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "front.png"), side: THREE.DoubleSide}) // front
//         ]
//
//     const skybox = new THREE.BoxGeometry( 350, 350, 350 );
//     const sky_material = new THREE.MeshFaceMaterial( skyMaterials );
//     const sky = new THREE.Mesh( skybox, sky_material );
//     sky.position.set(0, 125, 0);
//     scene.add( sky );
//
//     renderer = new THREE.WebGLRenderer( { antialias: true } );
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     document.body.appendChild( renderer.domElement );
//
//     document.addEventListener( 'mousemove', onMouseMove, false );
//     document.addEventListener( 'wheel', onMouseWheel, false );
//     window.addEventListener( 'resize', onResize, false );
//
// }
//
// function onMouseMove( event ) {
//
//     mouse.x = ( event.clientX - windowHalf.x );
//     mouse.y = ( event.clientY - windowHalf.x );
//
// }
//
// function onMouseWheel( event ) {
//
//     camera.position.z += event.deltaY * 0.1; // move camera along z-axis
//
// }
//
//
//
//
//
// function onResize( event ) {
//
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//
//     windowHalf.set( width / 2, height / 2 );
//
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();
//     renderer.setSize( width, height );
//
// }
//
// function animate() {
//
//     target.x = ( 1 - mouse.x ) * 0.002;
//     target.y = ( 1 - mouse.y ) * 0.002;
//
//     camera.rotation.x += 0.05 * ( target.y - camera.rotation.x );
//     camera.rotation.y += 0.05 * ( target.x - camera.rotation.y );
//
//     requestAnimationFrame( animate );
//     renderer.render( scene, camera );
//
// }
//
// var xSpeed = 5.0;
// var ySpeed = 5.0;
//
// document.addEventListener("keydown", onDocumentKeyDown, false);
// function onDocumentKeyDown(event) {
//     var keyCode = event.which;
//     if (keyCode == 87) {
//         console.log(87)
//         camera.position.z -= ySpeed;
//     } else if (keyCode == 83) {
//         console.log(83)
//         camera.position.z += ySpeed;
//     } else if (keyCode == 65) {
//         console.log(65)
//         camera.position.x -= xSpeed;
//     } else if (keyCode == 68) {
//         console.log(68)
//         camera.position.x += xSpeed;
//     } else if (keyCode == 32) {
//         console.log(32)
//         camera.position.set(0, 0, 0);
//     }
//     render();
// };
//

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

//create shape
var geometry = new THREE.BoxGeometry(9, 1, 5);

//create material, color, or texture
var material = new THREE.MeshPhongMaterial({color:0xFeFeFe, wireframe: false});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(3,35,-4);
scene.add(cube);

var step = 0;



const radius = 8;
const height = 10;

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
pyramid.position.set(0,0,0);
scene.add(pyramid);

camera.position.z = 20;

// var geometry = new THREE.CubeGeometry(10000, 10000, 10000);
// var cubeMaterials =
//     [
//         new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("front2.png"), side: THREE.DoubleSide}),
//         new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("back2.png"), side: THREE.DoubleSide}),
//         new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("top2.png"), side: THREE.DoubleSide}),
//         new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("bottom2.png"), side: THREE.DoubleSide}),
//         new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("right2.png"), side: THREE.DoubleSide}),
//         new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("left2.png"), side: THREE.DoubleSide})
//     ];
//
// var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
// var cube = new THREE.Mesh(geometry, cubeMaterial);
// scene.add(cube);

var skyMaterials =
        [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "right2.png"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "left2.png"), side: THREE.DoubleSide}), // left side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "top2.png"), side: THREE.DoubleSide}), // top
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "bottom2.png"), side: THREE.DoubleSide}), //bottom
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "front2.png"), side: THREE.DoubleSide}), // front
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "back2.png"), side: THREE.DoubleSide}) // back
        ]

    const skybox = new THREE.BoxGeometry( 100, 100, 100 );
    const sky_material = new THREE.MeshFaceMaterial( skyMaterials );
    const sky = new THREE.Mesh( skybox, sky_material );
    sky.position.set(0, 0, 0);
    scene.add( sky );

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
scene.add(ambientLight);

//program logic
var update = function()
{
    //cube.rotation.x += 0.01;
    cube.rotation.y -= 0.003;
};

//draw scene
var render = function()
{
    step += 0.003;
    cube.position.x = 35*Math.cos(step);
    cube.position.z = 35*Math.sin(step);
    renderer.render(scene, camera);
};

var GameLoop = function()
{
  requestAnimationFrame(GameLoop);

  update();
  render();
};

GameLoop();