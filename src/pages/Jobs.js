import React from "react";
import Duty from "../Component/Duty";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

class Job extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Duty />
                <Footer />
            </div>
        )
    }
}
export default Job