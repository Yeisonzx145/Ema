import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseById } from "../../redux/actiones/courses/getCourseById";

const CourseById = ()=>{

    const {id} = useParams()
    const dispatch = useDispatch();
    const course = useSelector((state)=>state.course);

    useEffect(()=>{
        dispatch(getCourseById(id));
    },[id])

    return (
        <div>
            <h1>Cursos: {id}</h1>
        </div>
    )
}

export default CourseById;
