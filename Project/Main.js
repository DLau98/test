let camera, scene, renderer;

const mouse = new THREE.Vector2();
const target = new THREE.Vector2();
const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );

//YOO HOO big summer blowout

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 150;
    camera.position.y= -60;

    scene = new THREE.Scene();

    const light = new THREE.PointLight(0xfff08c,0.30,0);
    light.position.set(40, 80,-10);
    scene.add(light)

    const ambientLight = new THREE.AmbientLight( 0xf0de65, .15 ); // soft white light
    ambientLight.position.set(45, 80,-10);
    ambientLight.castShadow = true;
    scene.add( ambientLight );

    // Pyramid Code
    const radius = 80;
    const height = 100;

    var pMat =
        [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "PaintBricks.png"), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "PaintBricks.png"), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "PaintBricks.png"), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "PaintBricks.png"), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "PaintBricks.png"), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "PaintBricks.png"), side: THREE.DoubleSide})
        ]

    const pyramid_shape = new THREE.CylinderGeometry(0, radius, height, 4, 1 );
    const pMaterial = new THREE.MeshFaceMaterial( pMat);
    const Pyramid = new THREE.Mesh( pyramid_shape, pMaterial );
    Pyramid.position.set(0,-20,0);
    scene.add( Pyramid );

    var skyMaterials =
        [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "rightside.png"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "leftside.png"), side: THREE.DoubleSide}), // left side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "sky.png"), side: THREE.DoubleSide}), // top
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "SandPaint.png"), side: THREE.DoubleSide}), //bottom
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "backside.png"), side: THREE.DoubleSide}), // back
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "frontside.png"), side: THREE.DoubleSide}) // front
        ]

    const skybox = new THREE.BoxGeometry( 400, 400, 400 );
    const sky_material = new THREE.MeshFaceMaterial( skyMaterials );
    const sky = new THREE.Mesh( skybox, sky_material );
    sky.position.set(0, 125, 0);
    scene.add( sky );

    // Sun code
    var sun = new THREE.SphereGeometry( 5, 32, 32 );
    var sun_material = new THREE.MeshBasicMaterial( {color: 0xffff00, emmisive: 0xf7b945 } );
    var sphere = new THREE.Mesh( sun, sun_material );
    sphere.position.set(40, 70,-10);
    scene.add( sphere );

    // sign code!

    var sign_stand = new THREE.CylinderGeometry( .5, .5, 4, 3.2 );
    var sign_material = new THREE.MeshBasicMaterial( {color: 0x4a3200} );
    var stand = new THREE.Mesh( sign_stand, sign_material );
    stand.position.set(-25, -65, 120);
    scene.add( stand );

    var sign_materials =
        [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "wood.jpg"), side: THREE.DoubleSide})// right side
        ]

    const sign_board = new THREE.BoxGeometry( 8, 3, .5 );
    const sign_mat = new THREE.MeshFaceMaterial( sign_materials );
    const sign = new THREE.Mesh( sign_board, sign_mat );
    sign.position.set(-25, -61.5, 120);
    sign.rotation.set(0, Math.PI*2.2, 0);
    scene.add( sign );




    var water_materials =
        [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "water.jpg"), side: THREE.DoubleSide})
        ]

    const circle = new THREE.CylinderGeometry( 20, 20, .5, 132  );
    const water_mat = new THREE.MeshFaceMaterial( water_materials );
    const oasis = new THREE.Mesh( circle, water_mat );
    oasis.position.set(50, -75 , 115);
    scene.add( oasis );


    var palm_materials =
        [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide}),// right side
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "Palm.png"), side: THREE.DoubleSide})
        ]

    const tree = new THREE.CylinderGeometry( .5, 3, 64, 3.2 );
    const tree_mat = new THREE.MeshFaceMaterial( palm_materials);
    const palm = new THREE.Mesh( tree, tree_mat );
    palm.position.set(75, -70 , 115);
    scene.add( palm );

    var geometry = new THREE.ConeBufferGeometry( 4, 15, 2 );
    var material = new THREE.MeshBasicMaterial( {color: 0x45c400} );
    var cone = new THREE.Mesh( geometry, material );
    cone.position.set(73, -40 , 108);
    cone.rotation.set(0,5,5);
    scene.add( cone );

    var geometry2 = new THREE.ConeBufferGeometry( 4, 15, 2 );
    var material2 = new THREE.MeshBasicMaterial( {color: 0x398a0e} );
    var cone2 = new THREE.Mesh( geometry2, material2 );
    cone2.position.set(81.5, -40 , 110.5);
    cone2.rotation.set(0,10,5);
    scene.add( cone2 );

    var geometry3 = new THREE.ConeBufferGeometry( 4, 15, 2 );
    var material3 = new THREE.MeshBasicMaterial( {color: 0x69bf39} );
    var cone3 = new THREE.Mesh( geometry3, material3 );
    cone3.position.set(80, -40 , 119);
    cone3.rotation.set(0,15,5);
    scene.add( cone3 );








//create material, color, or texture



    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    document.addEventListener( 'mousemove', onMouseMove, false );
    document.addEventListener( 'wheel', onMouseWheel, false );
    window.addEventListener( 'resize', onResize, false );

}

function onMouseMove( event ) {

    mouse.x = ( event.clientX - windowHalf.x );
    mouse.y = ( event.clientY - windowHalf.x );

}

function onMouseWheel( event ) {

    camera.position.z += event.deltaY * 0.1; // move camera along z-axis

}





function onResize( event ) {

    const width = window.innerWidth;
    const height = window.innerHeight;

    windowHalf.set( width / 2, height / 2 );

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize( width, height );

}

function animate() {

    target.x = ( 1 - mouse.x ) * 0.002;
    target.y = ( 1 - mouse.y ) * 0.002;

    camera.rotation.x += 0.006 * ( target.y - camera.rotation.x );
    camera.rotation.y += 0.006 * ( target.x - camera.rotation.y );

    requestAnimationFrame( animate );
    renderer.render( scene, camera );



}

var xSpeed = 5.0;
var ySpeed = 5.0;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        console.log(87)
        camera.position.z -= ySpeed;
    } else if (keyCode == 83) {
        console.log(83)
        camera.position.z += ySpeed;
    } else if (keyCode == 65) {
        console.log(65)
        camera.position.x -= xSpeed;
    } else if (keyCode == 68) {
        console.log(68)
        camera.position.x += xSpeed;
    } else if (keyCode == 32) {
        console.log(32)
        camera.position.set(0, 0, 0);
    }
    render();
};


