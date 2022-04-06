import React from "react";
import Header from "../Layout/Header"
import {Card,CardText,CardTitle,Button,Col,Row   } from "reactstrap"
import  "./Accueilstyle.css"
import  {NavLink } from 'react-router-dom';

function Accueil(){

return(


<div className=" div1">

{/* <Row className="" > */}
 
    <div className=" div1 ml-2" >
      <CardTitle  align="center" >
      <strong className="title1">MyCRM</strong>
      </CardTitle>
      <Row className=" R1 " >
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
  <Button  className="bT2"
    color="primary"
    outline
  >
    <strong>Register</strong>
  </Button>
  </NavLink>
  </Col>
  </Row>
      
    
  </div>


  


 
</div>




)





}

export default Accueil;