const express = require("express");
const path = require("path");
const mongoose = require("mongoose").set('debug', true);
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//API Routes
app.use(require('./routes/api'));

//If in prod, serve react files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/book-finder", { useNewUrlParser: true })

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});