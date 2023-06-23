import {Box, Button } from "@mui/material"
import {Link} from 'react-router-dom'
const SingInButtons = () =>{
    return (
        <Box style={{
            position: "absolute",
            right:'0.5em',
            top:'0.5em',
            width:'30%',
            bgcolor:"red"
        }}>
            <Button variant="outlined" component={Link} to={"/Login"} >
                Iniciar Seccion
            </Button>
            <Button variant="contained" component={Link} to={'/SignupUsuario'}>
                Registrate
            </Button>
        </Box>
    )
}
export default SingInButtons