var Settings = {
  worldSize: function(){
    return new THREE.SphereGeometry( 80, 20, 20 );
  },
  haloSize: function(){
    return new THREE.SphereGeometry( 110,  70, 70);
  },
  gridSize: function(){
    return new THREE.SphereGeometry( 76, 45, 30 );
  },
  orbitSize: function(){
    return new THREE.SphereGeometry( 70, 70, 70 );
  },
  earth_rotation: 0.001,
  grid_rotation: 0.002,
}

export default Settings;
