const router = require("express").Router();
module.exports = router;

router.use("/generalPages", require("./generalPages"));
router.use("/announcements", require("./announcements"));
router.use("/newsletters", require("./newsletters"));
router.use("/classes", require("./classes"));
router.use("/staff", require("./staff"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
