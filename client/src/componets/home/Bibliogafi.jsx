import { Box } from "@mui/material";
import { CardMedia } from '@mui/material';

const Bibliogafi = ()=>{
    const image = 'https://convention-meetings.com/images/blog/3-tipos-personas/3-tipos-de-personas-en-una-conferencia-convention-meetings-cover-y-mini.jpg'
    return (
        <div style={{position:'relative',width:'100%',height:300}}>
            <Box component='div' style={{width:'55%',position:'absolute',left:'5%',top:'1em'}} >
                <h1>¿Quienes somos?</h1>
            </Box>
            <div style={{width:'55%',position:'absolute',top:'35%',left:'5%',height:'60%'}}>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi laboriosam quod sapiente, nulla commodi tempora nobis at recusandae necessitatibus. Assumenda vitae ea error, saepe eligendi vero praesentium dolor odit commodi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis asperiores praesentium nemo deleniti rerum quis, accusamus nobis, repudiandae possimus at quae eveniet. Repellendus minus earum laudantium, corporis ipsam fugiat eligendi?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab soluta, assumenda enim tempora sunt excepturi! Nostrum, natus harum eaque fugiat non cum praesentium ratione ad accusamus optio, quasi consequatur temporibus?
                </p>
            </div>
            <CardMedia component='img' image={image} title="xxxxx" 
            sx={{ height: '90%', width: '30%', position:'absolute', right:'5%',top:'5%'}}/>

        </div>
    )
}
export default Bibliogafi;