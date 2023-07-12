const { Router } = require("express");
const userRouter = require("./userRouter");
const instructorRouter = require("./instructorRouter")
const courseRouter = require("./courseRouter")

const router = Router()

router.use("/user", userRouter);
router.use("/instructor",instructorRouter)
router.use("/course",courseRouter)

module.exports = router;
