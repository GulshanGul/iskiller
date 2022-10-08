import React from "react";
import Product from "../Component/Product";
import Design from "../Component/Design";
import Footer from "../Component/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../Component/Header";
class Ecommerce extends React.Component{
    render(){
        return(
<div>
  <Header />
  
    <br />
    <br />
    <br />
<Container>
<h6>Home {">"} Ecommerce</h6>
      <Row>
      {/* <Col></Col> */}
        <Col xs={7}>
        <Design />
        </Col>
        <Col xs={1}></Col>
        <Col xs={2}>
        <Product />
        </Col>
      </Row>
      <Row>
        {/* <Col>1 of 3</Col>
        <Col></Col>
        <Col></Col> */}
      </Row>
    </Container>
    <Footer />
</div>
        )
    }
}
export default Ecommerce