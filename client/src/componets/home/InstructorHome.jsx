import { Grid } from '@mui/material'
import CardInstructor from './CardInstructor'

const obj = [
    {img:'https://www.saramusico.com/wp-content/uploads/2019/04/foto-de-perfil-en-linkedin.jpg'},
    {img:'https://www.aulafacil.com/uploads/cursos/6360/22820_traje-mujer.es.jpg'},
    {img:'https://www.saramusico.com/wp-content/uploads/2019/04/foto-de-perfil-en-linkedin.jpg'},
    {img:'https://www.saramusico.com/wp-content/uploads/2019/04/foto-de-perfil-en-linkedin.jpg'},
]



export default function InstructorHome (){
    return (
        <div style={{width:'100%',height:'300px',position:'relative'}}>
            <h2>Instructores</h2>
            <Grid container style={{width:'90%',position:'absolute', left:'5%'}}>
                {
                    obj.map((element)=>{
                        return(
                            <Grid item xs={2} sm={6} md={3}>
                                <CardInstructor
                                img={element.img}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}