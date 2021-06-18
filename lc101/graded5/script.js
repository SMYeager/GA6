// Write your JavaScript code here!
	window.addEventListener("load", function() {

		
	fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
		          response.json().then( function(json) {
                  const div = document.getElementById("missionTarget");
                  // Add HTML that includes the JSON data
                  div.innerHTML = `
                     <h2>Mission Destination</h2>
						<ol>
						<li>Name: ${json.name}</li>
						<li>Diameter: ${json.diameter}</li>
						<li>Star: ${json.star}</li>
						<li>Distance from Earth: ${json.distance}</li>
						<li>Number of Moons: ${json.moons}</li>
						</ol>
						<img src="${json.image}">
                  `;
               });
            });
         
         
         	let form = document.querySelector("form");
         	form.addEventListener("submit", function(event) {
				 event.preventDefault();

				let pilotName = document.querySelector("input[name=pilotName]");
				let fuelLevel = document.querySelector("input[name=fuelLevel]");
				let cargoMass = document.querySelector("input[name=cargoMass]");
         		let copilotName = document.querySelector("input[name=copilotName]");

				 let arrOfChecklist = [pilotName,copilotName,fuelLevel,cargoMass];

				 if (pilotName.value === "" || copilotName.value === "" ||fuelLevel.value === ""|| cargoMass.value === "") 
				 	{
            				alert("All fields are required!");
					}
				if (typeof (pilotName.value) !== "string" || typeof(copilotName.value) !== "string" ) 
            		{
            				alert("Names must consist of letters and spaces.");
					}
 				if (typeof (fuelLevel.value) !== "number"|| typeof (cargoMass.value) !== "number") 
 					{
            				alert("Fuel and/or Cargo must be in number format");
					}

				 
        			let pilotTemp = `Pilot ${pilotName.value} Ready`;
					let copilotTemp = `Co-pilot ${copilotName.value} Ready`;
					let notEnoughFuel = `There is not enough fuel for the journey`;
					let tooMuchCargo = `There is too much cargo for the journey`;

				document.getElementById('faultyItems').style.visibility = 'visible';
				document.getElementById('pilotStatus').innerText = pilotTemp;
				document.getElementById('copilotStatus').innerText = copilotTemp;

				if(fuelLevel.value < 10000){

					document.getElementById('launchStatus').style.color = red;
					document.getElementById('launchStatus').innerText = "Shuttle not ready for launch";
					document.getElementById('fuelStatus').innerText = notEnoughFuel;

				}

				else if(cargoMass.value > 10000){
					document.getElementById('launchStatus').style.color = red;
					document.getElementById('launchStatus').innerText = "Shuttle not ready for launch";
					document.getElementById('cargoStatus').innerText = tooMuchCargo;

				}

				else{
					document.getElementById('launchStatus').style.color = green;
					document.getElementById('launchStatus').innerHTML = "Shuttle Ready for Liftoff!";


				}

      		});
		});



/* 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
