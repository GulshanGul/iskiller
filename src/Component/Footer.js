import React from "react";
import "../css/Footer.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiFillFacebook,AiFillTwitterSquare ,AiFillLinkedin ,AiFillInstagram}from "react-icons/ai"
import {VscLocation} from "react-icons/vsc"
import {BsTelephonePlus} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
import {BiTime} from "react-icons/bi"

class Footer extends React.Component{
    render(){
        return(
            <div>
    <Container>
    <br />
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col xs={5}>
            <div>
                <img src={require("../images/footer.jpg")} height={120} width={240}/>

                <p className="contt">iSkillers is the software and IT solution providing Company in Pakistan. 
                We provide top notch Software Solutions combined with advanced learning through
                the iSkilllers Training Academy.</p>
                <p className="icc"><AiFillFacebook size={30} /><AiFillTwitterSquare size={30} /><AiFillLinkedin size={30} /><AiFillInstagram size={30} /></p>
            </div>
        </Col>
        <Col xs={3}>
        <div>
            <h4 className="pagess">Pages</h4>
            <br />
            <p className="cont">Home</p>
          
            <p className="cont">About Us</p>
            
            <p className="cont">Over Team</p>
           
            <p className="cont">Internships</p>
           
            <p className="cont">Jobs</p>
           
            <p className="cont">Contact</p>
            <br />
        </div>
        </Col>
        <Col>
        <div>
            <h4 className="pagess">Contact</h4>
            <br />
            <p className="two"><VscLocation size={20} />1st Floor Kallar House, North Colony, Mithi,
Pakistan</p>
            <p className="cont"><BsTelephonePlus size={20} />+92-33-22511711</p>
            <p className="cont"><FiMail size={20} /> info@iskillers.com</p>
            <p className="two"><BiTime size={20} />Opening Hours: 09:00 - 17:00</p>
        </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      
      <Row>
        <Col xs={8}>
            <p className="two">© 2021 All Rights Reserved. Design & Developed By iSkillers</p>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
            </div>
        )
    }
}
export default Footer