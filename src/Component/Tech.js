import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/HDoc2.css";
class Tech extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <br />
              <br />
              <img src={require("../images/2.jpg")} className="hii " />{" "}
              TECHNOLOGIES
              <br />
              <h5 className="hy">Technologies we work with</h5>
              <br />
              <br />
              <br />
            </Col>
            <Col></Col>
          </Row>

          <div className="colm">
            <Row>
              <Col>
                <button className="bttn">MOBILE</button>
              </Col>
              <Col>
                <button className="bttn">FRONT END</button>
              </Col>
              <Col>
                <button className="bttn">DATABASE</button>
              </Col>
              <Col>
                <button className="bttn">BACKEND</button>
              </Col>
              <Col>
                <button className="bttn">CMS</button>
              </Col>
              <Col>
                <button className="bttn">DEVOPS</button>
              </Col>
            </Row>
<br />
<br />
<br />
<br />

            <Row>
        <Col>
        <div className="ios">
            <img src={require("../images/iOS.jpg")}  height={60}
                  width={60}/>

                  <br />
                  <br />
                
                  <h6>iOS</h6>

        </div>
        </Col>
        <Col>   <div className="ios">
            <img src={require("../images/anderiod.jpg")}  height={60}
                  width={60}/>

                  <br />
                  <br />
                
                  <h6>Andriod</h6>

        </div></Col>
        <Col>   <div className="ios">
            <img src={require("../images/react.jpg")}  height={60}
                  width={60}/>

                  <br />
                  <br />
                
                  <h6>React</h6>

        </div></Col>
        <Col>   <div className="ios">
            <img src={require("../images/expo.jpg")}  height={60}
                  width={60}/>

                  <br />
                  <br />
                
                  <h6>Expo</h6>

        </div></Col>
        
      </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Tech;
