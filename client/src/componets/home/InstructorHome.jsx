import { Grid } from '@mui/material'
import CardInstructor from './CardInstructor'
import { useSelector } from "react-redux";

export default function InstructorHome (){

    const instructor = useSelector(state=>state.instructor)

    return (
        <div style={{width:'100%',height:'300px',position:'relative'}}>
            <h2>Instructores</h2>
            <Grid container style={{width:'90%',position:'absolute', left:'5%'}}>
                {
                    instructor.map((element)=>{
                        return(
                            <Grid item xs={2} sm={6} md={3}>
                                <CardInstructor
                                id={element.id}
                                img={element.imgPerfil}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}