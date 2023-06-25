const { Router } = require("express");
const userRouter = Router();

const {userPost} = require('../handlers/user/userHandlers')

userRouter.post('/', userPost)

module.exports = userRouter;