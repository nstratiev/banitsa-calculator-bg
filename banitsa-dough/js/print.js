// ##### Print [Start] #####
export function printOutputResults_formMain(resultsData) {
  const data = resultsData;
  const elemObj = outputTagElementsObj_fMain;

  for (const key in elemObj) {

    if (key === 'liquidIngredsWeight') {
      printResult(data[key], elemObj[key], 0, { prefix: '', postfix: ' g' });
    } else {
      printResult(data[key], elemObj[key], 0);
    }

  }
}

function printResult(value, resultElem, toFixedIndex, additionalTextObj, fontWeight = 'bold') {
  // additionalTextObj = {prefix: '', postfix: ''};
  let result;

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
import { outputTagElementsObj_fMain } from './elements.js';

// ##### Print [End] #####

/*
// ##### Print [Start] #####
export function printResult_formMain(resultsData) {
  const d = resultsData;
  const el = resultElementsObj_fMain;

  printResult(d.doughWeight, el.doughWeight, 0);
  printResult(d.flourWeight, el.flourWeight, 0);
  printResult(d.saltWeight, el.saltWeight, 0);
  printResult(d.liquidIngredsWeight, el.liquidIngredsWeight, 0, { prefix: '', postfix: ' g' });
  printResult(d.waterWeight, el.waterWeight, 0);
  printResult(d.vinegarWeight, el.vinegarWeight, 0);
  printResult(d.oilWeight, el.oilWeight, 0);
}

function printResult(value, resultElem, toFixedIndex, additionalTextObj) {
  // additionalTextObj = {prefix: '', postfix: ''};
  let result;

  if (value) {
    if (additionalTextObj) {
      result = `${additionalTextObj.prefix}${value.toFixed(toFixedIndex)}${additionalTextObj.postfix}`;
    } else {
      result = `${value.toFixed(toFixedIndex)}`;
    }
  } else {
    result = '';
  }

  resultElem.style.fontWeight = 'bold';
  resultElem.textContent = result;
}

// IMPORTS
import { resultElementsObj_fMain } from './elements.js';

// ##### Print [End] #####
*/