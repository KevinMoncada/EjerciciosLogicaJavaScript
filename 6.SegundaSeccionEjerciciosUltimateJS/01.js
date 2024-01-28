//Crear una clase User que me permita crear objetos con los datos de los usuarios (Nombre y Id), el Id debe generarse como numero aleatorio

class User {
    constructor(nombre) {
        this.nombre = nombre;
        this.id = ((Math.random() * 10) + 1);
    }
}


let user1 = new User('Albeiro');
console.log(user1)

let user2 = new User('Ricardo')
console.log(user2)