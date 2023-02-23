//Firebase configuration: 
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
    var dataRef = database.ref("/maintain");




function moveUser(){
    event.preventDefault;
    var date = document.getElementById("date").value;
    date = date.toString();
    var time = document.getElementById("time").value;
    time = time.toString();
    var mail = document.getElementById("email").value;
    mail = mail.toString();
    var brand = document.getElementById("brand").value;
    brand = brand.toString();
    var state = document.getElementById("state").value;

    if(!date || !time || !mail || !brand || !state){
        document.getElementById("message").style.display = "block";
    }
    else{
        document.getElementById("message").style.display = "none";
        dataRef.child(state).set({ Date: date, Time: time, Email: mail, Brand: brand, State: state });
    }
}