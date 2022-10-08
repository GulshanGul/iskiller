import React from "react";
import Mob from "../Component/Mob";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

class Mobile extends React.Component{
    render(){
        return(
            <div>
                <Header />
<Mob />
<Footer />
            </div>
        )
    }
}
export default Mobile