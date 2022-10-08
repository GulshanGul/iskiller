import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BiMessageAltDots} from "react-icons/bi"
import {HiOutlineLocationMarker, HiOutlineMail} from "react-icons/hi"
class Web extends React.Component{
    render(){
        return(
            <div>
                     <br />
        <br />
        <br />
    <br />
<Container>
<h6>Home {">"} Web Development </h6>
      <Row>

        {/* <Col xs={0}></Col> */}
        <Col xs={7}>

<img src={require("../images/wd.jpg")} height={500} width={600} />

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
        Making software programs are not an easy job, but our Software developers are very experienced and familiar with all modern tools
    
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
        HTML5
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
          CSS3
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
        JavaScript
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
           Reactjs
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
           Redux
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
           Typescript
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
           Firebase
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
           Nodejs
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
          MongoDB
        </li>
        </div>
        </Col>
        <Col></Col>
        <Col></Col>

    <br />
    <br />
    <br />
    <br />
    {/* <br />
    <br /> */}
      </Row>
    </Container>
            </div>
        )
    }
}
export default Web