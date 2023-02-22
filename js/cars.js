
function calculateMonthlyPayment(principle, interestRate, term) {
  const monthlyInterestRate = interestRate / 12;
  const monthlyPayment = (principle * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -term));
  return monthlyPayment;
}

// Updated the slider value of the downpayment slider.
function sliderChange(val){
  var vehicleCost = localStorage.getItem("price");
  var carPrice =  parseInt(vehicleCost.replace(/[^0-9]/g, ''), 10);
  var slider = document.getElementById('sliderStatus');
  slider.innerHTML = val; 
  document.getElementById('divRange').max = carPrice
}


function sliderValue(val){  return val; }

// This function takes care of the loan estimator's calculation.
function myFunction(){       
  // var monthlyPayment;
  event.preventDefault();
  const interest = [5.57, 6.34, 8.62, 9.37, 10.48, 12.38, 14.54, 18.87]
  var price = document.getElementById("sliderStatus").innerHTML;
  var vehicleCost = localStorage.getItem("price");
  var carPrice =  parseInt(vehicleCost.replace(/[^0-9]/g, ''), 10);
  var downPayment = carPrice - price;
  var interestRate;
  var newinterest;
  var roundedinterest;
  var e = document.getElementById("ddlViewBy");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;


  
  console.log(downPayment);
  interestRate = interest[value] / 100;
  newinterest = interestRate * 100;
  roundedinterest = newinterest.toFixed(2);
  document.getElementById("myText").innerHTML = roundedinterest + "%";
  document.getElementById("36month").innerHTML = "$" + Number(Math.round(calculateMonthlyPayment(downPayment, interestRate, 36)+'e'+2)+'e-'+2);
  document.getElementById("48month").innerHTML = "$" + Number(Math.round(calculateMonthlyPayment(downPayment, interestRate, 48)+'e'+2)+'e-'+2);
  document.getElementById("60month").innerHTML = "$" + Number(Math.round(calculateMonthlyPayment(downPayment, interestRate, 60)+'e'+2)+'e-'+2);
  // console.log(monthlyPayment);
}

function searchInformation(){
  const searchInput = document.getElementById('search-input');
  const searchQuery = searchInput.value;
  document.getElementById('testing').innerHTML = searchQuery;
}  







//   //the code for the search bar

// Get the search input field and the results container
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

const data = [
  {
    make:'toyota', 
    model: 'Camry', 
    year: '2012',
  },
  {
    make:'lexus', 
    model: 'LS', 
    year: '2010',
    
  },
  {
    make:'suburu', 
    model: 'Legacy', 
    year: '2017',
    
  },
  {
    make:'audi', 
    model: 'A6', 
    year: '2015',
    
  },
  {
    make:'chrysler', 
    model: '300', 
    year: '2016',
    
  },
  {
    make:'chevrolet', 
    model: 'sonic', 
    year: '2015',
    
  },
  {
    make:'bmw', 
    model: 'series 3', 
    year: '2018',
    
  },
  {
    make:'dodge', 
    model: 'charger', 
    year: '2018',
    
  },
  {
    make:'toyota', 
    model: 'corolla', 
    year: '2017',
    
  },
  {
    make:'volkswagen', 
    model: 'passat', 
    year: '2014',
    
  },
  {
    make:'hyundai', 
    model: 'sonata', 
    year: '2018',
    
  },
  {
    make:'honda', 
    model: 'cr-v', 
    year: '2016',
    
  },
  {
    make:'nissan', 
    model: 'versa', 
    year: '2019',
    
  },
  {
    make:'acura', 
    model: 'rDX', 
    year: '2019',
    
  },
  {
    make:'kia', 
    model: 'sportage', 
    year: '2020',
    
  },
  {
    make:'honda', 
    model: 'odyssey', 
    year: '2014',
    
  },
  {
    make:'jeep', 
    model: 'compass', 
    year: '2017',
    
  },
  {
    make:'suburu', 
    model: 'brz', 
    year: '2013',
    
  },
  {
    make:'nissan', 
    model: 'rogue', 
    year: '2021',
    
  },
  {
    make:'volkswagen', 
    model: 'jetta', 
    year: '2014',
    
  },
  {
    make:'chrysler', 
    model: 'pacifica', 
    year: '2017',
    
  },
  {
    make:'ford', 
    model: 'escape', 
    year: '2018',
    
  },
  {
    make:'cherolet', 
    model: 'malibu', 
    year: '2020',
    
  },
  {
    make:'toyota', 
    model: 'highlander', 
    year: '2022',
    
  },
  {
    make:'gmc', 
    model: 'acadia', 
    year: '2017',
    
  },
  {
    make:'honda', 
    model: 'accord', 
    year: '2013',
    
  },
  {
    make:'toyota', 
    model: 'rav4', 
    year: '2016',
    
  }
  ]
  







//I am still working on this please don't change it.


function divNumber(divName){
  var contaienrNumber;
  const letters = divName.split('').filter((char) => !isNaN(char));
  contaienrNumber = parseInt(letters.join(''), 10);
  console.log(contaienrNumber);
  return contaienrNumber;
}


function descChange(){
  var fileName = location.pathname.split("/").pop();

  if(fileName == "carview.html"){
    document.getElementById('desc').innerHTML = "This is stevie!"
  }
}




var divItem;
var idNumber;


function createDivElement(varItemId){
  divItem = varItemId;
  console.log(divItem);
  idNumber = divNumber(divItem);
  console.log(idNumber);
  var dataObj = data[idNumber];
  localStorage.setItem("idNumber", idNumber);
  localStorage.setItem("description", dataObj.description);
  localStorage.setItem("engine", dataObj.Engine);
  localStorage.setItem("drive", dataObj.driveTrain);
  localStorage.setItem("transmission", dataObj.transmission);
  localStorage.setItem("color", dataObj.color);
  localStorage.setItem("mpg", dataObj.mpg);
  localStorage.setItem("miles", dataObj.Miles);
  localStorage.setItem("make", dataObj.make);
  localStorage.setItem("model", dataObj.model);
  localStorage.setItem("luxury", dataObj.luxury);
  window.location.replace("carview.html");
  return false;
}







function search() {
  event.preventDefault();

  var value;
  value = searchInput.value;
  const QUERY1 = value.toString();
  const query = QUERY1.toLowerCase();




  //The words array extraces the words from the user's query
  let words = [];
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


  let Make = [];
  let Model = [];
  let Trim = [];
  let Year = [];

  let indexValue = [];
  let holder = words[0];
  for(var i = 0; i < 4; i++){ for(var k = 0; k < data.length; k++){ if(data[k].make === holder){ Make.push(k); }}
    for(var k = 0; k < data.length; k++){ if(data[k].trim === holder){ Trim.push(k); }}
    for(var k = 0; k < data.length; k++){ if(data[k].model === holder){ Model.push(k); }}
    for(var k = 0; k < data.length; k++){ if(data[k].year === holder){ Year.push(k); }}
    holder = words[i];
  }


  //creating the match data which contains the index value of the car based on the user's query.
  let matches = [];
  if(Make.length > 0 && Model.length > 0 && Year.length > 0){
    matches = Make.filter(num => Model.includes(num) && Year.includes(num));
  }
  else if(Make.length === 0 && Model.length === 0 && Year.length > 0){  matches = Year;  }
  else if(Make.length > 0 && Model.length === 0 && Year.length === 0){  matches = Make;  }
  else if(Make.length === 0 && Model.length > 0 && Year.length === 0){  matches = Model;  }
  else if(Make.length > 0 && Model.length > 0 && Year.length === 0){  matches = Make.filter(num => Model.includes(num));  }
  else if(Make.length === 0 && Model.length > 0 && Year.length > 0){  matches = Year.filter(num => Model.includes(num));  }
  else if(Make.length > 0 && Model.length === 0 && Year.length > 0){  matches = Make.filter(num => Year.includes(num));  }
  else{  matches = -1;  }







  //This makes an array that has the right name of all the grid values. 
  var properdiv = [];
  for(var i = 0; i < data.length; i++){
    var placeholder = "item" + i;
    properdiv.push(placeholder);
  }




  console.log(matches);

  for(var i = 0; i < data.length; i++){
    for(var j = 0; j < matches.length; j++){
      if(i != matches[j]){
        document.getElementById('item' + i).style.display = "none";
      }
    }
  }


  //this pushes the car information on the data array to the dataValue array.
  var dataValue = [];
  for(var i = 0; i < matches.length; i++){ for(var j = 0; j < data.length; j++){ if(matches[i] == j){ dataValue.push(data[j]); }}}

  //This makes the right grid values to be visible to the user. 
  for(var i = 0; i < data.length; i++){
    for(var j = 0; j < dataValue.length; j++){ if(dataValue[j] == data[i]){ document.getElementById(properdiv[i]).style.display = "block"; }}
  }



  // Clear the results container
  resultsContainer.innerHTML = '';
  if(matches == -1){
    resultsContainer.innerHTML = "We couldn't find that car for you :(";
  }
}




// Add an event listener to the search form that calls the search function when the form is submitted
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', event => {
// event.preventDefault();
search();
});













