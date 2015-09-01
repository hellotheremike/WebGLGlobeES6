import Environment from("./environment/environment")
import Globe from("./objects/globe");
import Halo from("./objects/halo");
import Atmosphere from("./objects/atmosphere");
import Wireframe from("./objects/wireframe");
import Lights from("./objects/lights");
import LensFlare  from("./objects/lensflare");
import Status from("./environment/status");


var Render = function() {
  var env = new Environment();

  env.addObjectsToScene(objects());
  animate();
  new Status();

  function objects(){
    return [
    new Lights(),
    new Globe(),
    new Halo(env),
    new Atmosphere(env),
    new Wireframe(),
    new LensFlare(),
    ]
  }

  function animate() {
    requestAnimationFrame( animate );
    env.render();
  }
};

export default Render;
