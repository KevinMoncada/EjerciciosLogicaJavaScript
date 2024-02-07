//Crear una clase User que me permita crear objetos con los datos de los usuarios (Nombre y Id), el Id debe generarse como numero aleatorio

class User {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
}

let user1 = new User('Jairo', 109364);
let user2 = new User('Roberto', 145231);
let user3 = new User('Alan', 876432);

console.log(user1, user2, user3)


