const router = require("express").Router();
const { Class } = require("../db/models");
module.exports = router;

// get /api/classes
router.get("/", async (req, res, next) => {
  const pages = await Class.findAll();
  res.send(pages);
});

// post /api/classes
router.post("/", async (req, res, next) => {
  try {
    // const newTask = await Task.create(req.body)
    res.send("newTask");
  } catch (err) {
    console.log("ERROR IN API TASKS POST ROUTE", err);
  }
});
