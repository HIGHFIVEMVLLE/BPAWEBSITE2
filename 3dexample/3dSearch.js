

function tweenLinear (t, c, s) {
    let result = (t - c) / s;
      return (result / Math.abs(result) === -1 ? result * .5 : result);
  };
  
  window.onload = function() {
  
  // Set up the scene, camera, and renderer
  const container = document.getElementById('containerSearch');
  
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({alpha: true});
  
  var curCube;
  
  renderer.setSize(container.clientWidth, container.clientHeight);
  
  container.appendChild(renderer.domElement);
  
  // Create a raycaster for tracking mouse position
  const raycaster = new THREE.Raycaster();
  
  // Create cubes
  const size = .3; // size of the cube
  const geometry = new THREE.BoxGeometry(size, size, size);
  const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors })
  const cubes = [];
  
  const sizeHypo = Math.sqrt(Math.pow(size, 2) + Math.pow(size, 2))
  const gap = .1
  
  var maximum = 3
  var minimum = maximum - 1
  let row = 0;
  
  const exampleTextures = [[0, 1, 2, 'img/grassblocktop.png', 'img/grassblockside.png', 'img/grassblockside.png']]
  
  function applyCubeTexture(cubeIndex, textureCache) {
  
    const cube = cubes[cubeIndex][0];
    
    const textures = []
    for (const url of textureCache) {
      const texture = new THREE.TextureLoader().load(url);
      const material = new THREE.MeshBasicMaterial({ map: texture });
  
      textures.push(material);
  
    }
  
    cube.material = textures;
  }
  
  for (let i = maximum; i < 20; i++) {
  
  
    
    let cube = new THREE.Mesh(geometry)
    
    let topFace = [cube.geometry.faces[4], cube.geometry.faces[5]];
  
    let leftFace = [cube.geometry.faces[2], cube.geometry.faces[3]];
  
    let rightFace = [cube.geometry.faces[8], cube.geometry.faces[9]];
  
    
  
    cube.name = i-maximum;
  
    //create coordinate    
    let column = i % (maximum + minimum) % maximum
  
  
    //increment row upon column reset
    if (column == 0) {
        row++
    }
    
    cube.rotation.set(Math.PI / 8, Math.PI / 4, 0);
    cube.position.set(((column + row % 2 * .5) - .6) * (sizeHypo+ gap)-gap, -row * (size/4+.03), row * sizeHypo+ gap);
  
    // create the cubes surface
    
    let canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = canvas.width;
  
    ctx = canvas.getContext('2d');
  
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
  
  
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  
    //apply surface
    let materialTexture = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  
    
    cubes.push([cube, cube.position.clone(), cube.position.clone()])
  
    const cubeTextureChoice = exampleTextures[Math.floor(Math.random() * exampleTextures.length)]
    const cubeTextureIndicies = cubeTextureChoice.slice(0, 3)
    
  
    topFace[0].materialIndex = cubeTextureIndicies[0];
    topFace[1].materialIndex = cubeTextureIndicies[0];
  
    leftFace[0].materialIndex = cubeTextureIndicies[1];
    leftFace[1].materialIndex = cubeTextureIndicies[1];
  
    rightFace[0].materialIndex = cubeTextureIndicies[2];
    rightFace[1].materialIndex = cubeTextureIndicies[2];
  
    console.log("Texture Indicies: " + String(cubeTextureIndicies) + "\ntopFace: " + String(topFace[0].materialIndex) + "\nleftFace: " + String(leftFace[0].materialIndex) + "\nrightFace: " + String(rightFace[0].materialIndex))
  
  
    applyCubeTexture(Number(cube.name), cubeTextureChoice.slice(3))
    
    cube.position.sub(new THREE.Vector3(0,.1, 0))
  
    scene.add(cubes[cubes.length - 1][0]);
  }
  /* let maximum = 3
  let minimum = maximum - 1
  let row = -1;
  
  const cubes = []
  
  for (let i = 0; i < 20; i++) {
      
      // create the cubes surfac
  
      let canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = canvas.width;
  
      ctx = canvas.getContext('2d');
  
      let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'red');
      gradient.addColorStop(1, 'blue');
  
  
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height)
  
      //apply surface
      let texture = new THREE.CanvasTexture(canvas);
      let material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  
      //create cube
      const cube = new THREE.Mesh(geometry, material)
      cube.name = i;
  
      //create coordinate    
      let column = i % (maximum + minimum) % maximum
      
  
      //increment row upon column reset
      if (column == 0) {
          row++
      }
  
      
      //place cube
      let initPosition = new THREE.Vector3(row, 0, column + row % 2 * .5);
      
      cubes.push([cube, initPosition])
      cube.position.set(initPosition)
              
  }
  const testCube = cubes[0][0]
  scene.add(testCube)
  
  for (const cube of cubes) {
      scene.add(cube[0]);
  }
  
  camera.position.set(testCube.position.x, testCube.position.y + 5, testCube.position.z);
  camera.lookAt(testCube.position); */
  scene.add(camera);
  camera.position.set(0, 0, 5);
  //camera.lookAt(cube.position);
  
  // Position the camera so that it is looking at the cube
  
  // Render the scene
  function render() {
    requestAnimationFrame(render);
    
  
  
    for (const cube of cubes) {
      //cube[0].position.x += tweenLinear(cube[2].clone().x, cube[0].position.clone().x, 15);
      cube[0].position.y += tweenLinear(cube[2].clone().y, cube[0].position.clone().y, 15);
  
    }
  
    // Update and render the scene
    renderer.render(scene, camera);
  }
  
  
  
  
  window.addEventListener("resize", function() {
      renderer.setSize(container.clientWidth, container.clientHeight);
      
    });
  
  render();
  
  
  window.addEventListener("mousemove", function(event) {
      // Get the mouse position in document coordinates
      var mouseX = event.offsetX;
      var mouseY = event.offsetY;
  
      // Get the position of the canvas element
      const canvasRect = container.getBoundingClientRect();
  
      // Calculate the mouse position relative to the canvas element
      const mouse = new THREE.Vector2(); 
      
          mouse.x = ((mouseX) / canvasRect.width) * 2 - 1;
          mouse.y = -((mouseY) / canvasRect.height) * 2 + 1;
  
      raycaster.setFromCamera(mouse, camera);
  
      const intersects = raycaster.intersectObjects(scene.children);
      ;
      let cubesIndex;
      if (curCube) { 
        cubesIndex = cubes[Number(curCube.object.name)]
        cubesIndex[2] = cubesIndex[1];
      }
  
      if (intersects <= 0) {curCube = false; return;}
        
  
        curCube = intersects[0]
        
        cubesIndex = cubes[Number(curCube.object.name)]
  
        cubesIndex[2] = cubesIndex[1].clone().add(new THREE.Vector3(0, .1, 0));
  
        // get angle information about the camera and intersecting object
        let face = curCube.face;
        let normal = face.normal;
      
  
  })
  
  window.addEventListener("mousedown", function(event) {
  
      if (!curCube) {console.log('no cube selected'); return;}
      console.log(curCube.object.name)
      // get angle information about the camera and intersecting object
  
      let face = curCube.face;
      let normal = face.normal;
  
      this.document.getElementById('mouseTXT').innerText = "Cube-\nx: " + String(cubes[Number(curCube.object.name)][0].position.x) + "\ny: " + String(cubes[Number(curCube.object.name)][0].position.y) + "\nz: " + String(cubes[Number(curCube.object.name)][0].position.z) + "\nTarget-\nx: " + String(cubes[Number(curCube.object.name)][2].x) + "\ny: " + String(cubes[Number(curCube.object.name)][2].y) + "\nz: " + String(cubes[Number(curCube.object.name)][2].z)
  
      switch((String(normal.x) + String(normal.y) + String(normal.x))) {
        case '010': //top
  
  
        break;
  
        case '-10-1': //left
  
  
        break;
  
        case '000': //right
  
        
        break;
      }
  
    
  
  })
  
  
  
  };
  
  