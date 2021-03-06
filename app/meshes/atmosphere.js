import Settings from("./../settings");

var Atmosphere = function(env) {
  var template = Settings.haloSize();
  var customMaterialAtmosphere = new THREE.ShaderMaterial({
    uniforms:
    {
      "c": {
        type: "f",
        value: 0.2
      },
      "p": {
        type: "f",
        value: 7.5
      },
      glowColor: {
        type: "c",
        value: new THREE.Color( 0xffbc00 )
      },
      viewVector: {
        type: "v3",
        value: env.camera.position
      }
    },
    vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent
  } );

  var object = new THREE.Mesh( template, customMaterialAtmosphere );
  object.scale.x = object.scale.y = object.scale.z = 1.2;

  // atmosphere should provide light from behind the sphere, so only render the back side
  object.material.side = THREE.BackSide;

  return {
    render: function(scene){
      scene.add( object );
    }
  }
}

export default Atmosphere;
