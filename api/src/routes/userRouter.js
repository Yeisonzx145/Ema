const { Router } = require("express");
const userRouter = Router();

const {userPost,loginUser} = require('../handlers/user/userHandlers')

userRouter.post('/', userPost)
userRouter.get('/',loginUser)

module.exports = userRouter;