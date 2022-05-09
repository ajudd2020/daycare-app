const router = require("express").Router();
const { Page } = require("../db/models");
module.exports = router;

// get /api/pages
router.get("/", async (req, res, next) => {
  const pages = await Page.findAll();
  res.send(pages);
});

// post /api/pages
router.post("/", async (req, res, next) => {
  try {
    // const newTask = await Task.create(req.body)
    res.send("newTask");
  } catch (err) {
    console.log("ERROR IN API TASKS POST ROUTE", err);
  }
});
