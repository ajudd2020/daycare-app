const router = require("express").Router();
module.exports = router;

router.use("/tasks", require("./tasks"));
router.use("/pages", require("./pages"));
router.use("/textBlocks", require("./textBlocks"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
