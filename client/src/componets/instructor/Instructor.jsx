import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInstructorId, cleanDetail } from "../../redux/actions";

const Instructor = ()=>{

    const {id} = useParams();
    const dispatch = useDispatch();
    const instructor = useSelector((state)=>state.instructorByDetail);

    useEffect(()=>{
        dispatch(getInstructorId(id));

        return()=>{
            dispatch(cleanDetail());
        }
    },[id])

    return (
        <div>
            {
                !instructor 
                    ? <h1>cargando...</h1>
                    : 
                    <div>
                        <h1>{instructor.name}</h1>
                    </div>
            }
            
        </div>
    )
}
export default Instructor;