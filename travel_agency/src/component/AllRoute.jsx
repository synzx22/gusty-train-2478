import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Destination from "../Pages/Destination";
import Blogs from "../Pages/Blogs"
import SingleUserPage from "../Pages/SingleUserPage";
import Login from "../component/Login"
import PrivateRoute from "./PrivateRoute"

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/destination" element={<PrivateRoute><Destination /></PrivateRoute>} />
        <Route path="/blogs" element={<Blogs/>} />  
        <Route path="/destination/:user_id" element={<PrivateRoute><SingleUserPage/></PrivateRoute>} />  
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/login" element={</>} /> */}

      </Routes>
    </div>
  );
}



