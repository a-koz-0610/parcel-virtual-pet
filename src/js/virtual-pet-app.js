import VirtualPet from './models/VirtualPet.js';
import Form from './components/Form.js';
import {
  careForPetEvent,
  createActionButton,
  petStats,
} from './utils/utils.js';

const createBtn = document.querySelector('.createBtn'),
  container = document.querySelector('.container'),
  myPetsDiv = document.getElementById('myPets'),
  createFormBtn = document.querySelector('.createFormBtn');

renderPage();

function renderPage() {
  createPet();
  createAPetFromForm();
}

function createPet() {
  createBtn.addEventListener('click', () => {
    let name = prompt('Enter a name');
    let description = prompt('Enter a description');
    const myPet = new VirtualPet(name, description, 50, 50);
    const petPara = document.createElement('p');
    petPara.innerText = petStats(myPet);
    myPetsDiv.appendChild(petPara);

    const feedBtn = document.createElement('button');
    const waterBtn = document.createElement('button');
    interactWithPet(feedBtn, waterBtn, petPara, myPet);
  });
}

const interactWithPet = (feedBtn, waterBtn, petPara, myPet) => {
  createActionButton(myPetsDiv, feedBtn, 'Feed');
  createActionButton(myPetsDiv, waterBtn, 'Water');

  careForPetEvent(feedBtn, petPara, myPet);
  careForPetEvent(waterBtn, petPara, myPet);
};

createFormBtn.addEventListener('click', () => {
  myPetsDiv.innerHTML = Form();
});

function createAPetFromForm() {
  container.addEventListener('click', (event) => {
    if (event.target.classList.contains('submit')) {
      const petName =
        event.target.parentElement.querySelector('.petName').value;
      const petDescription =
        event.target.parentElement.querySelector('.petDescription').value;
      const myPet = new VirtualPet(petName, petDescription, 50, 50);
      const petPara = document.createElement('p');
      petPara.innerText = petStats(myPet);
      myPetsDiv.appendChild(petPara);
    }
  });
}
