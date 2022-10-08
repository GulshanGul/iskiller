import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BiMessageAltDots} from "react-icons/bi"
import {HiOutlineLocationMarker, HiOutlineMail} from "react-icons/hi"
class Press extends React.Component{
    render(){
        return(
            <div>
                   <br />
        <br />
        <br />
    <br />
<Container>
<h6>Home {">"} WordPress </h6>
      <Row>

        {/* <Col xs={0}></Col> */}
        <Col xs={7}>

<img src={require("../images/wp.jpg")} height={600} width={650} />

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
           <Row>
        <Col xs={8}>
        <h6 className="service">
        About this Services
        </h6>
        <br />
        <p className="making">
        WordPress is a Simplest but most powerful and popular tool. You can easily manage your site, even if you dont have any IT experience

        </p>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <br />
        
        
      <Row>
        <Col xs={8}>
        <h6 className="service">Technologies That We Use</h6>
        <br />
       
        </Col>
        <Col>
       
        </Col>
        <Col>
      
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="html">
        <li>
           JavaScript
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
           HTML
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
           Git
        </li>
        </div>
        </Col>
        <Col></Col>
        <Col></Col>
    
    
      </Row>
      <br />
      <Row>
        <Col>
        <div className="html">
        <li>
           CSS
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
           MySQL
        </li>
        </div>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>

    
      </Row>
      <br />
      <br />
      <br />
      <br />
    </Container>
            </div>
        )
    }
}
export default Press