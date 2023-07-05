const { Router } = require("express");
const userRouter = Router();

const {userPost,loginUser,userById} = require('../handlers/user/userHandlers')

userRouter.post('/', userPost)
userRouter.get('/',loginUser)
userRouter.get('/:id',userById)

module.exports = userRouter;