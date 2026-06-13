export const calculatorsCategory = 'banitsaCalculators';

setInitialLocalStorage();

// Local Storage functions
export function setInitialLocalStorage() {
  const banitsaStorage = localStorage.getItem(calculatorsCategory);

  if (banitsaStorage === null) {
    localStorage.setItem(calculatorsCategory, JSON.stringify({}));
  }

}