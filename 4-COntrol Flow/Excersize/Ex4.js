checkSpeed(75);
function checkSpeed(speed){
    const speedLimit =70;
    const demeritPointperKm =5;
   if(speed<speedLimit+demeritPointperKm){
    console.log("ok");
    return;}
      const points = Math.floor((speed-speedLimit) /demeritPointperKm);
      if(points>=12)
      console.log("License Suspended");
      else
      console.log("Points",points);

}

