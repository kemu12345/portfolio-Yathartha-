// Step 1: Animate Skill Bars when visible
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            bar.style.width = percent + '%';
            bar.parentElement.nextElementSibling.textContent = percent + '%';
        }
    });
};
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Step 2: Contact Form + localStorage
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msg = document.getElementById('form-message');

    if (!name || !email || !message) {
        msg.style.color = 'red';
        msg.textContent = 'All fields are required!';
        return;
    }
    if (!email.includes('@')) {
        msg.style.color = 'red';
        msg.textContent = 'Please enter a valid email!';
        return;
    }

    // Save to localStorage
    const formData = { name, email, message };
    localStorage.setItem('contactForm', JSON.stringify(formData));

    msg.style.color = 'green';
    msg.textContent = 'Thank you! Redirecting...';
    
        window.location.href = 'details.html';
    
});

// Step 3: Open projects without <a> tags
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        if (url) window.location.href = url;
    });
});

// Step 4: Canvas Drawing
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#6200ea';
ctx.fillRect(50, 50, 200, 100);
ctx.font = '20px Arial';
ctx.fillStyle = 'white';
ctx.fillText('Hello Canvas!', 70, 100);

// Step 5: Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function showSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
next.addEventListener('click', () => showSlide(currentSlide + 1));
prev.addEventListener('click', () => showSlide(currentSlide - 1));
 

// Step 6: Dark/Light Mode Toggle
const toggle = document.getElementById('theme-switch');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
// Step 7: Back-to-Top Button – FIXED VERSION
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {                    // show after scrolling 400px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// CONTACT FORM – SEND & SHOW ON NEXT PAGE (Step 2)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    // Simple validation
    if (!name || !email || !message) {
        status.style.color = "red";
        status.textContent = "Please fill all fields!";
        return;
    }

    // Save to localStorage
    localStorage.setItem("contactForm", JSON.stringify({name, email, message}));

    // Success message
    status.style.color = "green";
    status.textContent = "Message Sent! Redirecting...";

    // Go to thank you page
    setTimeout(() => {
        window.location.href = "details.html";
    }, 1000);
});