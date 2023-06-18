//import React, { useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { red,blue } from "@mui/material/colors";

const theme = createTheme({
    palette:{
        primary:{
            main: blue[700],
            light:blue[600],
            dark:blue[600],
            contrasText:"#fff"
        },
        secondary:{
            main: '#E53170',
            light:blue[600],
            dark:blue[600],
            contrasText:"#fff"
        },
        error:{
            main: red["A700"],
            light:red[700],
            dark:red[700],
            contrasText:"#fff"
        }
    },
    // typography:{
    //     fontFamily:"'Roboto','Helvetica','Arial','sans-serif'",
    //     button:{
    //         fontSize:'1.5em'
    //     }
    // }
})

export default theme
 