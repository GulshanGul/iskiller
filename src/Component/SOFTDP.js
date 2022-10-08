import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BiMessageAltDots} from "react-icons/bi"
import {HiOutlineLocationMarker, HiOutlineMail} from "react-icons/hi"
import "../css/SOFTDP.css"
class SOFTDP extends React.Component{
    render(){
        return(
            
            <div>
        <br />
        <br />
        <br />
    <br />
<Container>
<h6>Home {">"} Software Development </h6>
      <Row>

        {/* <Col xs={0}></Col> */}
        <Col xs={7}>

<img src={require("../images/sd.jpg")} height={500} width={650} />

        </Col>
        <Col xs={3}>
        <br />
        <br />
        <br />

        <div className="form">
            <br />
<h2 className="tact">Contact Info</h2>
<br />
<h6 className="phone"><BiMessageAltDots size={25} /> Phone:</h6>
<p className="contact">
+92-33-22511711</p>
<br />
<h6 className="phone"><HiOutlineLocationMarker size={25} /> Location:</h6>
<p className="one">
1st Floor Kallar House, North Colony, Mithi, Sindh Pakistan</p>
<br />
<h6 className="phone"><HiOutlineMail size={25} /> Email:</h6>
<p className="contact">
info@iskillers.com</p>
<br />

        </div>
        </Col>
      </Row>
      {/* <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row> */}
    </Container>
            </div>
        )
    }
}
export default SOFTDP