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
    var maintain = database.ref("/maintain");



    dataRef.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
      
          var key = childSnapshot.key;
          var value = childSnapshot.val();
      
          var container = document.getElementById("box");
          var div = document.createElement("div");
          div.className = "selection";

          var fullName = document.createElement("span");
          fullName.className = "name";
          fullName.innerHTML = value.name + " ";
          
          var divide = document.createElement("span");
          divide.className = "divide";
          divide.innerHTML = "|";

          var car = document.createElement("span");
          car.className = "name";
          car.innerHTML = value.Make + " ";
        //   div.innerHTML = "Name: " + value.name + "<br>" + "Make: " + value.Make + ", Model: " + value.Model;
      
          var button = document.createElement("button");
          
          container.appendChild(div); 
          div.appendChild(fullName);
          div.appendChild(divide);
          div.appendChild(car);    
        });
      });



      maintain.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
      
          var key = childSnapshot.key;
          var value = childSnapshot.val();
      
          var container = document.getElementById("box1");
          var div = document.createElement("div");
          div.className = "selection";

          var state = document.createElement("span");
          state.className = "name";
          state.innerHTML = value.State + " ";
          
          var divide = document.createElement("span");
          divide.className = "divide";
          divide.innerHTML = "|";

          var divide1 = document.createElement("span");
          divide1.className = "divide";
          divide1.innerHTML = "|";

          var date = document.createElement("span");
          date.className = "name";
          date.innerHTML = value.Date + " ";

          var email = document.createElement("span");
          email.className = "name";
          email.innerHTML = value.Email + " ";
        //   div.innerHTML = "Name: " + value.name + "<br>" + "Make: " + value.Make + ", Model: " + value.Model;
      
          var button = document.createElement("button");
          
          container.appendChild(div); 
          div.appendChild(state);
          div.appendChild(divide);
          div.appendChild(date);    
          div.appendChild(divide1);
          div.appendChild(email);
        });
      });
  