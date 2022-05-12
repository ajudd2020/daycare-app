const router = require("express").Router();
module.exports = router;

router.use("/tasks", require("./tasks"));
router.use("/generalPages", require("./generalPages"));
router.use("/classes", require("./classes"));
router.use("/generalPages", require("./generalPages"));
router.use("/staff", require("./staff"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
