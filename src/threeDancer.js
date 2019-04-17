var threePartyStarter = function() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, (window.innerWidth/6)/(window.innerHeight/6), 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({
    alpha: true
  });
  renderer.setClearColor( 0xffffff, 0);
  renderer.setSize(window.innerWidth/6, window.innerHeight/6);
  document.body.appendChild(renderer.domElement);

  var light = new THREE.PointLight(0xffffff, 2, 100);
  light.position.set(-2, 2, 0);
  scene.add(light);
  var lightTwo = new THREE.PointLight(0xffffff, 2, 100);
  lightTwo.position.set(3, 1, 2);
  scene.add(lightTwo);

  // var bgPlane = new THREE.PlaneGeometry(100, 100, 16);
  // var bgMat = new THREE.MeshStandardMaterial({
  //   color: 0xf1f442,
  //   roughness: 1
  // });
  // var plane = new THREE.Mesh(bgPlane, bgMat);
  // scene.add(plane);

  var geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
  var material = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    roughness: 0.1
  });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  camera.position.z = 5;

  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }
  animate();
};