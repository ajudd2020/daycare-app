const router = require("express").Router();
const { GeneralPage } = require("../db/models");
module.exports = router;

// get /api/generalPages
router.get("/", async (req, res, next) => {
  const pages = await GeneralPage.findAll();
  res.send(pages);
});

// post /api/generalPages
router.post("/", async (req, res, next) => {
  try {
    // const newTask = await Task.create(req.body)
    res.send("newTask");
  } catch (err) {
    console.log("ERROR IN API TASKS POST ROUTE", err);
  }
});
