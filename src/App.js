import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import LogIn from "./Components/Pages/Signup/LogIn";
import SignUp from "./Components/Pages/Signup/SignUp";
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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
