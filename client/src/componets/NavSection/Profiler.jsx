import { Avatar, Box, Button } from "@mui/material";

const Profiler = ()=>{
    return (
        <Box style={{
            position: "absolute",
            right:'0.5em',
            top:'0.5em',
            width:'30%',
            bgcolor:"red"
        }}>
            <Avatar>Yeison</Avatar>
        </Box>
    )
}
export default Profiler;