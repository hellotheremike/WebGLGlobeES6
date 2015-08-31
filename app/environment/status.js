  var Status = function() {
    var container = document.getElementById( "ThreeJS" );
    var stats = new Stats();
    stats.domElement.style.position = "absolute";
    stats.domElement.style.bottom = "0px";
    stats.domElement.style.zIndex = 100;

    container.appendChild( stats.domElement );
  }

  export default Status;
