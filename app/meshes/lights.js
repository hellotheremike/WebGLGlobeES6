var Lights = function(sceene) {
  var light_1 = new THREE.AmbientLight( 0x404040 ); // soft white light
  var light_2 = new THREE.AmbientLight( 0xfffff0 ); // soft white light
  var directionalLight = new THREE.DirectionalLight( 0xfff5c5, 1.3 );
  directionalLight.position.set( -300, 350, 300 );

  return {
    render: function(scene){
      scene.add( light_1 );
      scene.add( light_2 );
      scene.add( directionalLight );
    },
    update: function(camera, scene) {
    }
  }
}

export default Lights;
