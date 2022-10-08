import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/Ships.css"
class Ships extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <br />
          <br />
          
        <h6>Home {">"} Internships</h6>
          <Row>
            <Col>
              <div className="background">
                <br />
                <br />
                <br />
                <br />

                <img
                  src={require("../images/1.jpg")}
                  height={330}
                  width={460}
                />
              </div>
            </Col>
            <Col xs={1}></Col>
            <Col>
              {" "}
              <div className="page1">
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* <br />
                <br />
                <br /> */}

                <br />
                <h1 className="text">Internships</h1>
                {/* <h1 className="text">Company</h1> */}
                <br />

                <p className="text1">
                If you're a student with an interest in Technical fields such as Web Development, Mobile App Development, Designing, and Digital Marketing, then apply for one of our internship programs.

                </p>
                <br />
                <button className="btnn">Apply Now</button>
              </div>
            </Col>
          </Row>
          {/* <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row> */}
       <br />
                <br />
                <br />
                <br />
                <br />
         <Row>
        <Col></Col>
        <Col xs={6}>
            <h6 className="ship">
            We are offering internships in following areas
            </h6>
        </Col>
        <Col></Col>
      </Row>
      <br />
      <Row>
        <Col></Col>
        <Col xs={5}>
            <div>
                <p className="intern">
                There is no any place for internship available
                </p>
            </div>
        </Col>
        <Col></Col>
      </Row>
        </Container>
      </div>
    );
  }
}
export default Ships;
