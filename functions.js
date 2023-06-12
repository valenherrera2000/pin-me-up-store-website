// Objects
let pins = [
    { id: 1, name: "Pin 1", price: 5.99 },
    { id: 2, name: "Pin 2", price: 3.99 },
    { id: 3, name: "Pin 3", price: 7.99 },
    { id: 4, name: "Pin 4", price: 6.49 },
    { id: 5, name: "Pin 5", price: 4.99 },
    { id: 6, name: "Pin 6", price: 8.99 },
    { id: 7, name: "Pin 7", price: 9.99 },
    { id: 8, name: "Pin 8", price: 3.49 },
    { id: 9, name: "Pin 9", price: 7.49 },
    { id: 10, name: "Pin 10", price: 6.99 },
    { id: 11, name: "Pin 11", price: 5.49 },
    { id: 12, name: "Pin 12", price: 4.49 },
    { id: 13, name: "Pin 13", price: 7.99 },
    { id: 14, name: "Pin 14", price: 3.99 },
    { id: 15, name: "Pin 15", price: 6.49 },
];

let cart = [];

// Functions
function addToCart(pinId) {
    const pin = pins.find((pin) => pin.id === pinId);
    if (pin) {
        cart.push(pin);
        alert(`The pin "${pin.name}" has been added to the cart.`);
    } else {
        alert("The pin does not exist.");
    }
}

function removeFromCart(pinId) {
    const index = cart.findIndex((pin) => pin.id === pinId);
    if (index !== -1) {
        const removedPin = cart.splice(index, 1)[0];
        alert(`The pin "${removedPin.name}" has been removed from the cart.`);
    } else {
        alert("The pin is not in the cart.");
    }
}

function calculateTotal() {
    let total = 0;
    cart.forEach((pin) => {
        total += pin.price;
    });
    return total;
}

// Simulation of the purchase process
alert("Welcome to the pin store!");

while (true) {
    const action = prompt(
        "See the options below and enter:\n\n'A' to add a pin to the cart\n'R' to remove a pin from the cart\n'C' to view the cart\n'P' to complete the purchase\n'X' to close the prompt window\n"
    ).toLowerCase();

    if (action === "a") {
        const pinId = parseInt(prompt("Enter the ID of the pin you want to add:"));
        addToCart(pinId);
    } else if (action === "r") {
        const pinId = parseInt(prompt("Enter the ID of the pin you want to remove:"));
        removeFromCart(pinId);
    } else if (action === "c") {
        let cartItems = "Cart:\n";
        cart.forEach((pin) => {
            cartItems += `ID: ${pin.id}, Name: ${pin.name}, Price: $${pin.price}\n`;
        });
        cartItems += `Total: $${calculateTotal()}`;
        alert(cartItems);
    } else if (action === "p") {
        alert(`Thank you for your purchase! The total amount to pay is: $${calculateTotal()}`);
        break;
    } else if (action === "x") {
        break;
    } else {
        alert("Invalid action. Please try again.");
    }
}
