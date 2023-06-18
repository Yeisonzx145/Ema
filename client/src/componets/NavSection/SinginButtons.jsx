import {Box, Button } from "@mui/material"

const SingInButtons = () =>{
    return (
        <Box style={{
            position: "absolute",
            right:'0.5em',
            top:'0.5em',
            width:'30%',
            bgcolor:"red"
        }}>
            <Button variant="outlined">
                Iniciar Seccion
            </Button>
            <Button variant="contained">
                Registrate
            </Button>
        </Box>
    )
}
export default SingInButtons