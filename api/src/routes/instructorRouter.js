const { Router } = require("express");
const instructorRouter = Router();

const {instructorGet,instructorPost} = require('../handlers/instructor/instructorHandlers.js')

instructorRouter.get("/",instructorGet)
instructorRouter.post("/",instructorPost)

module.exports=instructorRouter;