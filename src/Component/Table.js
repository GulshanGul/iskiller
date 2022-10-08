import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/Table.css"

class Table extends React.Component{
    render(){
        return(
            <div>
    <Container>
    <br />
    <br />
    <br />
      <Row>
        <Col xs={2}>
        <div className="nmbr">
        <h1 className="nmb">1</h1>
      </div></Col>
        <Col xs={4}>
        <div className="heading">
    
            
            <h3 className="head">Requirements</h3>
            <p className="ing">Our Project Management team collect requirement and analyse them for preparing road map, sprint and initiate plan.</p>
        </div>
        </Col>
        <Col xs={2}>
        <div className="nmbr">
        <h1 className="nmb">4</h1>
      </div>
        </Col>
        <Col xs={4}>
        <div className="heading">
            <h3 className="head">Development</h3>
            <p className="ing">iSkillers Project Management team breakdown the all requirements and set priorities and in the last iterate them for scheduling.</p>
        </div>
        </Col>
      </Row>
      <Row>
      <Col xs={2}>
      <div className="nmbr">
        <h1 className="nmb">2</h1>

      </div>
      </Col>
        <Col xs={4}>
        <div className="heading">
            <h3 className="head">Planning</h3>
            <p className="ing">iSkillers Project Management team breakdown the all requirements and set priorities and in the last iterate them for scheduling.</p>
        </div>
        </Col>
        <Col xs={2}>
        <div className="nmbr">
        <h1 className="nmb">5</h1>

      </div>
        </Col>
        <Col xs={4}>
        <div className="heading">
            <h3 className="head">Testing</h3>
            <p className="ing">Team will work on testing, identify defects, and resolve those bugs.</p>
        </div>
        </Col>
      </Row>
      <Row>
      <Col xs={2}>
      <div className="nmbr">
        <h1 className="nmb">3</h1>

      </div>
      </Col>
        <Col xs={4}>
        <div className="heading">
            <h3 className="head">Design</h3>
            <p className="ing">Share architecture spike analysis, design and implement the prototype.</p>
        </div></Col>
        <Col xs={2}>
        <div className="nmbr">
        <h1 className="nmb">6</h1>

      </div>
        </Col>
        <Col xs={4}>
        <div className="heading">
            <h3 className="head">Release & Review</h3>
            <p className="ing">Demonstrate the user's stories, implemented and done to the product owner.</p>
        </div>
        </Col>
      </Row>
    </Container>
            </div>
        )
    }
}
export default Table