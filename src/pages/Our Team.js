import React from "react";
import Team from "../Component/Team";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

class Ours extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Team />
                <Footer />
            </div>

        )
    }
}
export default Ours