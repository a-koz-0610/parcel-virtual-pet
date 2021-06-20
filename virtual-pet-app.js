import VirtualPet from './virtual-pet.js';
import { careForPetEvent, createActionButton, petStats } from './utils.js';

const create = document.querySelector('.create'),
  div = document.querySelector('div');

renderPage();

function renderPage() {
  createPet();
}

function createPet() {
  create.addEventListener('click', () => {
    let name = prompt('Enter a name');
    let description = prompt('Enter a description');
    const myPet = new VirtualPet(name, description, 50, 50);
    const petPara = document.createElement('p');
    petPara.innerText = petStats(myPet);
    div.appendChild(petPara);

    const feedBtn = document.createElement('button');
    const waterBtn = document.createElement('button');
    interactWithPet(feedBtn, waterBtn, petPara, myPet);
  });
}

const interactWithPet = (feedBtn, waterBtn, petPara, myPet) => {
  createActionButton(div, feedBtn, 'Feed');
  createActionButton(div, waterBtn, 'Water');

  careForPetEvent(feedBtn, petPara, myPet);
  careForPetEvent(waterBtn, petPara, myPet);
};
