// Smooth Scroll for "See My Work" button
document.querySelector('#blau').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior
    const targetSection = document.querySelector('#projects');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

// Form Validation on Submit
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        event.preventDefault();  // Prevent form submission
        alert('Please fill out all fields before submitting!');
    }
});