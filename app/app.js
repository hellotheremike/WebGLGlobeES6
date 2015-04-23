import Start from("./start");

var App = function() {
  console.log( "Running..." );
  if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
  } else {
    Start()
  }
};

export default App;