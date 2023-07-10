//HTML constructor

class ProductToHTML {
    constructor(product, collectionElement) {
        const div = document.createElement('div');

        div.innerHTML = `
            <img src="${product.img}" alt="pin image">
            <button id="${product.id}" class="buy" type="button">BUY PIN</button>
            <p>${product.name}</p>
            <p>$${product.price}</p>
        `;

        collectionElement.appendChild(div);
    }
}

//Determine HTML classes

const allCollection = document.getElementById('all').querySelector('.collection');
const saleCollection = document.getElementById('sale').querySelector('.collection');
const newCollection = document.getElementById('new').querySelector('.collection');


//Fetch data and use with HTML constructor function

function addProducts() {
    const productsJSON = '/products.json';

    fetch(productsJSON)
        .then(result => result.json())
        .then(data => {
            const productData = data.products;

            for (let i = 0; i < productData.length; i++) {
                const product = productData[i];

                if (i < 4) {
                    new ProductToHTML(product, allCollection);
                } else if (i < 8) {
                    new ProductToHTML(product, saleCollection);
                } else {
                    new ProductToHTML(product, newCollection);
                }
            }
        });
}

addProducts();

