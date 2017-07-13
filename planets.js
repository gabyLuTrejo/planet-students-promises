console.log("js agregado");

var template = '<div class="row">' +
      	'<div class="col s12 m8 offset-m2">' +
      	'<div class="card horizontal">' +
      	'<div class="card-image">' +
        	'<img src="https://s-media-cache-ak0.pinimg.com/736x/ac/79/a4/ac79a48cd1943168cc43ffd5e65db118.jpg">' +
      	'</div>' +
    	'<div class="card-content">' +
          	'<h4>__name__</h4>' +
			'<p>Radius: __radius__ </p>' +
			'<p>Discovered in __date__ with __telescope__</p>' +
       	'</div>' +
      	'</div>' +
      	'</div>' +
    	'</div>';

// function getJSON(url){
// 	return new Promise(function(resolve,reject){
//     	var ajax = new XMLHttpRequest();
// 		ajax.open("GET",url);
//       	ajax.send();
//       	ajax.onreadystatechange = function(){
//             if(ajax.readyState == 4){
//               resolve(JSON.parse(ajax.responseText));
//             }
// 		}
// 	});
// }

fetch("data/earth-like-results.json")
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
	console.log(data)
})

	// var urlPlanets = (message.results.map(function(url){
	// 	return json(url);
	// }));
	//  return Promise.all(urlPlanets);


// .then(function (planets) {
// 	planets.forEach(function(planet){
// 		var planetTemplate = template.replace("__name__", planet.pl_name)
// 		.replace("__radius__", planet.st_rad).replace("__date__", planet.pl_disc )
// 		.replace("__telescope__", planet.pl_telescope);
// 		document.getElementById("dataPlanets").innerHTML += (planetTemplate);
// 	});
// })	