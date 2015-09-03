var Environment = function() {
  var renderer, scene, container, camera, render_objects, controls;

  var SCREEN_WIDTH = window.innerWidth;
  var SCREEN_HEIGHT = window.innerHeight;
  var VIEW_ANGLE = 45;
  var ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT;
  var NEAR = 0.1;
  var FAR = 20000;

  if (Detector.webgl) {
    renderer = new THREE.WebGLRenderer( {antialias: true,alpha: true} );
  } else {
    renderer = new THREE.CanvasRenderer();
  }

  renderer.setClearColor( 0x000000 );
  renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

  camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
  scene = new THREE.Scene();

  camera.position.set( 0, 150, 400 );
  camera.lookAt( scene.position );

  container = document.getElementById( "ThreeJS" );
  container.appendChild( renderer.domElement );

  THREEx.WindowResize( renderer, camera );
  THREEx.FullScreen.bindKey( {
    charCode: "m".charCodeAt( 0 )
  } );

  window.addEventListener( 'resize', onWindowResize, false );
  scene.add( camera );

  function render(){
      for (var i = 0; i < render_objects.length; i++) {
        if (render_objects[i].update) {
          render_objects[i].update( camera, scene );
        }
      }

      renderer.render( scene, camera );
  }

  function addObjectsToScene(objects) {
      render_objects = objects;

      for (var i = 0; i < render_objects.length; i++) {
        render_objects[i].render( scene );
      }
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();
  }

  return {
    camera: camera,
    scene: scene,
    addObjectsToScene: addObjectsToScene,
    render: render
  };
};


export default Environment
