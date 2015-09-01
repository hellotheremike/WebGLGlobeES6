var Settings = {
  worldSize: function(){
    return new THREE.SphereGeometry( 80, 20, 20 );
  },
  haloSize: function(){
    return new THREE.SphereGeometry( 110,  70, 70);
  },
  gridSize: function(){
    return new THREE.SphereGeometry( 84, 30, 20 );
  },
  orbitSize: function(){
    return new THREE.SphereGeometry( 70, 70, 70 );
  }
}

export default Settings;
