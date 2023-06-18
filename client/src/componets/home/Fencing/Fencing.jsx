import { Box,Button,Typography } from "@mui/material"

const Fencing = () =>{
    return (
        <Box  sx={{
            position:'relative',
            bgcolor: 'beige',
            //display: 'flex',
           // alignItems: 'flex-start',
            // flexDirection: 'column',
            width: 0.9,
            height:300,
            p: 1,
            m: 1,
            borderRadius: 4,
          }} >
            <Typography component="div" variant="h2" sx={{
                width:0.65,
                p:2,
                position:'absolute',
                fontSize: 60,
                }}>Escuela Ministerias Avanzada EMA</Typography>
            <Typography component="div" variant="p" style={{height: 130,
            width: '60%',position:'absolute',top:'55%',left:"2%" }}> 
                Esta es una pequeña descriccion de lo que seria la escuela ema, para practicar
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, inventore? Ducimus dolorum nesciunt assumenda quidem, eveniet esse ex ab suscipit quisquam, voluptates modi, ea tempora. Odit maxime molestias repellat accusamus.
            </Typography>
            <Button color="primary" variant="contained" style={{
                width:250,height: 70,
                fontSize:'1.5em', fontWeight:520,
                position:'absolute',
                right:'10%',
                top:'40%'
            }}>EMPEZAR</Button>
        </Box>
    )
}
export default Fencing