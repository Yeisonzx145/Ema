const { Router } = require("express");
const userRouter = require("./userRouter");
const instructorRouter = require("./instructorRouter")

const router = Router()

router.use("/user", userRouter);
router.use("/instructor",instructorRouter)

module.exports = router;
