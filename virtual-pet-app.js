import VirtualPet from './virtual-pet.js';

const myPet = new VirtualPet('Fido', 'Dog', 50, 50);
console.log(myPet);
myPet.feed();
console.log(myPet.hunger);

const create = document.querySelector('.create');
const feed = document.querySelector('.feed');
const water = document.querySelector('.water');
const div = document.querySelector('div');

const petStats = (pet) => {
  return (
    'Name: ' +
    pet.name +
    ' Desc: ' +
    pet.description +
    ' Hunger: ' +
    pet.hunger +
    ' Thirst: ' +
    pet.thirst
  );
};

function myPetStats(pet) {
  return (
    'Name: ' +
    pet.name +
    ' Desc: ' +
    pet.description +
    ' Hunger: ' +
    pet.hunger +
    ' Thirst: ' +
    pet.thirst
  );
}

create.addEventListener('click', () => {
  let name = prompt('Enter a name');
  let description = prompt('Enter a description');
  const myPet2 = new VirtualPet(name, description, 50, 50);
  const petPara = document.createElement('p');
  petPara.innerText = petStats(myPet2);
  div.appendChild(petPara);

  feed.addEventListener('click', () => {
    myPet2.feed();
    petPara.innerText = myPetStats(myPet2);
  });

  water.addEventListener('click', () => {
    myPet2.water();
    petPara.innerText = myPetStats(myPet2);
  });
});
