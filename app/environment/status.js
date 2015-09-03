  var Status = function() {
    var container = document.getElementById( "ThreeJS" );
    var stats = new Stats();
    stats.domElement.style.position = "absolute";
    stats.domElement.style.bottom = "0px";
    stats.domElement.style.zIndex = 100;

    return {
      render: function(scene){
        container.appendChild( stats.domElement );
      },
      update: function(){
        stats.update();
      }
    }
  }

  export default Status;
