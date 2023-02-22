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
  var firebaseRef = firebase.database().ref("/Cars/" + localStorage.getItem("idNumber"));
  firebaseRef.on("value", function(snapshot){
    var data = snapshot.val();
    console.log(data);
    var images = ['Images/Showroom/1.png', 'Images/Showroom/2.png', 'Images/Showroom/3.png', 'Images/Showroom/4.png', 'Images/Showroom/5.png'];
    var divID = document.getElementById('carimg1');
    var luximage = document.getElementById('luxid');
    luximage.src = images[data.luxury];
    divID.src = data.image;
    document.getElementById('desc').innerHTML = data.description;
    document.getElementById('Enginetype').innerHTML = data.engine;
    document.getElementById('Drivetrain').innerHTML = data.driveTrain;
    document.getElementById('Transmission').innerHTML = data.transmission;
    document.getElementById('Color').innerHTML = data.color;
    document.getElementById('AvgMPG').innerHTML = data.mpg;
    document.getElementById('miles').innerHTML = data.miles;
    // var x = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('price').innerHTML = "$" + data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('CarName').innerHTML = data.make + " " + data.model;
    document.getElementById("divRange").max = data.price;

    localStorage.setItem("price", data.price);

  })

  // var firebaseUpadate = firebase.database.ref("/sellRequest");
  // ref.set

