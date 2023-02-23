function CarConditionalQuery(/**/) {
  // Convert the arguments to an array
  var args = Array.from(arguments);

  // Get the limit argument
  const limit = args[0];

  // Build the query string 
  let query = String('SELECT cars.ID, carBrand.Brand, carModel.Model, cars.car, cars.manufacturingYear, cars.MSRP, cars.buyDate, cars.image FROM carBrand INNER JOIN carModel ON carBrand.ID = carModel.FK_Brand INNER JOIN cars ON carModel.ID = cars.FK_Model' + args.slice(1).join(" ") + ' LIMIT ' + limit)

  // Log the query to the console
  console.log(query)

  // Send the query to the server
  fetch('http://localhost/query.php', {
  method: 'POST',
  
  body: query,
 
  headers: {
    'Content-Type': 'text/plain'
  }
})
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      
      

      //intialize local variables
      let keys = Object.keys(data[0]).reverse();
      let result = data.reverse();
      let innerText = '<p>';
      for (let r = result.length; r--; r > 0) {


        for (let c = keys.length; c--; c > 0) {
          innerText = innerText + keys[c] + '| ' + result[r][ keys[c] ] + '| '
        }

        innerText = innerText + '</p><br><p>';
      }
      console.log(innerText)
      document.getElementById('results').innerHTML = innerText;

      // clear the results div
      document.getElementById("results").innerHTML

    })
    .catch(error => {
      // Log any errors to the console
      console.log(error);
    });
}