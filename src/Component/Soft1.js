import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../css/soft.css";
class Soft1 extends React.Component{
    render(){
        return(
            <div>
                  <div>
        <Container>
          <Row>
            <Col>
              <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="go">
                  <img
                    src={require("../images/6.jpg")}
                    height={80}
                    width={80}
                  />
                </div>
                <br />

                <h6 className="hee">Mobile App Development</h6>

                <p className="helo">
                Our Mobile App Developers are adopting user based methodologies, and technologies for building both IOS AND Android mobile apps..
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
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="go">
                  <img
                    src={require("../images/7.jpg")}
                    height={80}
                    width={80}
                  />
                </div>
                <br />

                <h6 className="hee">Product & Design</h6>

                <p className="helo">
                Product designing is exactly what end-user see. Our creative graphics designers will make a suitable and fresh design ideas for your product.
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
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="go">
                  <img
                    src={require("../images/8.jpg")}
                    height={80}
                    width={80}
                  />
                </div>
                <br />

                <h6 className="hee">Ecommerce</h6>

                <p className="helo">
                Our professional Market Expert will solve your problem related to Online Shopping. We will provide you solution related to Amazon and Shopify Stores.
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
            </div>
        )
    }
}
export default Soft1