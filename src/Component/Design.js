import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiMessageAltDots } from "react-icons/bi";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
class Design extends React.Component {
  render() {
    return (
      <div>
                <br />
                <br />
                <br />
                <br />

   <Container>
      <Row>
        <Col xs={10}>
        <h6 className="service">
        About this Services
        </h6>
        <br />
        <p className="making">
        Our professional Market Expert will solve your problem related to Online Shopping. We will provide you solution related to Amazon and Shopify Stores.

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
        Adobe Photoshop
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
        Adobe illustrator
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
        Adobe XD
        </li>
        </div>
        </Col>
        {/* <Col></Col>
        <Col></Col> */}
    
    
      </Row>
      <br />
   
    </Container>
      </div>
    );
  }
}
export default Design;