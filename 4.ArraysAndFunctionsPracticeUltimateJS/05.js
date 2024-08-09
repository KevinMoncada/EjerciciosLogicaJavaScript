// Unificar ambos arrays para procesarlos en conjunto con la misma lógica (notese que el uno esta en español y el otro en ingles, primero debe abordarse ese problema)
// Una vez obtenidos esos usuarios ordenarlos de mayor a menor segun su Edad
// Obtener los Usuarios con plan de Pago
// Luego tendremos que devolver el nombre del usuario
// Luego vamos a mostrar esos nombres pero en una plantilla html
// Luego la vamos a imprimir en consola

const usuarios = [
  { edad: 17, nombre: 'Nico', plan: 'premium' },
  { edad: 13, nombre: 'Daniela', plan: 'free' },
  { edad: 32, nombre: 'Juliana', plan: 'free' },
  { edad: 32, nombre: 'Felipe', plan: 'gold' },
  { edad: 25, nombre: 'Sara', plan: 'gold' },
]

const users = [
  { age: 16, name: 'Alfonso', membership: 'premium' },
  { age: 22, name: 'Marco', membership: 'free' },
  { age: 34, name: 'Melissa', membership: 'free' },
  { age: 45, name: 'Lina', membership: 'gold' },
  { age: 56, name: 'Carlos', membership: 'gold' },
]

//1. Cambio de Idioma (Vamos a dejar ambos en ingles)
usuarios.forEach(user => {
  user.age = user.edad;
  delete user.edad;
  user.name = user.nombre;
  delete user.nombre;
  user.membership = user.plan;
  delete user.plan;
});

//2. Unificacion de arrays
let fullUsersArray = [...usuarios, ...users];

//3. Orden Descendente según la edad
fullUsersArray.sort((a, b) => b.age - a.age);
console.log(fullUsersArray);

//4. Filtrado de usuarios de pago
let fullPaidUsers = fullUsersArray.filter((user) => (user.membership !== "free"));
console.log(fullPaidUsers);

//5.  Extracción/Conversion de la lista de usuarios a Strings
let fullPaidUsersStrings = fullPaidUsers.map((user) => `\n<li>Nombre: ${user.name}, Edad :${user.age}, Plan: ${user.membership}</li>`).join(``);

//6. Salida por Consola
console.log(`<ul>${fullPaidUsersStrings}
</ul>`);