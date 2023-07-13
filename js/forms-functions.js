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


//Checkout when button click
const submitButton = document.querySelector('.submit button[type="button"]');

submitButton.onclick = () => {
    const isFormValid = validateForm();
    const cartRows = cartTable.getElementsByTagName('td');
    const isCartEmpty = cartRows.length === 0;

    if (!isFormValid && isCartEmpty) {
        // Both form fields & cart not valid
        Swal.fire({
            title: 'Oops...😲',
            text: 'You have invalid information! Please, review and submit again',
            width: '70rem'
          });
        return;
    }

    if (!isFormValid) {
        // Form fields not valid
        Swal.fire({
            title: 'Oops...😲',
            text: 'Your form fields are not valid! Please, review and submit again.',
            width: '70rem'
          });
        return;
    }

    if (isCartEmpty) {
        // Cart is empty
        Swal.fire({
            title: 'Oops...😲',
            text: 'Your cart is empty! Please, review and submit again.',
            width: '70rem'
          });
        return;
    }

    // Validation passed
    storeFormData();
    resetPage();
    purchaseDetails();
}

// Reset Purchase Info
function resetPage() {
    cartArray = [];

    const rows = cartTable.querySelectorAll('tr');

    for (let i = 1; i < rows.length; i++) {
        rows[i].remove(); // Remove the cart rows
    }
    
    const itemCount = document.getElementById('itemCount');
    itemCount.textContent = '0 ITEMS'; // Reset item count
    
    const subtotalElement = document.querySelector('.subtotal');
    const totalElement = document.querySelector('.total');
    subtotalElement.textContent = 'SUBTOTAL:'; // Clear subtotal
    totalElement.textContent = 'TOTAL AMOUNT:'; // Clear total
    
    form.reset(); // Reset forms
}


//Show Purchase details
function purchaseDetails() {
    const formDataJSON = localStorage.getItem('formData');

    if (formDataJSON) {
        const formData = JSON.parse(formDataJSON);
        const purchaseDetails = document.querySelector('.purchase-details');

        //Submit message
        purchaseDetails.innerHTML =
            `
            <h3>SUCCESS!</h3>
            <p>${formData.name}, your order has been placed!<br>
            Sit tight until we send over your pins to your home address:<br>
            ${formData.address}<br>
            Stay tuned for further details!</p>
            `;
        setTimeout(() => {
            purchaseDetails.innerHTML = ''; // Clear the content after 15 seconds
        }, 10000);
    };
}

