import db from '../data/database.js'

export function updateButtonCounts(buttonValue) {
  const buttonCounts = db.get('buttonCounts') || {};

  if (!buttonCounts[buttonValue]) {
    buttonCounts[buttonValue] = 1;
  } else {
    buttonCounts[buttonValue]++;
  }

  db.set('buttonCounts', buttonCounts);
}