var renderer, scene, container, camera, objects;

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var VIEW_ANGLE = 45;
var ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT;
var NEAR = 0.1;
var FAR = 20000;

var Environment = function(){
  camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
  scene = new THREE.Scene();
  scene.add( camera );
  camera.position.set( 0, 150, 400 );
  camera.lookAt( scene.position );

  if (Detector.webgl) {
    renderer = new THREE.WebGLRenderer( {
      antialias: true
    } );
  } else {
    renderer = new THREE.CanvasRenderer();
  }

  renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
  container = document.getElementById( "ThreeJS" );
  container.appendChild( renderer.domElement );

  THREEx.WindowResize( renderer, camera );
  THREEx.FullScreen.bindKey( {
    charCode: "m".charCodeAt( 0 )
  } );


  return {
    camera: camera,
    scene: scene,
    addObjectsToScene: function(objects_) {
      objects = objects_;
      for(var i = 0; i < objects.length; i++) {
        objects[i].render(scene);
      }
    },
    render: function(){
      for(var i = 0; i < objects.length; i++) {
        if( objects[i].update )
          objects[i].update( camera, scene );
      }

      renderer.render( scene, camera );
    }
  }
}


export default Environment
