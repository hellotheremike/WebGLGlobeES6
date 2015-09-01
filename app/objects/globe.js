import Settings from("./../Settings");

var Earth = function() {
  var template = Settings.orbitSize();
  var material  = new THREE.MeshPhongMaterial()
  var earth = new THREE.Mesh(template, material)

  var world_texture = THREE.ImageUtils.loadTexture('images/cool_map.jpg');
  var world_bumpmap = THREE.ImageUtils.loadTexture('images/earthbump1k.jpg');
  var world_spectular = THREE.ImageUtils.loadTexture('images/earthspec1k.jpg');
  world_texture.minFilter = THREE.LinearFilter;
  world_bumpmap.minFilter = THREE.LinearFilter;
  world_spectular.minFilter = THREE.LinearFilter;

  material.map = world_texture;
  material.bumpMap = world_bumpmap
  material.bumpScale = 0.05
  // material.specularMap = world_spectular;
  // material.specular = new THREE.Color('grey')

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
