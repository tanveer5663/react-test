import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Hooks from "./Hooks";
import Example from "./Example";
import Otp from "./Otp";
// https://server-b5kh.onrender.com/

function App() {
  console.log("tanveer");

  return (
    <BrowserRouter>
      <nav>
        {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "} */}
        <Link to="/about">Contact</Link>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
          })}
        >
          Home
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/about/:id" element={<About />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/class" element={<Example />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
