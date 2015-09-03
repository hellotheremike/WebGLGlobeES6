import Settings from("./../Settings");

var Halo = function(env) {
  var geometry = new THREE.SphereGeometry( 70, 96, 96 );
  geometry.computeTangents();

  var object;
  var customMaterial = new THREE.ShaderMaterial(
    {
      uniforms:
      {
        "c": {
          type: "f",
          value: .94
        },
        "p": {
          type: "f",
          value: 13
        },
        glowColor: {
          type: "c",
          value: new THREE.Color(  0xeaa500 )
        },
        viewVector: {
          type: "v3",
          value: env.camera.position
        }
      },
      attributes: {
        vertexOpacity: { type: 'f', value: [1.0, 0.5, 2.0] }
      },
      vertexShader: document.getElementById( "vertexShader" ).textContent,
      fragmentShader: document.getElementById( "fragmentShader" ).textContent,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    }
  );


  object = new THREE.Mesh( geometry, customMaterial.clone() );
  object.position.set( 0, 0, 0 );
  // object.scale.multiplyScalar( 1.007 );


  return {
    render: function(scene){
      scene.add( object );
    },
    update: function(camera){
      var vector = new THREE.Vector3().subVectors( camera.position, object.position );
      vector.z = vector.z - 150
      vector.x = vector.x + 50
      vector.y = vector.y - 150
      object.material.uniforms.viewVector.value = vector
    }
  }
}

export default Halo;
