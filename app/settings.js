var Settings = {
  worldSize: function(){
    return new THREE.SphereGeometry( 60, 20, 20 );
  },
  orbitSize: function(){
    return new THREE.SphereGeometry( 50, 70, 70 );
  }
}

export default Settings;
