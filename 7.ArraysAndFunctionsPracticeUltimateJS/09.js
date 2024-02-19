
// Unificar ambos arrays para procesarlos en conjunto con la misma lógica (notese que el uno esta en español y el otro en ingles, primero debe abordarse ese problema)
// Obtener los Usuarios con plan de Pago
// Una vez obtenidos esos usuarios ordenarlos de mayor a menor segun su Edad
// Luego tendremos que devolver el nombre del usuario
// Luego crearemos vamos a mostrar esos nombres pero en una plantilla html
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

usuarios.map(function (u) {
  u.age = u.edad,
    u.name = u.nombre,
    u.membership = u.plan

  delete u.nombre
  delete u.edad
  delete u.plan
});


const allUsers = [...usuarios, ...users];
console.log(allUsers);
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');


let paidUsers = allUsers.filter((u) => u.membership !== 'free');
let paidUsersCopy = [...paidUsers]
console.log(paidUsers);
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');

let arrayReordering = paidUsersCopy.sort(function (a, b) {
  if (a.edad > b.edad) {
    return -1
  } else if (a.edad > b.edad) {
    return 1
  } else {
    return 0
  }
})

console.log(arrayReordering);
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');

let paidUsersName = arrayReordering.map((u) => {
  return ` Nombre:${u.name} | Edad:${u.age} | Plan:${u.membership} `
});
console.log(paidUsersName);
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');

let names = paidUsersName.map((u) =>
  `<li>${u}</li>
`).join(``)

let template =
  `<ul>
${names}</ul>
`
console.log(template);
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');


