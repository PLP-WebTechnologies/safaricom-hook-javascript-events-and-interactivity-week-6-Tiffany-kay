// Interactive Button with onclick
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('backgroundToggle');
});

// Slider with Real-Time Feedback (oninput)
const textSizeSlider = document.getElementById('textSizeSlider');
const dynamicText = document.getElementById('dynamicText');
textSizeSlider.addEventListener('input', () => {
    dynamicText.style.fontSize = `${textSizeSlider.value}px`;
});

// Modal with Event Listeners
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Form with Validation
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = nameInput.nextElementSibling;
const emailError = emailInput.nextElementSibling;
const passwordError = passwordInput.nextElementSibling;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    if (nameInput.value.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 8 characters, including one uppercase letter and one number.';
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (valid) {
        alert('Form submitted successfully!');
    }
});


const dropdown = document.getElementById('dropdown');
const dropdownMessage = document.getElementById('dropdownMessage');
dropdown.addEventListener('change', () => {
    dropdownMessage.textContent = `You selected: ${dropdown.value}`;
});
