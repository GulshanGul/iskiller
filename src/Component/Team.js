import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {GrLinkedinOption} from "react-icons/gr"
import "../css/Team.css"
class Team extends React.Component{
    render(){
        return(
            <div>
   <Container>
   <br />
   <h6>Home {">"} Our Team </h6>
            <br />
            <br />
            <br />
            <br />
            <br />
      <Row>
        <Col>
        <div>
            <img src={require("../images/p1.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">

            <h4 className="name">Pardeep Menghwar</h4>
        
            <p className="linked">Founder & Chairman</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div>
        </Col>
        <Col>
        <div>
            <img src={require("../images/i1.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">
            <h4 className="name">Ismail Memon</h4>
        
            <p className="linked">CEO</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div>

        </Col>
        <Col>
        <div>
            <img src={require("../images/a1.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">

            <h4 className="name">Ahmad Ali</h4>
        
            <p className="linked">Director</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
            <img src={require("../images/d1.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">

            <h2 className="name">Danish Raaz</h2>
        
            <p className="linked">Lead Trainer</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div>
        </Col>
        <Col>

        <div>
            <img src={require("../images/n1.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">

            <h2 className="name">Nand Lal</h2>
        
            <p className="linked">Manager</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div>
        </Col>
        <Col>
        <div>
            <img src={require("../images/a2.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">

            <h2 className="name">Amar Suthar</h2>
        
            <p className="linked">Frontend Developer</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div>
        </Col>
      </Row>




      <Row>
        <Col>
        <div>
            <img src={require("../images/h1.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">

            <h4 className="name">Hishmat Rai</h4>
        
            <p className="linked">Web Developer</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div>
        </Col>
        <Col>
        <div>
            <img src={require("../images/b1.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">
            <h4 className="name">Beerbal</h4>
        
            <p className="linked">Web Developer</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div>

        </Col>
        <Col>
        <div>
            <img src={require("../images/s1.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">

            <h4 className="name">Suneel Kumar</h4>
        
            <p className="linked">Mobile App Developer</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
            <img src={require("../images/k1.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">

            <h2 className="name">Khatu Mal</h2>
        
            <p className="linked">Mobile App Developer</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div>
        </Col>
        <Col>

        <div>
            <img src={require("../images/k2.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">

            <h2 className="name">Khanji Pir</h2>
        
            <p className="linked">Graphic Designer</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div>
        </Col>
        <Col>
        {/* <div>
            <img src={require("../images/a2.jpg")}  height={300} width={300}/>
            <br />
            <br />
            <div className="mainn">

            <h2 className="name">Amar Suthar</h2>
        
            <p className="linked">Frontend Developer</p>
            <p className="link"><GrLinkedinOption /></p>
            </div>
        </div> */}
        </Col>
      </Row>
    </Container>
            </div>
        )
    }
}
export default Team