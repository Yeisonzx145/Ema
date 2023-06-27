const { Router } = require("express");
const instructorRouter = Router();

const {instructorGet,instructorPost,instructorDetail} = require('../handlers/instructor/instructorHandlers.js')

instructorRouter.get("/",instructorGet)
instructorRouter.post("/",instructorPost)
instructorRouter.get("/:id", instructorDetail)

module.exports=instructorRouter;