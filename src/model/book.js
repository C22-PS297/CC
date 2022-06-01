class Book {
    constructor (userId, bookId, image, name, category, weight, price) {
        this.userId = userId;
        this.bookId = bookId;
        this.image = image;
        this.name = name;
        this.category = category;
        this.weight = weight;
        this.price = price;
    }
}

export default new Book();