//Crear una clase User que me permita crear objetos con los datos de los usuarios (Nombre y Id)

class User {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }
  saludar() {
    console.log(`Hola ${this.nombre}!!, tu id es: ${this.id}`);
  }
}

const user1 = new User('Roberto', 1235546);
const user2 = new User('Carlos', 90456);
const user3 = new User('Jorge', 456562);
console.log(user1, user2, user3);
user1.saludar();