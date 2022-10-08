import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Reverse extends React.Component {
  render() {
    return (
      <div>
        <Container>
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
                <h1 className="text">We Like to Start Your Project With Us</h1>
                {/* <h1 className="text">Company</h1> */}
                <br />

                <p className="text1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <br />
                <button className="btnn">Get Started</button>
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
    );
  }
}
export default Reverse;
