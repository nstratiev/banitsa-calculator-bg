export const calculatorsCategory = 'banitsaCalculators';

setInitialLocalStorage();

// Local Storage functions
export function setInitialLocalStorage() {
  const storageItem = localStorage.getItem(calculatorsCategory);

  if (storageItem === null) {
    localStorage.setItem(calculatorsCategory, JSON.stringify({}));
  }

}
