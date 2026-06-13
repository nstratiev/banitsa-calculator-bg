// ##### Storage [Start] #####
const calculatorName = 'calcProteins';

export function setLocalStorage(dataObj, formName) {
  setInitialLocalStorage();

  const calculatorData = JSON.parse(localStorage.getItem(calculatorsCategory));

  calculatorData[calculatorName] = {
    [formName]: dataObj
  };

  const jsonData = JSON.stringify(calculatorData);
  localStorage.setItem(calculatorsCategory, jsonData);
}

function getFormLocalStorage(formName) {
  const calculatorData = JSON.parse(localStorage.getItem(calculatorsCategory));

  try {
    const formData = calculatorData[calculatorName][formName];
    return formData;

  } catch (error) {
    return null;
  }
}

export function clearAllPageFormsLocalStorageData() {
  const allCalculatorsData = JSON.parse(localStorage.getItem(calculatorsCategory));
  delete allCalculatorsData[calculatorName];
  localStorage.setItem(calculatorsCategory, JSON.stringify(allCalculatorsData));
}

export function populateLocaleStorageData(formsArr) {
  for (const formElem of formsArr) {
    const localStorageObj = getFormLocalStorage(formElem.name);

    if (localStorageObj === null) {
      console.info('No localStorage for this form ...');
      return null;
    }

    for (const key in localStorageObj) {
      const target = formElem[key];
      // const target = formElem.querySelector(`input[name=${key}]`);
      target.value = localStorageObj[key];
    }

  }

}

// IMPORTS
import { calculatorsCategory, setInitialLocalStorage } from '../../global/js/storage.js';

// ##### Storage [End] #####
