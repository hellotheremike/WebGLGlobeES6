import Settings from("./../Settings");

var Earth = function() {
  var template = Settings.orbitSize();
  var material  = new THREE.MeshPhongMaterial()
  var earth = new THREE.Mesh(template, material)


  material.map    = THREE.ImageUtils.loadTexture('images/cool_map.jpg')
  material.bumpMap    = THREE.ImageUtils.loadTexture('images/earthbump1k.jpg')
  material.bumpScale = 0.05
  material.specularMap    = THREE.ImageUtils.loadTexture('images/earthspec1k.jpg')
  material.specular  = new THREE.Color('grey')

  return {
    render: function(scene){
      scene.add(earth);
    },
    update: function(){
      earth.rotation.y += 0.001;
    }
  }
}

export default Earth;
