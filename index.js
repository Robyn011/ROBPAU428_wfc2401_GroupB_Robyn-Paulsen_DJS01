

const velocity = 10000; // velocity (km/h) 
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)
var newDistance;
var remainingFuel;
var newVelocity;

//calculates the final/new velocity
function calcNewVel() { 
  newVelocity = velocity  + ((acceleration*3.6) * time);
  
  if (newVelocity != 48880 ) 
    {
      throw new Error (`${newVelocity} km/h is not equal to 48880km/h.`);
    }
    else 
    {
     console.log(`Corrected New Velocity:${newVelocity} km/h.`);
    }
  
};
calcNewVel()

//calculates the final/ new velocity
function calcNewDist() { 
 newDistance= distance + (velocity*(time/60/60)) ;
 if (newDistance != 10000 ) 
  {
    throw new Error (`${newDistance} km is not equal to 10000km.`);
  }
  else 
  {
   console.log(`Corrected New Distance: ${newDistance} km.`);
  }

};

calcNewDist()

//calculates the final/ new velocity
function calcRemainingFuel() { 
  remainingFuel =fuel - (fuelBurnRate*time);
  if (remainingFuel != 3200 ) 
    {
     throw new Error (`${remainingFuel} kg is not equal to 3200kg.`);
    }
    else 
    {
     console.log(`Corrected Remaining Fuel: ${remainingFuel} kg.`);

    }
 
};
calcRemainingFuel()




