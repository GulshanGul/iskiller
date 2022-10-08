import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
  import Bout from "../pages/About Us";
  import Academy from "../pages/Academy";
  import Ecommerce from "../pages/Ecommerce";
  import Home from "../pages/Home";
  import Model from "../pages/Internships";
  import Job from "../pages/Jobs";
  import Mobile from "../pages/Mobile App Development";
  import Ours from "../pages/Our Team";
  import Things from "../pages/Product & Design";
  import SoftWare from "../pages/Software Development";
  import Develop from "../pages/Web Development";
  import WordPress from "../pages/WordPress";

  class Navii extends React.Component{
    render(){
        return(
<Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Bout/>} />
        <Route path="/Academy" element={<Academy/>} />
        <Route path="/Ecommerce" element={<Ecommerce/>} />
        <Route path="/Internships" element={<Model/>} />
        <Route path="/Jobs" element={<Job/>} />
        <Route path="/MobileAppDevelopment" element={<Mobile/>} />
        <Route path="/OurTeam" element={<Ours/>} />
        <Route path="/ProductDesign" element={<Things/>} />
        <Route path="/SoftwareDevelopment" element={<SoftWare/>} />
        <Route path="/WebDevelopment" element={<Develop/>} />
        <Route path="/WordPress" element={<WordPress/>} />
        

    </Routes>
</Router>
        )
    }
  }
  export default Navii
