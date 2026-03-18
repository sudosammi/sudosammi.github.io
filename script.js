// --- 1. Typewriter Effect ---
const typewriterElement = document.getElementById('typewriter');
const words = [
    "a Cybersecurity Student.",
    "learning Penetration Testing.",
    "analyzing Network Security.",
    "building secure systems."
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Remove a character
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add a character
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Dynamic typing speeds
    let typingSpeed = isDeleting ? 50 : 100;

    // Pause at the end of a word
    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Wait 2 seconds before deleting
        isDeleting = true;
    } 
    // Move to the next word after deleting
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Pause before typing the next word
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect on load
document.addEventListener("DOMContentLoaded", () => {
    if (typewriterElement) {
        setTimeout(typeEffect, 1000); // Initial delay
    }
});


// --- 2. Scroll Reveal Animation ---
// We use the Intersection Observer API for high performance scroll detection
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Triggers slightly before the element fully enters
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            // Add the 'active' class to trigger the CSS transition
            entry.target.classList.add('active');
            // Stop observing once revealed so it doesn't fade out again
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(element => {
    revealOnScroll.observe(element);
});
