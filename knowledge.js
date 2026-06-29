const articles = {

aircraft:{

title:"✈ Boeing 787 Dreamliner",

tag:"BOEING AIRCRAFT",

intro:"The Boeing 787 Dreamliner is one of the world's most advanced passenger aircraft, built using lightweight composite materials and efficient turbofan engines.",

stats:[
["14,140 km","Maximum Range"],
["903 km/h","Cruise Speed"],
["242–335","Passengers"],
["50%","Composite Material"]
],

features:[
"🪶 Lightweight Carbon Fiber",
"⚙ Efficient Turbofan Engines",
"🛫 Fly-By-Wire Controls",
"🌍 Long Range Capability",
"🪟 Larger Windows",
"📡 Digital Flight Deck"
],

facts:[
"First commercial aircraft with extensive composite fuselage.",
"Uses electric systems instead of pneumatic systems.",
"Wings flex dramatically during flight.",
"Lower cabin altitude improves passenger comfort.",
"Consumes around 20% less fuel.",
"Used by airlines worldwide."
]

},

systems:{

title:"⚙ Aircraft Systems",

tag:"ENGINEERING",

intro:"Modern aircraft contain highly advanced systems that work together to ensure safe, efficient and comfortable flight.",

stats:[
["6","Primary Systems"],
["1000+","Sensors"],
["24/7","Monitoring"],
["99.99%","Reliability"]
],

features:[
"⚡ Electrical System",
"⛽ Fuel System",
"💨 Hydraulic System",
"❄ Environmental Control",
"📡 Avionics",
"🛞 Landing Gear"
],

facts:[
"Hydraulics move control surfaces.",
"Electrical systems power avionics.",
"Fuel systems balance aircraft weight.",
"Redundant systems improve safety.",
"Modern aircraft monitor themselves.",
"Most failures have backup systems."
]

},

flight:{

title:"🛫 Principles of Flight",

tag:"AERODYNAMICS",

intro:"Flight depends on four primary forces working together.",

stats:[
["4","Forces"],
["Lift","Upward"],
["Drag","Resistance"],
["Thrust","Forward"]
],

features:[
"⬆ Lift",
"⬇ Weight",
"➡ Thrust",
"⬅ Drag",
"🪽 Airfoil",
"🌪 Stability"
],

facts:[
"Lift is produced by wing shape.",
"Thrust comes from engines.",
"Drag opposes motion.",
"Weight acts downward.",
"Pilots constantly balance all forces.",
"Airflow determines lift."
]

},

navigation:{

title:"📡 Navigation",

tag:"AVIONICS",

intro:"Aircraft navigation combines satellites, radios and onboard computers.",

stats:[
["GPS","Primary"],
["ILS","Landing"],
["VOR","Navigation"],
["INS","Backup"]
],

features:[
"🛰 GPS",
"📡 ILS",
"📍 VOR",
"🧭 INS",
"📻 Radio Navigation",
"🖥 Flight Management"
],

facts:[
"GPS provides global positioning.",
"ILS guides aircraft to runways.",
"Modern aircraft combine many navigation methods.",
"Pilots constantly verify navigation data.",
"Navigation computers calculate routes.",
"Autopilot uses navigation inputs."
]

}

};

const menu=document.querySelectorAll(".sidebar li");

const content=document.getElementById("content");

menu.forEach(item=>{

item.onclick=()=>{

menu.forEach(i=>i.classList.remove("active"));

item.classList.add("active");

const page=item.dataset.page;

const a=articles[page];

if(!a) return;

content.innerHTML=`

<span class="tag">${a.tag}</span>

<h1>${a.title}</h1>

<p class="intro">${a.intro}</p>

<div class="stats">

${a.stats.map(s=>`

<div class="stat">

<h3>${s[0]}</h3>

<p>${s[1]}</p>

</div>

`).join("")}

</div>

<h2>Highlights</h2>

<div class="featureGrid">

${a.features.map(f=>`

<div class="featureCard">

${f}

</div>

`).join("")}

</div>

<h2>Did You Know?</h2>

<div class="facts">

${a.facts.map(f=>`

<div>${f}</div>

`).join("")}

</div>

`;

};

});

// ================= SEARCH =================

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", () => {

const value = searchBox.value.toLowerCase();

menu.forEach(item => {

const text = item.innerText.toLowerCase();

if(text.includes(value)){

item.style.display="block";

}else{

item.style.display="none";

}

});

});


// ================= ANIMATION =================

function animateContent(){

content.animate(

[

{

opacity:0,

transform:"translateY(25px)"

},

{

opacity:1,

transform:"translateY(0px)"

}

],

{

duration:500,

easing:"ease"

}

);

}

menu.forEach(item=>{

item.addEventListener("click",()=>{

setTimeout(animateContent,50);

});

});
