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
document.getElementById("submit-button").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var city = document.getElementById("city").value;
  dataRef.child(name).set({ name: name, age: age, city: city });
});



//This chuck makes a new div container with all the relevent information that is in the database.
dataRef.on("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {

    var key = childSnapshot.key;
    var value = childSnapshot.val();

    var container = document.getElementById("box");
    var div = document.createElement("div");
    div.className = "selection";
    div.innerHTML = "Key: " + value.age + "<br>" + "Age: " + value.age + ", City: " + value.city;
    // JSON.stringify(value)

    var button = document.createElement("button");
    button.className = "mail-button";
    button.innerHTML = "Send email";
    button.onclick = function() {
      window.location.href = "mailto:example@email.com";
    };
    container.appendChild(div);
    div.appendChild(button);


  });
});







// //Prints the values that are in the database in the website as a link.
// dataRef.on("value", function(snapshot) {
//   var keyList = "";
//   snapshot.forEach(function(childSnapshot) {
//     var key = childSnapshot.key;
//     keyList += "<a href='#' onclick='displayData(\"" + key + "\")'>" + key + "</a><br>";
//   });

//   document.getElementById("keyContainer").innerHTML = keyList;
// });


// //This function is being used on the chunk above this one. 
// function displayData(key) {
//   var dataRef = database.ref("data/" + key);
//   dataRef.once("value", function(snapshot) {
//     var data = snapshot.val();
//     var dataString = "";
//     console.log(data.name);
//     document.getElementById("dataContainer").innerHTML = dataString;
//   });
// }