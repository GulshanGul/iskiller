import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/SDService.css"
class SDService extends React.Component{
    render(){
        return(
            <div>
                <br />
                <br />
                <br />
                <br />

   <Container>
      <Row>
        <Col xs={8}>
        <h6 className="service">
        About this Services
        </h6>
        <br />
        <p className="making">
        Making software programs are not an easy job, but our Software developers are very experienced and familiar with all modern tools
    
        </p>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <br />
        
        
      <Row>
        <Col xs={8}>
        <h6 className="service">Technologies That We Use</h6>
        <br />
       
        </Col>
        <Col>
       
        </Col>
        <Col>
      
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="html">
        <li>
           JavaScript
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
           HTML
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
           Git
        </li>
        </div>
        </Col>
        <Col></Col>
        <Col></Col>
    
    
      </Row>
      <br />
      <Row>
        <Col>
        <div className="html">
        <li>
           CSS
        </li>
        </div>
        </Col>
        <Col>
        <div className="html">
        <li>
           MySQL
        </li>
        </div>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>

    
      </Row>
    </Container>
            </div>
        )
    }
}
export default SDService