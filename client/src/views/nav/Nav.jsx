import { AppBar, Box, Typography } from "@mui/material"
import SingInButtons from "../../componets/NavSection/SinginButtons"
import Profiler from "../../componets/NavSection/Profiler";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { instructorGet, signuUser } from "../../redux/actions";

const Nav = ()=>{
    //localStorage.setItem("idUser",0);
    const idUser = localStorage.getItem('idUser')
    //localStorage('idUser',0)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(instructorGet())
        dispatch(signuUser(idUser))
    },[dispatch])


    return(
        <Box component="div" sx={{p:2,m:2,position:'relative',height:20}}>
            <AppBar elevation={0} sx={{with:1,height:1,position:'absolute',bgcolor:"transparent"}}>
                <Typography component="a" variant="h6" noWrap href="/" color="primary" sx={{ 
                    fontSize: "36px", fontWeight: "700", marginLeft: "40px" ,textDecoration: 'none',
                }}>Ema</Typography>

                {
                    idUser === '0' ? <SingInButtons/> : <Profiler/>
                }
                


            </AppBar>
        </Box>
    )
}
export default Nav