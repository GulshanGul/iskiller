import React from "react";
import Model from "./pages/Internships";
import Back from "./Component/Back";

import Product from "./Component/Product";
// import Ecommerce from "./pages/Product & Design";
import Ecommerce from "./pages/Ecommerce";
import Common from "./Component/Common";
import Things from "./pages/Product & Design";
import Home from "./pages/Home";
import Bout from "./pages/About Us";
import Ours from "./pages/Our Team";
import Ships from "./Component/Ships";
import Job from "./pages/Jobs";
import Header from "./Component/Header";
import Navii from "./Router/Index";
import './App.css'
class App extends React.Component{
  render(){
    return(
      <div>

        {/* <Header /> */}
       <Navii />
      </div>
      // <Job />
      // <Model />
      // <Ships />
      // <Ours />
      // <Bout />
      // <Home />
      
    )
  }
}

export default App