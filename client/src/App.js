import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home"
import Nav from "./views/nav/Nav"
function App() {
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
