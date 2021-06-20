export const petStats = (pet) => {
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

export const careForPetEvent = (variable, elem, obj) => {
  variable.addEventListener('click', () => {
    if (variable.innerText === 'Feed') {
      obj.feed();
    } else {
      obj.water();
    }

    elem.innerText = petStats(obj);
  });
};

export const createActionButton = (parentElem, childElem, text) => {
  childElem.innerText = text;
  parentElem.appendChild(childElem);
};
