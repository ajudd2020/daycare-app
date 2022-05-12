const router = require("express").Router();
const { Staff } = require("../db/models");
module.exports = router;

// get /api/staff
router.get("/", async (req, res, next) => {
  const pages = await Staff.findAll();
  res.send(pages);
});

// post /api/staff
router.post("/", async (req, res, next) => {
  try {
    // const newTask = await Task.create(req.body)
    res.send("newTask");
  } catch (err) {
    console.log("ERROR IN API TASKS POST ROUTE", err);
  }
});
