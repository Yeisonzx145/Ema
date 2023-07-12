const courseById = (req,res)=>{
    const {id} = req.params
    res.json({course:id})
}
module.exports={courseById}