import db from '../data/database.js'

export async function getButtonCounts() {
  const buttonCounts = db.get('buttonCounts') || {};
  return buttonCounts;
}

