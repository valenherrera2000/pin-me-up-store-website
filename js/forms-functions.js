// Get form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const commentsInput = document.getElementById('comments');

// Function to validate form fields
function validateForm() {
    let isValid = true;

    // Name validation
    if (nameInput.value.trim().length < 3) {
        nameInput.style.borderColor = 'red';
        isValid = false;
    } else {
        nameInput.style.borderColor = '';
    }

    // Phone validation
    if (phoneInput.value.trim().length < 10) {
        phoneInput.style.borderColor = 'red';
        isValid = false;
    } else {
        phoneInput.style.borderColor = '';
    }

    // Email validation
    if (!emailInput.value.includes('@')) {
        emailInput.style.borderColor = 'red';
        isValid = false;
    } else {
        emailInput.style.borderColor = '';
    }

    // Address validation
    if (addressInput.value.trim().length < 3) {
        addressInput.style.borderColor = 'red';
        isValid = false;
    } else {
        addressInput.style.borderColor = '';
    }

    // Comments validation (optional)
    if (commentsInput.value.length > 300) {
        commentsInput.style.borderColor = 'red';
        isValid = false;
    } else {
        commentsInput.style.borderColor = '';
    }

    return isValid;
}

// Event listener to form submit event
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Validate the form
    if (!validateForm()) {
        return;
    }

    // Store form data
    storeFormData();

    // Display purchase details
    displayPurchaseDetails();

    // Redirect to checkout.html
    window.location.href = './html/checkout.html';
});

// Validate event before window load
window.addEventListener('beforeunload', function (event) {
    // Validate the form
    if (!validateForm()) {
        event.preventDefault();
        event.returnValue = '';
    }
});

// Store form data in local storage
function storeFormData() {
    const formData = {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        address: addressInput.value.trim(),
        comments: commentsInput.value.trim()
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

// Display purchase details
function displayPurchaseDetails() {
    const purchaseDetails = document.querySelector('.purchase-details');
    const formDataJSON = localStorage.getItem('formData');

    if (formDataJSON) {
        const formData = JSON.parse(formDataJSON);

        purchaseDetails.innerHTML = `
            <p>${formData.name}, your order has been placed!<br>
            Sit tight until we send over your pins to your home address: ${formData.address}<br>Stay tuned for further details!</p>
        `;
    }
}

console.log(purchaseDetails)