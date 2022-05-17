const router = require("express").Router();
const { Newsletter } = require("../db/models");
module.exports = router;

// get /api/newsletter
router.get("/", async (req, res, next) => {
  const pages = await Newsletter.findAll();
  res.send(pages);
});

// post /api/newsletter
router.post("/", async (req, res, next) => {
  try {
    // const newTask = await Task.create(req.body)
    res.send("newTask");
  } catch (err) {
    console.log("ERROR IN API TASKS POST ROUTE", err);
  }
});
