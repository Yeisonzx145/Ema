import { CardMedia } from "@mui/material";

export default function CardInstructor ({img}){
    return (
        <div>
            <CardMedia component='img' image={img} title="xxxxx" sx={{
                width:200, height:200, borderRadius: '100%',
            }} />
        </div>
    )
}