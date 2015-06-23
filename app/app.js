import GlobeNew from("./globe_new");

var App = function () {
	console.log("Running...");
	if (!Detector.webgl) {
		Detector.addGetWebGLMessage();
	} else {
		GlobeNew()
	}
};

export default App;
