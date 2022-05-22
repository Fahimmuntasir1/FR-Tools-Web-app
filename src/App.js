import { Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import Blogs from "./Components/Pages/Blogs";
import Home from "./Components/Pages/Home/Home";
import LogIn from "./Components/Pages/Signup/LogIn";
import SignUp from "./Components/Pages/Signup/SignUp";
import Tools from "./Components/Pages/Tools/Tools";
import Footer from "./Components/Sheared/Footer";
import Navbar from "./Components/Sheared/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<LogIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/tools" element={<Tools/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
