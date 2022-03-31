import React from "react";
import Header from "../Layout/Header"
import {Card,CardText,CardTitle,Button,Col,Row   } from "reactstrap"
import  "./Accueilstyle.css"
import  {NavLink } from 'react-router-dom';

function Accueil(){

return(


<div className="bG">

<Row className="" >
  <div className="bG" sm="8">
    <div className="div1" body>
      <CardTitle tag="h1" align="center" className="title1">
      <strong>MyCRM</strong>
      </CardTitle>
      <Row className=" R1" >
      <Col  sm="6">
      <NavLink to="/login" > 
      <Button className="bT1"
    color="warning"
    outline
  >
    <strong> SignIn</strong>
  </Button>
  </NavLink>
  </Col>
  <Col  sm="6">
  <NavLink to="/Inscription" >
  <Button  className="bT1"
    color="warning"
    outline
  >
    <strong>Register</strong>
  </Button>
  </NavLink>
  </Col>
  </Row>
      
    </div>
  </div>


  


  {/* <Col className="div2" sm="4">
    <Card body>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      
    </Card>
  </Col>




  <Col className="" sm="4">
    <Card body>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      
    </Card>
  </Col> */}
</Row>
</div>




)





}

export default Accueil;