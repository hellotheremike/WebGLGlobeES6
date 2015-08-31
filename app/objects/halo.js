import Settings from("./../Settings");

var Halo = function(env) {
  var template = Settings.orbitSize();

  var object;
  var customMaterial = new THREE.ShaderMaterial(
    {
      uniforms:
      {
        "c": {
          type: "f",
          value: 1.0
        },
        "p": {
          type: "f",
          value: 3.4
        },
        glowColor: {
          type: "c",
          value: new THREE.Color( 0xfff000 )
        },
        viewVector: {
          type: "v3",
          value: env.camera.position
        }
      },
      vertexShader: document.getElementById( "vertexShader" ).textContent,
      fragmentShader: document.getElementById( "fragmentShader" ).textContent,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    }
  );


  object = new THREE.Mesh( template, customMaterial.clone() );
  object.position.set( 0, 0, 0 );
  object.scale.multiplyScalar( 1.007 );


  return {
    render: function(scene){
      scene.add( object );
    },
    update: function(camera){
      var vector = new THREE.Vector3().subVectors( camera.position, object.position );
      object.material.uniforms.viewVector.value = vector
    }
  }
}

export default Halo;
