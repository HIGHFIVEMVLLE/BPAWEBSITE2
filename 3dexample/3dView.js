
// Initialize variables for tracking the current angle and axis of rotation
var currentAngleX = Math.PI / 4;
var currentAngleY = Math.PI / 4;

var texture;
var material;

const axisX = new THREE.Vector3(1, 0, 0);
const axisY = new THREE.Vector3(0, 1, 0);

// Set the desired angle of rotation
var targetAngleX = currentAngleX;
var targetAngleY = currentAngleY;

window.onload = function() {

  // Set up the scene, camera, and renderer
const container = document.getElementById('container');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });


renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);


// Create a canvas surface

const canvas = document.createElement('canvas');
canvas.width = 1024;
canvas.height = canvas.width;

ctx = canvas.getContext('2d');

var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');


ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height)

var image = new Image();
image.src = 'img/camryxse.png';


material = new THREE.MeshLambertMaterial({ color: 0xff0000 });

image.onload = function() {
  ctx.drawImage(image, 0, 0);
  texture = new THREE.CanvasTexture(canvas);
  material = new THREE.MeshLambertMaterial({ map: texture });
  cube.material = material;
}

// Create a white cube
const size = 1; // size of the cube


const geometry = new THREE.BoxGeometry(size, size, size);
const cube = new THREE.Mesh(geometry, material);

//create a light that casts a shadow on the opposite side
const lightTop = new THREE.PointLight(0xffffff, 1, 500);
const lightSide1 = new THREE.PointLight(0xffffff, .5, 500);
const lightSide2 = new THREE.PointLight(0xffffff, .25, 500);

// Create a raycaster and quaternion object for tracking mouse position and rotating the cube
const raycaster = new THREE.Raycaster();

const quatX = new THREE.Quaternion();
const quatY = new THREE.Quaternion();

const direction = new THREE.Vector3();

quatX.setFromAxisAngle(axisX, currentAngleX);
quatY.setFromAxisAngle(axisY, currentAngleY);

// populate the scene
lightTop.position.set(0, 5, 5);
lightSide1.position.set(5, 0, 0);
lightSide2.position.set(-5, 0, 0);

scene.add(lightTop);
scene.add(lightSide1);
scene.add(lightSide2);

scene.add(cube);

// Set the rate at which the rotation will apply itself
var updateRate = 0.015;


// Position the camera so that it is looking at the cube

camera.position.z = 2;




// Render the scene
function render() {
  requestAnimationFrame(render);
  // Calculate the current angle and axis of rotation
  currentAngleX += (targetAngleX - currentAngleX) * updateRate;
  currentAngleY += (targetAngleY - currentAngleY) * updateRate;

  // Set the current quaternion using the current angle and axis
  quatX.setFromAxisAngle(axisX, currentAngleX);
  quatY.setFromAxisAngle(axisY, currentAngleY);

  let quaternion = quatX.multiply(quatY);

  // Use the slerp method to interpolate between the current and target quaternions
  cube.quaternion.slerp(quaternion, updateRate);

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
    
        mouse.x = (mouseX / canvasRect.width) * 2 - 1;
        mouse.y = -(mouseY / canvasRect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);
    ;

    if (intersects <= 0) {targetAngleX = Math.PI / 4; targetAngleY = Math.PI / 4; return;}

      

      // get angle information about the camera and intersecting object
      let face = intersects[0].face;
      let normal = face.normal;

      let mitigation = Math.PI / 9;

      targetAngleX = (normal.y * Math.PI / 2) - mitigation * (normal.y * 2.5 - 1);
      targetAngleY = (Math.PI / 4 - Math.PI / 4 * (normal.x + normal.z)) + (normal.x + normal.z) * mitigation;


    

})

window.addEventListener("mousedown", function(event) {
  // Get the mouse position in document coordinates
  var mouseX = event.offsetX;
    var mouseY = event.offsetY;

    // Get the position of the canvas element
    const canvasRect = container.getBoundingClientRect();

    // Calculate the mouse position relative to the canvas element
    const mouse = new THREE.Vector2(); 
    
        mouse.x = (mouseX / canvasRect.width) * 2 - 1;
        mouse.y = -(mouseY / canvasRect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);
  ;

  if (intersects <= 0) {return;}

    

    // get angle information about the camera and intersecting object
    let face = intersects[0].face;
    let normal = face.normal;

    this.document.getElementById('rayTXT').innerText = (String(normal.x) + String(normal.y) + String(normal.x));

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