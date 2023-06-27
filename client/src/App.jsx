import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/HomePage.jsx";
import SignUP from "./components/SignUp/signup.jsx";
import About from "./components/About-Us/About.jsx";
import Contact from "./components/ContactUs/Contact.jsx"
import Explore from "./components/Explore/Explore.jsx";
import PlaceGoa from "./components/Place/Place-goa"
import PlaceShimla from "./components/Place/Place-shimla"
import PlaceKerala from "./components/Place/Place-kerela"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/explore/goa" element={<PlaceGoa/>}/>
        <Route path="/explore/shimla" element={<PlaceShimla/>}/>
        <Route path="/explore/kerela" element={<PlaceKerala/>}/>
      </Routes>
    </>
  );
}

export default App;
