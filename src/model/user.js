class User {
    constructor (id, name, pass, email, phone, longitude, latitude) {
        this.id = id;
        this.name = name;
        this.pass = pass;
        this.email = email;
        this.phone = phone;
        this.longitude = longitude;
        this.latitude = latitude;
    }
}

export default new User();