import Settings from("./../Settings");

var Markers = function() {
    var geom = new THREE.Group();
    var cubeMat = new THREE.MeshLambertMaterial({color: 0xffffff,opacity:0.6, emissive:0xffffff});

    var data = [];
    for (var i = 2 - 1; i >= 0; i--) {
        data.push([
            (Math.random()*100)*Math.random()*10,
            (Math.random()*100)*Math.random()*10,
            (Math.random()*100+1)*Math.random()*10
        ])
    };
    for (var i = 0 ; i < data.length-1 ; i++) {
        addMarker(data[i][0], data[i][1], data[i][2]);
    }
    var material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
    var total = new THREE.Mesh(geom, material);

    function addMarker(x, y, value){
        var x = parseInt(x)+180;
        var y = parseInt((y)-84)*-1;
        var value = parseFloat(value);
        var position = LatLongToVector3(x, y, 70, value);
        var cube = new THREE.Mesh(new THREE.BoxGeometry(1,1, 1+(value/5),1,1,1,cubeMat));

        cube.position.set(position.x, position.y, position.z)
        cube.lookAt( new THREE.Vector3(0,1,0) );
        geom.add(cube);

        return cube;
    }

    return {
        add: function(x, y, value){
            return addMarker(x, y, value);
        },
        remove: function(object){
            geom.remove(object)
        },
        render: function(scene){
            scene.add( geom );
        },
        update: function(){
            geom.rotation.y += Settings.earth_rotation;
        }
    }
}

export default Markers;

var LatLongToVector3 = function(lat, lon, radius, heigth) {
        var phi = (lat)*Math.PI/180;
        var theta = (lon-180)*Math.PI/180;

        var x = -(radius) * Math.cos(phi) * Math.cos(theta);
        var y = (radius) * Math.sin(phi);
        var z = (radius) * Math.cos(phi) * Math.sin(theta);

        return new THREE.Vector3(x,y,z);
    }
