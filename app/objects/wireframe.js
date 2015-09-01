import Settings from("./../Settings");

var Wireframe = function() {
  var template = Settings.gridSize();
  var material  = new THREE.MeshPhongMaterial(
    {
      transparent: true,
      wireframe:true,
      opacity: 0.04,
    }
    )
  var wireframe = new THREE.Mesh(template, material)

  return {
    render: function(scene){
      scene.add(wireframe);
    },
    update: function(){
      wireframe.rotation.y += 0.002;
    }
  }
}

export default Wireframe;
