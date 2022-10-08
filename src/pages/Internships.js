import React from "react";
import Ships from "../Component/Ships";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

class Model extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Ships />
<Footer />
            </div>
        )
    }
}
export default Model