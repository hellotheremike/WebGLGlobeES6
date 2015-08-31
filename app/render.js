import Environment from("./environment/environment")
import Globe from("./objects/globe");
import Halo from("./objects/halo");
import Atmosphere from("./objects/atmosphere");
import Wireframe from("./objects/wireframe");
import Lights from("./environment/lights");
import Status from("./environment/status");


var Render = function() {
  new Status();

  var env = new Environment();
  env.addObjectsToScene(objects());
  animate();

  function objects(){
    return [
    new Lights(),
    new Globe(),
    new Halo(env),
    new Atmosphere(env),
    new Wireframe()
    ]
  }

  function animate() {
    requestAnimationFrame( animate );
    env.render();
  }
};

export default Render;
