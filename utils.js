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

export const feedPetEvent = (variable, elem, obj) => {
  variable.addEventListener('click', () => {
    obj.feed();
    elem.innerText = petStats(obj);
  });
};

export const createActionButton = (parentElem, childElem, text) => {
  childElem.innerText = text;
  parentElem.appendChild(childElem);
};
