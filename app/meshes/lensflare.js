var lensFlare;

var LensFlare = function() {
    var textureFlare0 = THREE.ImageUtils.loadTexture( "images/lensflare1.png" );
    var textureFlare2 = THREE.ImageUtils.loadTexture( "images/lensflare2.png" );
    var textureFlare3 = THREE.ImageUtils.loadTexture( "images/lensflare3.png" );

    function addLight( h, s, l, x, y, z, scene) {

      var light = new THREE.PointLight( 0xffffff, 1.5, 4500 );
      light.color.setHSL( h, s, l );
      light.position.set( x, y, z );
      scene.add( light );

      var flareColor = new THREE.Color( 0xffffff );
      flareColor.setHSL( h, s, l + 0.5 );

      lensFlare = new THREE.LensFlare( textureFlare0, 700, 0.0, THREE.AdditiveBlending, flareColor );

      lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
      lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
      lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );

      lensFlare.add( textureFlare3, 60, 0.6, THREE.AdditiveBlending );
      lensFlare.add( textureFlare3, 70, 0.7, THREE.AdditiveBlending );
      lensFlare.add( textureFlare3, 120, 0.9, THREE.AdditiveBlending );
      lensFlare.add( textureFlare3, 70, 1.0, THREE.AdditiveBlending );

      lensFlare.customUpdateCallback = lensFlareUpdateCallback;
      lensFlare.position.copy( light.position );

      scene.add( lensFlare );
    }

    function lensFlareUpdateCallback( object ) {

        var f, fl = object.lensFlares.length;
        var flare;
        var vecX = -object.positionScreen.x * 2;
        var vecY = -object.positionScreen.y * 2;


        for( f = 0; f < fl; f++ ) {

             flare = object.lensFlares[ f ];

             flare.x = object.positionScreen.x + vecX * flare.distance;
             flare.y = object.positionScreen.y + vecY * flare.distance;

             flare.rotation = 0;

        }

        object.lensFlares[ 2 ].y += 0.025;
        object.lensFlares[ 3 ].rotation = object.positionScreen.x * 0.5 + THREE.Math.degToRad( 45 );

      }

    return {
      render: function(scene){
        addLight( 0.08, 0.8, 0.2, -35, 75, 70, scene );
      },
      update: function(camera){

      }
    }
}

export default LensFlare;
