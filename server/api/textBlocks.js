const router = require("express").Router();
const { TextBlock } = require("../db/models");
module.exports = router;

// get /api/textBlocks
router.get("/", async (req, res, next) => {
  const textBlocks = await TextBlock.findAll();
  res.send(textBlocks);
});

// post /api/textBlocks
router.post("/", async (req, res, next) => {
  try {
    const newTextBlock = await TextBlock.create(req.body);
    res.send("newTask");
  } catch (err) {
    console.log("ERROR IN API TASKS POST ROUTE", err);
  }
});
