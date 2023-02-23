


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
  var dataRef = database.ref("/Cars");



  dataRef.on("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    
        var key = childSnapshot.key;
        var value = childSnapshot.val();
    
        var container = document.getElementById("grid");
        var div = document.createElement("div");
        div.className = "grid-item";
        div.id = "gridItem";
        var innerdiv = document.createElement("div");
        innerdiv.className = "grid-content";
        innerdiv.id = "grid-content"; 
        innerdiv.style.backgroundColor = "blue";
        innerdiv.innerHTML = "Name: " + value.make;
        // JSON.stringify(value)
    
        var button = document.createElement("button");
        button.className = "mail-button";
        button.innerHTML = "Send email";
        button.onclick = function() {
          window.location.href = "mailto:example@email.com";
        };
        div.appendChild(innerdiv)
        container.appendChild(div);
        // div.appendChild(button);
    
    
      });
    });

    function search() {
      event.preventDefault();
      var userValue = document.getElementById("search-input").value;
      const QUERY1 = userValue.toString();
      const query = QUERY1.toLowerCase();

      var words = [];
      let currentWord = "";
      for (let j = 0; j < query.length; j++) {
      let char = query[j];
      if (char === " ") {
          words.push(currentWord);
          currentWord = "";
      } else {
          currentWord += char;
        }
      }
      words.push(currentWord); 

      var make = [];
      var model = [];
      var year = [];
      var matches = [];

      dataRef.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          
          var key = childSnapshot.key;
          var value = childSnapshot.val();

          for(var i = 0; i < words.length; i++){
            if(words[i] == value.make.toLowerCase()){
              make.push(parseInt(key));
            }
            else if(words[i] == value.model.toLowerCase()){
              model.push(parseInt(key));
            }
            else if(words[i] == value.year){
              year.push(parseInt(key));
            }
          }
        });
      })

      if(make.length > 0 && model.length > 0 && year.length > 0){
        matches = make.filter(num => model.includes(num) && year.includes(num));
      }
      else if(make.length === 0 && model.length === 0 && year.length > 0){  matches = year;  }
      else if(make.length > 0 && model.length === 0 && year.length === 0){  matches = make;  }
      else if(make.length === 0 && model.length > 0 && year.length === 0){  matches = model;  }
      else if(make.length > 0 && model.length > 0 && year.length === 0){  matches = make.filter(num => model.includes(num));  }
      else if(make.length === 0 && model.length > 0 && year.length > 0){  matches = year.filter(num => model.includes(num));  }
      else if(make.length > 0 && model.length === 0 && year.length > 0){  matches = make.filter(num => year.includes(num));  }
      else{  matches = -1;  }
      
      console.log("Maches: " + matches);

      
      
      
      //WORK ON MAKING THE LOGIC OF THE SEARCH BAR RIGHT BEFORE YOU DO ANYTHING ELSE YOU DUMBASS!!!
    }


    
    
    
 
    
