import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/about.css"
class About extends React.Component{
    render(){
        return(
            <div>
   <Container>
    <br />
    <h6>Home {">"} About Us</h6>
    <br />
    <br />
    <br />
    <br />
      <Row>
        <Col xs={6}>
            <div>
                <img src={require("../images/a.jpg")} height={480} width={480} />
            </div>
        </Col>
        <Col xs={6}>
        <br />
    <br />
    <br />
        <br />
              <br />
              <img src={require("../images/2.jpg")} className="hii " />{" "}
              ABOUT ISKILLERS
              <br />
              <h5 className="try">Excellent IT services for your success</h5>
              <br />
            
              <p className="count">
              We Are Increasing Business Success With Technology. Over 1 year working in IT services developing software applications, websites and mobile apps for clients all over the World.
                </p>
        </Col>
      </Row>
      <br />
    <br />
    <br />
    <br />
    <br />
      <Row>
        <Col>
        <div>
            <h6 className="our">
            Our Mission
            </h6>
            <br />
            <p className="mission">
            To cater to every Software need, Swiftly and Effectively
            </p>
        </div>
        </Col>
        <Col>
        <div>
            <h6 className="our">
            Our Mission
            </h6>
            <br />
            <p className="mission">
            To be the best software solution provider in the world, helping change the world of Technology through our top-notch Software Engineering Solutions.
            </p>
        </div>
        </Col>
        <Col>
        <img src={require("../images/combo.jpg")} height={300} width={350} />
        </Col>
      </Row>
    </Container>
            </div>
        )
    }
}
export default About