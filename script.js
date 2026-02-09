// 1. Initialize Lucide Icons
lucide.createIcons();

// 2. Scroll Animation (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.content-box');
hiddenElements.forEach((el) => observer.observe(el));

// 3. Modal Logic (Card Open/Close)
const profileTrigger = document.getElementById('profileTrigger');
const modal = document.getElementById('profileModal');
const closeBtn = document.getElementById('closeBtn');

// Open Modal
profileTrigger.addEventListener('click', () => {
    modal.classList.add('active');
    startTypewriter(); // Start typing when opened
});

// Close Modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close when clicking outside card
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// 4. Typewriter Effect for Card
const text = "Beginner Python Learner";
const typeWriterElement = document.getElementById("card-typewriter");
let index = 0;
let isTyping = false; // Flag to prevent multiple loops

function startTypewriter() {
    if (isTyping) return; // If already typing, do nothing
    isTyping = true;
    typeWriterElement.innerHTML = ""; // Clear text
    index = 0;
    type();
}

function type() {
    if (index < text.length) {
        typeWriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Speed
    } else {
        isTyping = false; // Finished typing
    }
}