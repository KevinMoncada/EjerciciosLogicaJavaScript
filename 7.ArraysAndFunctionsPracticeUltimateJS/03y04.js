//Crear una función que me muestre los usuarios de pago solamente y otra que me muestre la cantidad de usuarios suscrita a cada plan
const usuarios = [
  { edad: 17, nombre: 'nico', plan: 'premium' },
  { edad: 13, nombre: 'daniela', plan: 'free' },
  { edad: 32, nombre: 'juliana', plan: 'free' },
  { edad: 25, nombre: 'felipe', plan: 'gold' },
  { edad: 25, nombre: 'sara', plan: 'gold' },
]


const getPaidUsers = function (inputArray) {
  let paidUsers = inputArray.filter((u) => (u.plan !== 'free'));
  return paidUsers;
}
let result1 = getPaidUsers(usuarios);
console.log(result1);


const getAmmountOfUsersPerPlan = function (inputArray) {
  let premiumUsers = inputArray.filter((u) => (u.plan === 'premium'));
  let goldUsers = inputArray.filter((u) => (u.plan === 'gold'));
  let freeUsers = inputArray.filter((u) => (u.plan === 'free'));

  return {
    premiumUsers: premiumUsers,
    goldUsers: goldUsers,
    freeUsers: freeUsers,
  }
}

let result2 = getAmmountOfUsersPerPlan(usuarios);
console.log(result2);