const { Router } = require("express");
const courseRouter = Router()

const {courseById} = require('../handlers/course/courseHandlers')

courseRouter.get('/:id',courseById)

module.exports = courseRouter;