const JsonDB = require('simple-json-db');

const db = new JsonDB('data.json');

module.exports = db;