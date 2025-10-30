const mongoose = require('mongoose');

async function dbConnector() {
  await mongoose.connect('mongodb://127.0.0.1:27017/zomatogram');
}
module.exports = dbConnector;