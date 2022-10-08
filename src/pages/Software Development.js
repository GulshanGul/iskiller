import React from "react";
import SOFTDP from "../Component/SOFTDP";
import SDService from "../Component/SDService";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
class SoftWare extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <SOFTDP />
                <SDService />
                <Footer />

            </div>
        )
    }
}
export default SoftWare