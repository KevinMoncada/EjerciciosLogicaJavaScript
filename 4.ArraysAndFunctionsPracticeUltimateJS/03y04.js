//Crear una función que me muestre los usuarios de pago solamente y otra que me muestre la cantidad de usuarios suscrita a cada plan
const usuarios = [
  { edad: 17, nombre: 'nico', plan: 'premium' },
  { edad: 13, nombre: 'daniela', plan: 'free' },
  { edad: 32, nombre: 'juliana', plan: 'free' },
  { edad: 25, nombre: 'felipe', plan: 'gold' },
  { edad: 25, nombre: 'sara', plan: 'gold' },
]


function getPaidUsers(inputArray) {
  let paidUsers = [];
  inputArray.forEach(element => {
    if ((element.plan == 'premium') || element.plan == 'gold') {
      paidUsers.push(element);
    }
  });
  return paidUsers;
}

function amountOfUsersByPlan(inputArray) {
  let premiumUsers = inputArray.filter((u) => (u.plan === 'premium'));
  let goldUsers = inputArray.filter((u) => (u.plan === 'gold'));
  let freeUsers = inputArray.filter((u) => (u.plan === 'free'));
  let clasificationByPlan;
  clasificationByPlan = { UsuariosFree: freeUsers, UsuariosGold: goldUsers, UsuariosPremium: premiumUsers };
  return clasificationByPlan;
}



let firstResult = getPaidUsers(usuarios);
console.log(firstResult);

console.log(` - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - `);

let secondResult = amountOfUsersByPlan(usuarios);
console.log(secondResult);