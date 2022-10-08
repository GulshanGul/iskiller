import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Duty extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
            <h6>Home {">"} About Us</h6>
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
                <h1 className="text">Jobs</h1>
                {/* <h1 className="text">Company</h1> */}
                <br />

                <p className="text1">
                Do you want to work for a leading Software House where the customer is always at the center of attention? Apply Now to secure a position at iSkillers.

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
                We are offering Jobs in following areas
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
export default Duty;
