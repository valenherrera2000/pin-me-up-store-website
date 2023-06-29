class PinProduct {
    constructor(id, name, price) {
        this.id = id;
        this.name = name.toUpperCase();
        this.price = parseInt(price);
    }
}

const pinProducts = [
    new PinProduct(1, "Mario Pin", 5),
    new PinProduct(2, "Pac-Man Pin", 3),
    new PinProduct(3, "Tetrix Pin", 4),
    new PinProduct(4, "Scooby-Doo Pin", 2),
    new PinProduct(5, "Betty Boop Pin", 6),
    new PinProduct(6, "Mickey Mouse Pin", 7),
    new PinProduct(7, "Bugs Bunny Pin", 4),
    new PinProduct(8, "Popeye Pin", 5),
    new PinProduct(9, "Tom and Jerry Pin", 3),
    new PinProduct(10, "Road Runner Pin", 4),
    new PinProduct(11, "Felix the Cat Pin", 6),
    new PinProduct(12, "Donald Duck Pin", 7)
];


