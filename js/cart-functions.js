/* Add to Cart functionality */

//Find HTML elements
const buttons = document.getElementsByClassName('buy');
const cartTable = document.querySelector('.cart-table');

//Determine products & cart variables
let cartArray = [];
let pinProducts = [];

fetch('/products.json')
    .then(result => result.json())
    .then(data => {
        pinProducts = data.products; // Assign products to pinProducts variable
        buttonEvent();
    })
    .catch(error => console.error('Error fetching products:', error));


//Add products to Cart function
function addToCart(product) {
    cartArray.push(product);
    cartTable.innerHTML += `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td><img class="trash-bin" src="/assets/img/icon-trash.png" alt="trash icon"></td>
        </tr>
    `;

    // Update item count
    const itemCount = document.getElementById('itemCount');
    itemCount.textContent = cartArray.length + (cartArray.length === 1 ? ' ITEM' : ' ITEMS');

    //Calculate total
    calculateTotal();
}


//Remove items from cart function
function removeFromCart(productId, row) {
    // Remove the product from the cartArray
    const index = cartArray.findIndex((product) => product.id === parseInt(productId));
    if (index > -1) {
        cartArray.splice(index, 1);
    }

    // Remove the row from the cart table
    row.remove();

    // Update item count
    const itemCount = document.getElementById('itemCount');
    itemCount.textContent = cartArray.length + (cartArray.length === 1 ? ' ITEM' : ' ITEMS');

    //Calculate total again
    calculateTotal();
}


//Calculate Totals function
function calculateTotal() {
    const cartTable = document.querySelector('.cart-table');
    const cartRows = cartTable.getElementsByTagName('tr');
    const subtotalElement = document.querySelector('.subtotal');
    const totalElement = document.querySelector('.total');

    let subtotal = 0;

    // Calculate subtotal
    for (let i = 1; i < cartRows.length; i++) {
        const priceCell = cartRows[i].getElementsByTagName('td')[2];
        const price = parseFloat(priceCell.innerText.replace('$', ''));
        subtotal += price;
    }

    let total = subtotal;

    // Apply discounts and shipping
    if (cartRows.length > 5) {
        total -= subtotal * 0.1; // 10% discount
    }

    if (cartRows.length > 4) {
        totalElement.innerText = `TOTAL AMOUNT  (10% OFF - shipping): $${total.toFixed(2)}`;
        subtotalElement.innerText = `SUBTOTAL: $${subtotal.toFixed(2)}`;
    } else {
        total += 50; // $50 shipping cost
        totalElement.innerText = `TOTAL AMOUNT (+ shipping): $${total.toFixed(2)}`;
        subtotalElement.innerText = `SUBTOTAL: $${subtotal.toFixed(2)}`;
    }
}


//Set button event listeners
function buttonEvent() {
    //Add to cart when clicking 'buy' button
    for (const button of buttons) {
        button.addEventListener('click', () => {
            const getProducts = pinProducts.find((product) => product.id == button.id);

            //Call addToCart function
            addToCart(getProducts); 
        });
    }

    // Delete items when clicking on 'trash' icon
    const cartTable = document.querySelector('.cart-table');
    cartTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('trash-bin')) { 
            const row = event.target.parentElement.parentElement;
            const productId = row.querySelector('td:first-child').textContent;

            //Call removeFromCart function
            removeFromCart(productId, row);
        }
    });
}



