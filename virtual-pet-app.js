import VirtualPet from './virtual-pet.js';
import { createActionButton, feedPetEvent } from './utils.js';

//demo of logging basic method calls
const myPetLogExample = new VirtualPet('Fido', 'Dog', 50, 50);
console.log(myPetLogExample);
myPetLogExample.feed();
console.log(myPetLogExample.hunger);

//start on functionality for front end view
const create = document.querySelector('.create'),
  div = document.querySelector('div');

//showing 2 different styles to build functions
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
  const myPet = new VirtualPet(name, description, 50, 50);
  const petPara = document.createElement('p');
  petPara.innerText = petStats(myPet);
  div.appendChild(petPara);

  const feedBtn = document.createElement('button');
  feedBtn.innerText = 'Feed';
  div.appendChild(feedBtn);

  //could extract as a util fcn
  //createActionButton(div, feedBtn, 'Feed');

  const waterBtn = document.createElement('button');
  waterBtn.innerText = 'Water';
  div.appendChild(waterBtn);

  feedBtn.addEventListener('click', () => {
    myPet.feed();
    petPara.innerText = myPetStats(myPet);
  });

  //could extract as a util fcn
  //feedPetEvent(feedBtn, petPara, myPet);

  waterBtn.addEventListener('click', () => {
    myPet.water();
    petPara.innerText = myPetStats(myPet);
  });
});
