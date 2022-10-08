import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/HDoc2.css"
class Star extends React.Component{
    render(){
        return(
<div>
<Container>
      <Row>
        <Col></Col>
        <Col xs={6}> <br />
        <br />
                <br />
                <br />
                <br />
               <img src={require("../images/2.jpg")} className="hii "/>  OUR WORKING PROCESS
                <br />
            
                
                <h5 className="hyy">Greater control over different projects through Agile Methodology.</h5>
                <br />
                <p>Our major role is customer satisfaction by rapid delivery of softwares.</p>
                <br />
                <br />
                <br />
                </Col>
        <Col></Col>
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
export default Star