import Environment from("./environment/environment")
import Globe from("./meshes/globe");
import Halo from("./meshes/halo");
import Atmosphere from("./meshes/atmosphere");
import Wireframe from("./meshes/wireframe");
import Lights from("./meshes/lights");
import LensFlare  from("./meshes/lensflare");

import AddMarker  from("./utility/markers");
import Rotate  from("./utility/rotate");

import Status from("./environment/status");


var markers;
var Render = function() {
  var env = new Environment();

  markers = new AddMarker();
  env.addObjectsToScene(objects());
  animate();


  function objects(){
    return [
    new Lights(),
    new Status(),
    new Rotate([
      new Globe(),
      new Wireframe(),
      markers
    ]),
    new Halo(env),
    new Atmosphere(env),
    new LensFlare(),
    ]
  }

  var latest = [];

  document.addEventListener("keypress", function(e){

    var key = e.which || e.keyCode;
    console.log(key)
    if (key === 97) { // a key
      latest.push(markers.add((Math.random()*100)*Math.random()*10,
                  (Math.random()*100)*Math.random()*10,
                  (Math.random()*100+1)*Math.random()*10))
    }
    if(key == 100) { // d key
      markers.remove(latest.pop())
    }

  }, false)


  function animate() {
    requestAnimationFrame( animate );
    env.render();
  }
};

export default Render;
