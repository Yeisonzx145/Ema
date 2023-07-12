import { Box, Typography } from "@mui/material";
import Courses from "../../componets/Courses/Courses"

const Students = ()=>{
    return (
        <div style={{position:'relative',height:'600px'}}>
            <Box style={{
                position:'absolute',
                width:'15%',
                height:'100%',
                margin :"1%"
                }}>
                <Typography>Hola estas en students</Typography>
            </Box>
            <Box style={{
                width:"80%",
                height:'100%',
                position:'absolute',
                right:'1em',
                margin :"1%"
                }}>
                <Courses/>
            </Box>
        </div>
    )
}
export default Students;