var firebaseConfig = {
  apiKey: "AIzaSyARcy-CcpHXynmS1HBAiBwH_uZcpJvNfMY",
  authDomain: "jarson-motors.firebaseapp.com",
  databaseURL: "https://jarson-motors-default-rtdb.firebaseio.com",
  projectId: "jarson-motors",
  storageBucket: "jarson-motors.appspot.com",
  messagingSenderId: "431759934002",
  appId: "1:431759934002:web:3fc09307a109a49705722b",
  measurementId: "G-MB7NKYMMH3"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var dataRef = database.ref("/sellRequest");


//Moves the user inforamtion to the database. 
document.getElementById("button2").addEventListener("click", function() {
  var make = document.getElementById('options').value; 
  var model = document.getElementById('model').value; 
  var color = document.getElementById('Color').value; 
  var odometer = document.getElementById('ODO').value; 
  var year = document.getElementById("yearSlider").value; 
  var license = document.getElementById('license').value;
  var name = document.getElementById("Name").value;
  var mail = document.getElementById("Email").value;
  var num = document.getElementById("Number").value;
  dataRef.child(name).set({ name: name, Email: mail, Number: num, Make: make, Model: model, Color: color, Odometer: odometer, Year: year, License: license, });
  window.location.href = "maintainPlaced.html";
});






function moveUserNext(){
  event.preventDefault();
  var allInfo;
  var make = document.getElementById('options').value; 
  var model = document.getElementById('model').value; 
  var color = document.getElementById('Color').value; 
  var odometer = document.getElementById('ODO').value; 
  var year = document.getElementById("yearSlider").value; 
  var license = document.getElementById('license').value;
  console.log(make + " " + model + " " + color + " " + odometer + " " + year + " " + license);

  if(!model || !color || !odometer || !license){
    console.log("The if statement works good!")
    document.getElementById('error').style.display = 'block';
    document.getElementById('error').innerHTML = "Please enter all the values before going to the next page por favor."
    document.getElementById('error').style.color = "white";
    allInfo = false
  }
  else{ 
    allInfo = true; 
    document.getElementById('info2').style.display = "block";
    document.getElementById('error').style.display = "none";
    document.getElementById('button1').style.display = "none";
    document.getElementById('button2').style.display = "block";
  }
  
}

// dataRef.on("value", function(snapshot) {
//   snapshot.forEach(function(childSnapshot) {

//     var key = childSnapshot.key;
//     var value = childSnapshot.val();

//     var container = document.getElementById("box");
//     var div = document.createElement("div");
//     div.className = "selection";
//     div.innerHTML = "Name: " + value.name + "<br>" + "Make: " + value.Make + ", Model: " + value.Model;
//     // JSON.stringify(value)

//     // var button = document.createElement("button");
//     // button.className = "mail-button";
//     // button.innerHTML = "Send email";
//     // button.onclick = function() {
//     //   window.location.href = "mailto:example@email.com";
//     // };
//     container.appendChild(div);
//     div.appendChild(button);


//   });
// });



  