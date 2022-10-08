import React from "react";
import Soft from "../Component/soft";
import Soft1 from "../Component/Soft1";
import Back from "../Component/Back";
import Star from "../Component/Star";
import HDocs2 from "../Component/HDoc2";
import Tech from "../Component/Tech";
import Table from "../Component/Table";
import Reverse from "../Component/Reverse";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
class Home extends React.Component{
    render(){
        console.log("==================>",this.props)
        return(
            <div>
                <Header />
                <Back />
                <HDocs2 />
                <Soft />
<Soft1 />
                <Tech />
                <Reverse />
                <Star />
                <Table />
                <Footer />
            </div>
        )
    }
}
export default Home