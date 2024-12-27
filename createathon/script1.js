// JavaScript for Online Sports Shop

// Handle "Order Now" button click
document.getElementById('btn').addEventListener('click', function () {
    alert('Redirecting to the order page...');
    // Replace '#' with your order page URL
    window.location.href = '#';
});

// Form validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('myname').value.trim();
    const email = document.getElementById('Email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.querySelector('input[name="mygender"]:checked');
    const country = document.getElementById('Country').value;

    // Validation checks
    if (!name) {
        alert('Name is required.');
        e.preventDefault(); // Prevent form submission
        return;
    }
    if (!email) {
        alert('Email is required.');
        e.preventDefault();
        return;
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        e.preventDefault();
        return;
    }
    if (!gender) {
        alert('Please select your gender.');
        e.preventDefault();
        return;
    }
    if (!country) {
        alert('Please select your country.');
        e.preventDefault();
        return;
    }

    alert('Form submitted successfully! Thank you for your details.');
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
