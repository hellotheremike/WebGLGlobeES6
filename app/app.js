import Render from("./render");

var App = function () {
	console.log("Running...");
	if (!Detector.webgl) {
		Detector.addGetWebGLMessage();
	} else {
		Render()
	}
};

export default App;
