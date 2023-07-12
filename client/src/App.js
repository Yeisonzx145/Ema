import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home"
import Nav from "./views/nav/Nav"
import Login from './views/login/Login'
import SignupUsuario from './views/SignupUsuario/SignupUsuario'
import Instructor from './componets/instructor/Instructor'
import Students from "./views/students/Students";
import CourseById from "./componets/CourseById/CourseById"

function App() {
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignupUsuario' element={<SignupUsuario/>} />
        <Route path="/Instructor/:id" element={<Instructor/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/students/course/:id" element={<CourseById/>} />
      </Routes>
    </div>
  );
}

export default App;
