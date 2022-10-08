import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../css/soft.css";
class Soft extends React.Component {
  render() {
    return (
      <div>
         {/* <br /> */}
                {/* <br />
                <br />
                <br />
                <br /> */}
        <Container>
          <Row>
            <Col>
              <div>
                {/* <br />
                <br /> */}
                {/* <br />
                <br />
                
                <br /> */}
                <div className="go">
                  <img
                    src={require("../images/03.jpg")}
                    height={80}
                    width={80}
                  />
                </div>
                <br />

                <h6 className="hee">Software Development</h6>

                <p className="helo">
                  Making software programs are not an easy job, but our Software
                  developers are very experienced and familiar with all modern
                  tools.
                </p>
                <br />
                <br />
                <button className="butn">
                  View Details <AiOutlineArrowRight size={20} />
                </button>
              </div>
            </Col>
            <Col>
              <div>
                {/* <br />
                <br /> */}
                {/* <br />
                <br />
                <br /> */}
                <div className="go">
                  <img
                    src={require("../images/04.jpg")}
                    height={80}
                    width={80}
                  />
                </div>
                <br />

                <h6 className="hee">Web Development</h6>

                <p className="helo">
                  Our Flexible and Expert IT team can turn your local or
                  international business or idea into Responsive and attractive
                  website.
                </p>
                <br />
                <br />
                <button className="butn">
                  View Details <AiOutlineArrowRight size={20} />
                </button>
              </div>
            </Col>
            <Col>
              <div>
                {/* <br />
                <br /> */}
                {/* <br />
                <br />
                <br /> */}
                <div className="go">
                  <img
                    src={require("../images/word.jpg")}
                    height={80}
                    width={80}
                  />
                </div>
                <br />

                <h6 className="hee">WordPress</h6>

                <p className="helo">
                  WordPress is a Simplest but most powerful and popular tool.
                  You can easily manage your site, even if you don't have any IT
                  experience.
                </p>
                <br />
                <br />
                <button className="butn">
                  View Details <AiOutlineArrowRight size={20} />
                </button>
              </div>
            </Col>
          </Row>
        
        </Container>
      </div>
    );
  }
}
export default Soft;
