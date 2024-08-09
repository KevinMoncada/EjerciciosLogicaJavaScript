//Crear una clase User que me permita crear objetos con los datos de los usuarios (Nombre y Id)

class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

let user1 = new User('Juan', 9821234);
let user2 = new User('Carlos', 856745);
let user3 = new User('Ernesto', 4566323);

console.log(user1, user2, user3);