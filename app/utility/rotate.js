import Settings from("./../Settings");


var Rotate = function(rObjects) {
  var mouseDown = false;
  var rotateStartPoint = new THREE.Vector3(0, 0, 1);
  var rotateEndPoint = new THREE.Vector3(0, 0, 1);

  var curQuaternion;
  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;
  var rotationSpeed = 1;
  var lastMoveTimestamp,
    moveReleaseTimeDelta = 50;

  var startPoint = {
      x: 0,
      y: 0
    };

    var deltaX = 0,
      deltaY = 0;
  var object_group = new THREE.Group();

  for (var i = rObjects.length - 1; i >= 0; i--) {
    rObjects[i].render(object_group);
  };

  document.addEventListener('mousedown', onDocumentMouseDown, false);

  function onDocumentMouseDown(event)
  {
    event.preventDefault();

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);

    mouseDown = true;

    startPoint = {
      x: event.clientX,
      y: event.clientY
    };

    rotateStartPoint = rotateEndPoint = projectOnTrackball(0, 0);
  }

  function onDocumentMouseMove(event)
  {
    deltaX = event.x - startPoint.x;
    deltaY = event.y - startPoint.y;

    handleRotation();

    startPoint.x = event.x;
    startPoint.y = event.y;

    lastMoveTimestamp = new Date();
  }

  function onDocumentMouseUp(event)
  {
    if (new Date().getTime() - lastMoveTimestamp.getTime() > moveReleaseTimeDelta)
    {
      deltaX = event.x - startPoint.x;
      deltaY = event.y - startPoint.y;
    }

    mouseDown = false;

    document.removeEventListener('mousemove', onDocumentMouseMove, false);
    document.removeEventListener('mouseup', onDocumentMouseUp, false);
  }

  function projectOnTrackball(touchX, touchY)
  {
    var mouseOnBall = new THREE.Vector3();

    mouseOnBall.set(
      clamp(touchX / windowHalfX, -1, 1), clamp(-touchY / windowHalfY, -1, 1),
      0.0
    );

    var length = mouseOnBall.length();

    if (length > 1.0)
    {
      mouseOnBall.normalize();
    }
    else
    {
      mouseOnBall.z = Math.sqrt(1.0 - length * length);
    }

    return mouseOnBall;
  }

  function rotateMatrix(rotateStart, rotateEnd)
  {
    var axis = new THREE.Vector3(),
      quaternion = new THREE.Quaternion();

    var angle = Math.acos(rotateStart.dot(rotateEnd) / rotateStart.length() / rotateEnd.length());

    if (angle)
    {
      axis.crossVectors(rotateStart, rotateEnd).normalize();
      angle *= rotationSpeed;
      quaternion.setFromAxisAngle(axis, angle);
    }
    return quaternion;
  }

  function clamp(value, min, max)
  {
    return Math.min(Math.max(value, min), max);
  }


  var handleRotation = function()
  {
    rotateEndPoint = projectOnTrackball(deltaX, deltaY);

    var rotateQuaternion = rotateMatrix(rotateStartPoint, rotateEndPoint);
    curQuaternion = object_group.quaternion;
    curQuaternion.multiplyQuaternions(rotateQuaternion, curQuaternion);
    curQuaternion.normalize();
    object_group.setRotationFromQuaternion(curQuaternion);

    rotateEndPoint = rotateStartPoint;
  };


  return {
    render: function(scene){
      scene.add(object_group);
    },
    update: function(camera, scene){

      if (!mouseDown)
      {
        var drag = 0.95;
        var minDelta = 0.05;

        if (deltaX < -minDelta || deltaX > minDelta)
        {
          deltaX *= drag;
        }
        else
        {
          deltaX = 0;
        }

        if (deltaY < -minDelta || deltaY > minDelta)
        {
          deltaY *= drag;
        }
        else
        {
          deltaY = 0;
        }

        handleRotation();

        for (var i = rObjects.length - 1; i >= 0; i--) {
          rObjects[i].update(camera, scene);
        };
      }
    }
  }
}

export default Rotate;
