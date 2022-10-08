import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/HDoc2.css";

class Docum extends React.Component {
  render() {
    return (
      <div className="page">
        
        {/* <Container>
              <Row>
             
                <Col xs={3}>
                
                </Col>
               
                <Col>
             
                </Col>
              </Row>
            </Container> */}
        <Container>
          <Row>
            <Col xs={5}>
              {" "}
              <div className="page1">
            
                <br />
               <img src={require("../images/2.jpg")} />  PEOPLE LOVE US
                <br />
                <br />
                <h6 className="hy">

                Why Should you choose iSkillers?
                </h6>

                <p className="text2">
                  We have been working since 2020, as an IT services provider
                  company, we are developing software applications and mobile
                  apps, designing websites, branding businesses for clients all
                  over the world.
                </p>
                <br />
                {/* <button className="btnn">Get in Touch</button> */}
              </div>
            </Col>
            <Col xs={2}></Col>
            <Col xs={2}>
              {" "}
              <div className="ground">
               

                <img
                  src={require("../images/02.png")}
                  height={300}
                  width={360}
                />
              </div>
            </Col>
          </Row>
          {/* <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row> */}
        </Container>

        <br />
                <br />
                <br />
                <br />
                <br />
                {/* <br />
                <br /> */}

        <Container>
      <Row>
        <Col></Col>
        <Col xs={6}> <br />
               <img src={require("../images/2.jpg")} className="hii "/>  PEOPLE LOVE US
                <br />
                <h5 className="hy">We Are Offering All sort of IT Solutions Services</h5>
                <br />
                {/* <br /> */}
                {/* <br />
                <br />
                <br />
                <br /> */}
                {/* <br /> */}
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
    );
  }
}
export default Docum;
