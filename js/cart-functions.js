
const allCollection = document.getElementById('all').querySelector('.collection');
const saleCollection = document.getElementById('sale').querySelector('.collection');
const newCollection = document.getElementById('new').querySelector('.collection');


for (let i = 0; i < pinProducts.length; i++) {
    if (i < 4) {
        new ProductToHTML(pinProducts[i], allCollection);
    } else if (i < 8) {
        new ProductToHTML(pinProducts[i], saleCollection);
    } else {
        new ProductToHTML(pinProducts[i], newCollection);
    }
}


/* Add to Cart functionality */

const buttons = document.getElementsByClassName('buy');
const cartTable = document.querySelector('.cart-table');


const cartArray = [];

for (const button of buttons) {
    button.addEventListener('click', () => {
        const getProducts = pinProducts.find((product) => product.id == button.id);
        addToCart(getProducts);
    });

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

        calculateTotal();

        //Delete items from cart

        const trashIcons = document.querySelectorAll('.trash-bin');

        for (const trashIcon of trashIcons) {
            trashIcon.addEventListener('click', () => {
                const row = trashIcon.parentElement.parentElement;
                const productId = row.querySelector('td:first-child').textContent;

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


                //Calculate amount again
                calculateTotal();
            });
        }

    }
};


/* Calculate Total & Subtotal function */

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
        totalElement.innerText = `TOTAL AMOUNT  (10% OFF -shipping): $${total.toFixed(2)}`;
        subtotalElement.innerText = `SUBTOTAL: $${subtotal.toFixed(2)}`;
    } else {
        total += 50; // $50 shipping cost
        totalElement.innerText = `TOTAL AMOUNT (+shipping): $${total.toFixed(2)}`;
        subtotalElement.innerText = `SUBTOTAL: $${subtotal.toFixed(2)}`;
    }
};


