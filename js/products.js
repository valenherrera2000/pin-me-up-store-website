class pinConstructor {
    constructor(id, name, price) {
        this.id = id;
        this.name = name.toUpperCase();
        this.price = parseInt(price);
    }
}

const pinProducts = [
    new pinConstructor(1, "Mario Pin", 5),
    new pinConstructor(2, "Pac-Man Pin", 3),
    new pinConstructor(3, "Tetrix Pin", 4),
    new pinConstructor(4, "Scooby-Doo Pin", 2),
    new pinConstructor(5, "Betty Boop Pin", 6),
    new pinConstructor(6, "Mickey Mouse Pin", 7),
    new pinConstructor(7, "Bugs Bunny Pin", 4),
    new pinConstructor(8, "Popeye Pin", 5),
    new pinConstructor(9, "Tom Pin", 3),
    new pinConstructor(10, "Road Runner Pin", 4),
    new pinConstructor(11, "Felix the Cat Pin", 6),
    new pinConstructor(12, "Donald Duck Pin", 7)
];



class ProductToHTML {
    constructor(product, collectionElement) {
        const div = document.createElement('div');

        div.innerHTML = `
        <img src="" alt="pin image">
        <button id="${product.id}" class="buy" type="button">BUY PIN</button>
        <p>${product.name}</p>
        <p>$${product.price}</p>
      `;
        collectionElement.appendChild(div); `
        `;
    }
}

/* function updateProductImages() {
    const productsJSON = '/products.json'; // URL or path to the JSON file

    fetch(productsJSON)
        .then((response) => response.json())
        .then(() => {
            for (let i = 0; i < pinProducts.length; i++) {
                const pinProduct = pinProducts[i];
                const products = productsJSON.products;
                const matchedProduct = products.find((item) => parseInt(item.id) === pinProduct.id);

                if (matchedProduct) {
                    const productElement = document.querySelector(`.collection [data-id="${pinProduct.id}"] img`);
                    if (productElement) {
                        productElement.src = productsJSON.img;
                    }
                }
            }
        })
        .catch((error) => {
            console.error('Error fetching product information:', error);
        });
}


// updateProductImages(); */
// function test(){
//     const productsJSON = '/products.json';
//     fetch(productsJSON)
//     .then(result => result.json())
//     .then(data => {
//         console.log(data)
//     })
// }
