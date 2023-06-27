import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home"
import Nav from "./views/nav/Nav"
import Login from './views/login/Login'
import SignupUsuario from './views/SignupUsuario/SignupUsuario'
import Instructor from './componets/instructor/Instructor'

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
      </Routes>
    </div>
  );
}

export default App;
