import { Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import Blogs from "./Components/Pages/Blogs";
import Home from "./Components/Pages/Home/Home";
import LogIn from "./Components/Pages/Signup/LogIn";
import SignUp from "./Components/Pages/Signup/SignUp";
import Tools from "./Components/Pages/Tools/Tools";
import Footer from "./Components/Sheared/Footer";
import Navbar from "./Components/Sheared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Components/Pages/Signup/RequireAuth";
import Review from "./Components/Pages/Review";
import Purchase from "./Components/Pages/Purchase";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/tools" element={<Tools />}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
