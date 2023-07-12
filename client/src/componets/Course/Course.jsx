import { Link } from "react-router-dom";

const Course = ({id,name,description})=>{
    return (
        <div style={{
            background:'red',
            height:120
        }}>
            <Link to={`/students/course/${id}`}>
                <h1>{name}</h1>
                <p>{description}</p>
            </Link>
        </div>
    )
}
export default Course;