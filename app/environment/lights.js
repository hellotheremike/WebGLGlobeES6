var light, directionalLight;

var Lights = function(sceene) {
  light = new THREE.AmbientLight( 0x404040 ); // soft white light
  light = new THREE.AmbientLight( 0xfffff0 ); // soft white light
  directionalLight = new THREE.DirectionalLight( 0xfff000, 0.3 );
  directionalLight.position.set( -55,55, -55 );

  return {
    render: function(scene){
      scene.add( light );
      scene.add( light );
      scene.add( directionalLight );
    },
    update: function(camera, scene) {
      // light.position = camera.position;
      // light.position = camera.position;
      // directionalLight.lookAt(scene.position);
    }
  }
}

export default Lights;
