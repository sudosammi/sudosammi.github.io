// 1. Initialize Lucide Icons
lucide.createIcons();

// 2. Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.content-box');
hiddenElements.forEach((el) => observer.observe(el));

// ==========================================
// 3. Modal Logic (Updated for Mobile Inputs)
// ==========================================
const modal = document.getElementById('profileModal');
const closeBtn = document.getElementById('closeBtn');

// Trigger Elements (Desktop & Mobile)
const desktopTrigger = document.getElementById('profileTriggerDesktop');
const mobileIconTrigger = document.getElementById('mobileProfileTrigger');
const mobileBtnTrigger = document.getElementById('mobileContactBtn');

// Function to Open Modal
function openModal() {
    modal.classList.add('active');
    startTypewriter();
}

// Add Click Events to ALL triggers
if(desktopTrigger) desktopTrigger.addEventListener('click', openModal);
if(mobileIconTrigger) mobileIconTrigger.addEventListener('click', openModal);
if(mobileBtnTrigger) mobileBtnTrigger.addEventListener('click', openModal);


// Close Modal Events
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// 4. Typewriter Effect for Card (Same as before)
const text = "Beginner Python Learner";
const typeWriterElement = document.getElementById("card-typewriter");
let index = 0;
let isTyping = false;

function startTypewriter() {
    if (isTyping) return;
    isTyping = true;
    typeWriterElement.innerHTML = "";
    index = 0;
    type();
}

function type() {
    if (index < text.length) {
        typeWriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    } else {
        isTyping = false;
    }
}
