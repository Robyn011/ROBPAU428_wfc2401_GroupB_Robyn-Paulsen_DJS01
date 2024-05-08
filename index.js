

const velocity = 10000; // velocity (km/h) 
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


//calculates the final/new velocity
function calcNewVel() { 
  return velocity  + ((acceleration*3.6) * time)
}

//calculates the final/ new velocity
function calcNewDist() { 
  return distance + (velocity*(time/60/60)) 
}

//calculates the final/ new velocity
function calcRemainingFuel() { 
  return fuel - (fuelBurnRate*time)
}
var newDistance = calcNewDist() ;
var remainingFuel = calcRemainingFuel() ;
var newVelocity = calcNewVel() ;

console.log(`Approximately: ${newVelocity} km/h after correction.`);
console.log(`Approximately: ${newDistance} km after correction.`);
console.log(`Approximately: ${remainingFuel} kg after correction.`);






