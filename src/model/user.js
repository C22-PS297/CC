class User {
    constructor (id, name, pass, email, phone) {
        this.id = id;
        this.name = name;
        this.pass = pass;
        this.email = email;
        this.phone = phone;
    }
}

class Book {
    constructor (userId, image, latitude, longitude) {
        this.userId = userId;
        this.image = image;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export default new User();