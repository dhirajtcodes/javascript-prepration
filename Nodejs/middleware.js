// In middleware, the next() function is critical — it tells Node.js or Express to move to the
// next middleware or route handler. If you don’t call next(), the request will hang, and the
// client will never get a response.

// What is middleware?
// 🧩 Middleware is a function or piece of software that acts as a
// bridge between different parts of a system —
// especially between the request and response in a web server.

const express = require("express");

const app = express();

// Use Case 1: Call the next middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send({ name: "dhiraj" });
});

// Use Case 2: Stop the chain (e.g., authentication)

const auth = (req, res, next) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    res.status(401).send("Unauthorized"); // if user failed to log in
  }
  next(); // if user is logged in, move to next middleware
};

app.listen(3000, () => console.log("Server started"));
