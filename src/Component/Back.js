import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Back.css";
// import Button from 'react-bootstrap/Button';
class Back extends React.Component {
  render() {
    return (
      <div className="page">
      
        <Container>
      <Row>
        <Col sm={6}>  <div className="page1">
                <br />
                <br />
                <br />
                <br />
                <p>Home {'>'} About</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <br />
                <h1 className="text">iSkillers - IT</h1>
                <h1 className="text">Company</h1>
                <br />

                <p className="text1">
                  IT services provider company managed by highly experienced
                  information technology professionals.
                </p>
                <br />
                <button className="btnn">Get in Touch</button>

         
              </div></Col>
        {/* <Col xs={2}></Col> */}
        <Col sm={6}><div className="background">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <img src={require("../images/01.jpg")} height={460} width={460} />
              </div></Col>
      </Row>
      {/* <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row> */}
    </Container>
      </div>
    );
  }
}

export default Back;
