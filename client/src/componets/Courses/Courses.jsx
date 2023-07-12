import Course from "../Course/Course"

const Courses = ()=> {

    const array = [{id:1,name:'EMA',description:'Descriccion del curso'},{id:2,name:'Diseño web',description:'Descriccion del curso'}]

    return (
        <div>
            {
                array.map((cur)=>{
                    return (
                    <Course
                        id={cur.id}
                        name = {cur.name}
                        description={cur.description}
                    />
                )})
            }
        </div>            
    )
}

export default Courses; 