import Settings from("./../settings");

var Wireframe = function() {
  var template = Settings.worldSize();
  var wireframeMaterial = new THREE.MeshBasicMaterial( {
    color: 0xf9f9fa,
    wireframe: true,
    transparent: true,
    opacity: 0.8
  } );

  var object = new THREE.Mesh( template, wireframeMaterial );
  object.position.set( 0, 0, 0 );

  return {
    render: function(scene){
      scene.add( object );
    }
  }
}

export default Wireframe;
