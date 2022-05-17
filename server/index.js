const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");

// logging middleware
const morgan = require("morgan");
app.use(morgan("dev"));

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// body parser
const bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", require("./api"));

// send HTML if nothing else
app.get("*", function (req, res) {
  console.log("get");
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// send 505
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     console.log(`Server listening on ${port}`);
//   });

const startListening = () => {
  app.listen(port, function () {
    console.log("Knock, knock");
    console.log("Who's there?");
    console.log(`Your server, listening on port ${port}`);
  });
};

db.sync() // sync our database
  .then(function () {
    startListening();
  });

// cache-control: res.setHeader('Cache-Control', 'no-cache');
