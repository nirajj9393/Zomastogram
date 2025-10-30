require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/database/db');

connectDB()
  .then(() => {
    console.log(" Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.log(" Database connection failed:", error);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
