var AddDensity = function(data) {

    // the geometry that will contain all our cubes
    var geom = new THREE.Group();
    // material to use for each of our elements. Could use a set of materials to
    // add colors relative to the density. Not done here.
    var cubeMat = new THREE.MeshLambertMaterial({color: 0xffffff,opacity:0.6, emissive:0xffffff});
    for (var i = 0 ; i < data.length-1 ; i++) {

        //get the data, and set the offset, we need to do this since the x,y coordinates
        //from the data aren't in the correct format
        // var x = parseInt(data[i][0])+180;
        // var y = parseInt((data[i][1])-84)*-1;
        // var value = parseFloat(data[i][2]);

        var x = parseInt(data[i].long)+180;
        var y = parseInt((data[i].lat)-84)*-1;
        var value = parseFloat(data[i].value);


        // calculate the position where we need to start the cube
        var position = latLongToVector3(x, y, 50, 1);

        // create the cube
        var cube = new THREE.Mesh(new THREE.BoxGeometry(1,1, 1+value/8,1,1,1,cubeMat));
        // var geometry = new THREE.CylinderGeometry( 1, 1, 6, 32 );
        // var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        // var cube = new THREE.Mesh( geometry, material );

        // position the cube correctly
        cube.position.x = position.x;
        cube.position.y = position.y;
        cube.position.y = position.y;
        cube.lookAt( new THREE.Vector3(0,1,0) );

        // merge with main model
        geom.add(cube);
    }
    var material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });

    // create a new mesh, containing all the other meshes.
    // var total = new THREE.Mesh(geom,material);

    // and add the total mesh to the scene
    scene.add(geom);
}

export default AddDensity;
