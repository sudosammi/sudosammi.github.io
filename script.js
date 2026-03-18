
// Typing Effect

const text = "Cybersecurity Student";
let index = 0;

function typeEffect(){

if(index < text.length){

document.getElementById("typing").textContent += text.charAt(index);

index++;

setTimeout(typeEffect,80);

}

}

typeEffect();



// Scroll Fade Animation

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
threshold:0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){

entries.forEach(entry => {

if(!entry.isIntersecting){
return;
}

entry.target.classList.add("show");

observer.unobserve(entry.target);

});

}, appearOptions);

faders.forEach(fader=>{
appearOnScroll.observe(fader);
});
