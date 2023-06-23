import { AppBar, Box, Typography } from "@mui/material"
import SingInButtons from "../../componets/NavSection/SinginButtons"
const Nav = ()=>{
    return(
        <Box component="div" sx={{p:2,m:2,position:'relative',height:20}}>
            <AppBar elevation={0} sx={{with:1,height:1,position:'absolute',bgcolor:"transparent"}}>
                <Typography component="a" variant="h6" noWrap href="/" color="primary" sx={{ 
                    fontSize: "36px", fontWeight: "700", marginLeft: "40px" ,textDecoration: 'none',
                }}>Ema</Typography>
                <SingInButtons/>
            </AppBar>
        </Box>
    )
}
export default Nav