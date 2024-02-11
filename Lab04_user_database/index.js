// index.js

const express = require("express");
const mongoose = require("mongoose");
const User = require("./routes/UserRoutes");

const app = express();
app.use(express.json());
const port = 3000;



// Connect to MongoDB (replace 'your-mongodb-uri' with your MongoDB URI)
const MONGODB_URI =
  "mongodb+srv://neginDb:EvVSYsFFkGAwbz2n@cluster0.tgc1gdl.mongodb.net/User?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI)
  .then((success) => {
    console.log(`Connected to MongoDB ${success}`);
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });



app.use(User)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
