const router = require("express").Router();
const { Announcement } = require("../db/models");
module.exports = router;

// get /api/announcements
router.get("/", async (req, res, next) => {
  const pages = await Announcement.findAll();
  res.send(pages);
});

// post /api/announcements
router.post("/", async (req, res, next) => {
  try {
    // const newTask = await Task.create(req.body)
    res.send("newTask");
  } catch (err) {
    console.log("ERROR IN API TASKS POST ROUTE", err);
  }
});
