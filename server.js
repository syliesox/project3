const express = require("express");
const routes = require ("./routes")
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets to heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

//Connect to SQL


//listen for request
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});