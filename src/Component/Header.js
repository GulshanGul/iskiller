// import React from "react";
import "../css/Header.css"
// import { Link } from "react-router-dom";
// class Header extends React.Component{
//     render(){
//         return(
//             <div className="navbar">
//                 <div className="icon">
//                     <img src={require("../images/ml.jpg")} height={100} width={100} />
//                 </div>
//                 <div className="menu">
//                     <ul>
//                         <li>
//                         {/* <Link to="/Home">Home</Link> */}
//                         <a href="Home">Home</a>
//                         </li>
//                         <li>
//                         <a href="Bout">About Us</a>
//                         </li>
//                         <li>
//                         <a href="Academy">Academy</a>
//                         </li>
//                         <li>
//                         <a href="Ecommerce">Ecommerce</a>
//                         </li>
//                         <li>
//                         <a href="Mobile App Development">Mobile App Development</a>
//                         </li>
//                         <li>
//                         <a href="Software">Software Development</a>
//                         </li>
//                         <li>
//                         <a href="Develop">Web Development</a>
//                         </li>
//                         <li>
//                         <a href="Things">Product $ Design</a>
//                         </li>
//                         <li>
//                         <a href="WordPress">WordPress</a>
//                         </li>
//                         <li>
//                         <a href="Internships">Internships</a>
//                         </li>
//                         <li>
//                         <a href="Our Team">Our Team</a>
//                         </li>
//                         <li>
//                         <a href="Jobs">Jobs</a>
//                         </li>
//                     </ul>
//                     <button>Contact</button>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Header

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useHistory } from "react-router-dom";

function Header(props) {
    //   const params = useHistory()

console.log(window.location.pathname)
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={ require("../images/ml.jpg") } height={100}
                  width={100}  />
                  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/academy" >Academy </Nav.Link>
            <Nav.Link href="/ecommerce">Ecommerce</Nav.Link>
            <Nav.Link href="/internships">Internships</Nav.Link>
            <Nav.Link href="/jobs" >Jobs</Nav.Link>
            <Nav.Link href="/mobileAppDevelopment">Mobile App Development</Nav.Link>
            <Nav.Link href="/ourTeam">Our Team</Nav.Link>
            <Nav.Link href="/ProductDesign" >Product & Design</Nav.Link>
            <Nav.Link href="/softwareDevelopment">Software Development</Nav.Link>
            <Nav.Link href="/webDevelopment">Web Development</Nav.Link>
            <Nav.Link href="/wordPress" >WordPress</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button variant="outline-success" className='button' >Contact</Button>
          {/* </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;