import React from "react";
import About from "../Component/About";
import Footer from "../Component/Footer";
import Header from "../Component/Header";


class Bout extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <About />
                <Footer />
            </div>
        )
    }
}
export default Bout