// ##### Print [Start] #####
export function clearOutputs_fMain() {
  outputTagElementsArr_fMain.forEach(el => {
    el.style.fontWeight = 'normal';

    if (el.name === 'liquidIngredsWeight') {
      el.value = '...';
    } else {
      el.value = '....';
    }

  });
}

export function printOutputResults_formMain(resultsData) {
  const data = resultsData;
  const elemObj = outputTagElementsObj_fMain;

  for (const key in elemObj) {

    if (key === 'finalNotes') {
      printResult(data[key], elemObj[key]);
    } else {
      printResult(data[key], elemObj[key], 0);
    }

  }
}

function printResult(value, resultElem, toFixedIndex, additionalTextObj, fontWeight = 'bold') {
  // additionalTextObj = {prefix: '', postfix: ''};
  let result;

  if (typeof value === 'string') {
    result = value.split('<br>');

    resultElem.innerHTML = result.join('<br>');
    return;
  }

  if (value) {
    if (additionalTextObj) {
      result = `${additionalTextObj.prefix}${value.toFixed(toFixedIndex)}${additionalTextObj.postfix}`;
    } else {
      result = `${value.toFixed(toFixedIndex)}`;
    }

  } else {
    result = '';
  }

  resultElem.style.fontWeight = fontWeight;
  resultElem.textContent = result;
}

// IMPORTS
import { outputTagElementsObj_fMain, outputTagElementsArr_fMain } from './elements.js';

// ##### Print [End] #####
