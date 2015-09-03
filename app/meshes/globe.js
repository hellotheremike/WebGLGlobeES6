import Settings from("./../Settings");

var Earth = function() {
  var template = Settings.orbitSize();
  var material  = new THREE.MeshPhongMaterial()
  var globe = new THREE.Mesh(template, material)

  var world_texture = THREE.ImageUtils.loadTexture('images/cool_map2-1.jpg');
  var world_bumpmap = THREE.ImageUtils.loadTexture('images/earthbump1k.jpg');
  world_texture.minFilter = THREE.LinearFilter;
  world_bumpmap.minFilter = THREE.LinearFilter;

  material.map = world_texture;
  // material.bumpMap = world_bumpmap
  // material.bumpScale = 0.05

  return {
    render: function(scene){
      scene.add(globe);
    },
    object: function(){
      return globe;
    },
    update: function(){
      globe.rotation.y += Settings.earth_rotation;
    }
  }
}

export default Earth;
