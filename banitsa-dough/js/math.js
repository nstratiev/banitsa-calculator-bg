// ##### Math [Start] #####
export function calculate_fMain(inputDataObj) {
  // Input fields >>> ["crustsCount", "crustWeight", "hydrationPercent", "saltPercent", "vinegarPercent", "oilPercent"]
  // Output fields >>> [ "doughWeight", "flourWeight", "saltWeight", "liquidIngredsWeight", "waterWeight", "vinegarWeight", "oilWeight" ]

  const d = Object.fromEntries(Object.entries(inputDataObj).map(el => [el[0], Number(el[1])]));

  const doughWeight = d.crustsCount * d.crustWeight;
  const flourWeight = doughWeight / (1 + d.hydrationPercent / 100 + d.saltPercent / 100);
  const saltWeight = flourWeight * (d.saltPercent / 100);
  const liquidIngredsWeight = flourWeight * (d.hydrationPercent / 100);
  const vinegarWeight = flourWeight * (d.vinegarPercent / 100);
  const oilWeight = flourWeight * (d.oilPercent / 100);
  const waterWeight = liquidIngredsWeight - (vinegarWeight + oilWeight);

  const output = { doughWeight, flourWeight, saltWeight, liquidIngredsWeight, waterWeight, vinegarWeight, oilWeight };
  return output;
}

// IMPORTS
// import { outputTagElementsObj_fMain } from './elements.js';


// ##### Math [End] #####
