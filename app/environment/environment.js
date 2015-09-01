var renderer, scene, container, camera, render_objects;

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var VIEW_ANGLE = 45;
var ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT;
var NEAR = 0.1;
var FAR = 20000;

var Environment = function() {
  camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
  scene = new THREE.Scene();
  scene.add( camera );
  camera.position.set( 0, 150, 400 );
  camera.lookAt( scene.position );

  if (Detector.webgl) {
    renderer = new THREE.WebGLRenderer( {
      antialias: true,
      alpha: true
    } );
  } else {
    renderer = new THREE.CanvasRenderer();
  }
  renderer.setClearColor( 0x000000 );

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
    addObjectsToScene: function(objects) {
      render_objects = objects;
      for (var i = 0; i < render_objects.length; i++) {
        render_objects[i].render( scene );
      }
    },
    render: function() {
      for (var i = 0; i < render_objects.length; i++) {
        if (render_objects[i].update) {
          render_objects[i].update( camera, scene );
        }
      }

      renderer.render( scene, camera );
    }
  };
};


export default Environment
