import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardInstructor ({id,img}){
    return (
        <div style={{background:"red"}} >
            <Link to={`/instructor/${id}`} >
                <CardMedia component='img' image={img} title="xxxxx" sx={{
                    width:200, height:200, borderRadius: '100%',
                }} />
            </Link>
        </div>
    )
}
