console.log("Script Loaded");
const popup =
document.getElementById("popup");

const title =
document.getElementById("popupTitle");

const text =
document.getElementById("popupText");

window.showInfo = function(part){

popup.style.display="flex";

if(part==="wings"){

title.innerHTML="🪽 Aircraft Wings";

text.innerHTML=
`
Purpose:
Generate lift and maintain stability.

Fun Fact:
The Boeing 787 wing can flex several meters upward during turbulence.

Engineering:
Designed using advanced composite materials.
`;

}
else if(part==="engines"){

title.innerHTML="Aircraft Engines";

text.innerHTML=
"The Dreamliner uses high-bypass turbofan engines that provide efficient thrust.";

}

else if(part==="cockpit"){

title.innerHTML="Cockpit";

text.innerHTML=
"The cockpit contains flight controls, navigation systems, and aircraft displays.";

}

else if(part==="rudder"){

title.innerHTML="Rudder";

text.innerHTML=
"The rudder controls yaw and helps the aircraft turn left or right.";

}

else if(part==="gear"){

title.innerHTML="Landing Gear";

text.innerHTML=
"The landing gear supports takeoff, landing, and taxiing.";

}

else{

title.innerHTML="Aerodynamics";

text.innerHTML=
"Lift, drag, thrust, and weight are the four forces that govern flight.";

}

}

document
.getElementById("closeBtn")
.onclick=()=>{

popup.style.display="none";

};
