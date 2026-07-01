console.log("AeroVision Loaded");

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

text.innerHTML=`

<h3>Purpose</h3>
<p>Generate lift and maintain stability.</p>

<h3>Fun Fact</h3>
<p>The Boeing 787 wing can flex dramatically during turbulence.</p>

<h3>Engineering</h3>
<p>Made using advanced composite materials.</p>

`;

}

else if(part==="engines"){

title.innerHTML="⚙ Aircraft Engines";

text.innerHTML=`

<h3>Purpose</h3>
<p>Provide thrust for flight.</p>

<h3>Fun Fact</h3>
<p>The Dreamliner uses highly efficient turbofan engines.</p>

`;

}

else if(part==="cockpit"){

title.innerHTML="🎛 Cockpit";

text.innerHTML=`

<h3>Purpose</h3>
<p>Control center of the aircraft.</p>

<h3>Systems</h3>
<p>Contains navigation, flight controls, and communication systems.</p>

`;

}

else if(part==="gear"){

title.innerHTML="🛞 Landing Gear";

text.innerHTML=`

<h3>Purpose</h3>
<p>Supports takeoff, landing, and taxiing.</p>

<h3>Fun Fact</h3>
<p>The landing gear retracts after takeoff to reduce drag.</p>

`;

}

else if(part==="rudder"){

title.innerHTML="🧭 Rudder";

text.innerHTML=`

<h3>Purpose</h3>
<p>Controls yaw movement of the aircraft.</p>

`;

}

else{

title.innerHTML="🛫 Aerodynamics";

text.innerHTML=`

<h3>Four Forces</h3>

<p>
Lift • Weight • Thrust • Drag
</p>

`;

}

};

document
.getElementById("closeBtn")
.onclick = ()=>{

popup.style.display="none";

};

popup.addEventListener("click",(e)=>{

if(e.target===popup){

popup.style.display="none";

}

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popup.style.display="none";

}

});

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=
+counter.getAttribute("data-target");

const count=
+counter.innerText;

const increment=
target/100;

if(count<target){

counter.innerText=
Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=
target.toLocaleString();

}

};

updateCounter();

});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card, .system-card, .stat-card").forEach((item) => {

    gsap.from(item, {

        opacity:0,

        y:80,

        scale:0.9,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:item,

            start:"top 85%",

            toggleActions:"play none none none"

        }

    });

});

// LENIS SMOOTH SCROLL

const lenis = new Lenis({

    duration:1.2,

    smoothWheel:true,

    touchMultiplier:2

});

function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

// HERO INTRO ANIMATION

const heroTimeline = gsap.timeline();

heroTimeline

.from(".badge",{
    y:-40,
    opacity:0,
    duration:0.8,
    ease:"power3.out"
})

.from(".hero h1",{
    x:-100,
    opacity:0,
    duration:1,
    ease:"power3.out"
},"-=0.4")

.from(".hero p",{
    y:40,
    opacity:0,
    duration:0.8
},"-=0.5")

.from(".hero-buttons",{
    y:40,
    opacity:0,
    duration:0.8
},"-=0.4")

.from(".hero-aircraft",{
    x:200,
    opacity:0,
    duration:1.2,
    ease:"power3.out"
},"-=0.8");

const aircraft = document.querySelector(".hero-aircraft");

document.addEventListener("mousemove",(e)=>{

const x = (e.clientX/window.innerWidth - 0.5) * 20;
const y = (e.clientY/window.innerHeight - 0.5) * 20;

gsap.to(aircraft,{
    x:x,
    y:y,
    duration:1,
    ease:"power2.out"
});

});

// SCROLL PROGRESS BAR

const progressBar =
document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scroll =
window.scrollY;

const height =
document.documentElement.scrollHeight-
window.innerHeight;

const progress =
(scroll/height)*100;

progressBar.style.width=
progress+"%";

});

// CURSOR GLOW

const glow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

gsap.to(glow,{

x:e.clientX,

y:e.clientY,

duration:0.3,

ease:"power2.out"

});

});


