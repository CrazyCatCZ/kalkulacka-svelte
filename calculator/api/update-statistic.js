// api/update-statistic.js

import sqlite from 'sqlite';
import { open } from 'sqlite';

// Connect to the SQLite database
export async function connect() {
  return open({
    filename: './database.sqlite',
    driver: sqlite.Database,
  });
}

// Get the current statistic data from the database
export async function getStatistic(db) {
  const result = await db.get('SELECT * FROM statistic');
  return result;
}

// Update the statistic data in the database
export async function updateStatistic(db, buttonName) {
  // Increment the button count in the database
  await db.run(
    `UPDATE statistic SET ${buttonName} = ${buttonName} + 1`
  );

  // Get the updated statistic data from the database
  const statistic = await getStatistic(db);
  return statistic;
}

// Handle the POST request to update the statistic data
export async function post(request) {
  const db = await connect();

  // Get the button name from the request body
  const { buttonName } = request.body;

  // Update the statistic data in the database
  const statistic = await updateStatistic(db, buttonName);

  // Return the updated statistic data as a response
  return {
    status: 200,
    body: statistic,
  };
}
