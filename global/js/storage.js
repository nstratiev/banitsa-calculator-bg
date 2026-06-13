export const calculatorsCategory = 'banitsaCalculators';

setInitialLocalStorage();

// Local Storage functions
function setInitialLocalStorage() {
  const banitsaStorage = localStorage.getItem(calculatorsCategory);

  if (banitsaStorage === null) {
    localStorage.setItem(calculatorsCategory, JSON.stringify({}));
  }

}