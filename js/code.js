/* Add product array to HTML */


class ProductToHTML {
    constructor(product, collectionElement) {
        const div = document.createElement('div');

        div.innerHTML = `
        <img src="./assets/img/pin-picture.png" alt="pin image">
        <button id=${product.id} class= "buy" type="button">BUY PIN</button>
        <p>${product.name}</p>
        <p>$${product.price}</p>
      `;

        collectionElement.appendChild(div);
    }
}


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
            </tr>
    `;
    }
}