// import React from "react";
// import Header from "../Layout/Header"
// import {Card,CardText,CardTitle,Button,Col,Row   } from "reactstrap"
// import  "./Accueilstyle.css"
// 
// function Accueil(){

// return(


// <div className=" div1">

// {/* <Row className="" > */}
 
//     <div className=" div1 ml-5" >
//       <CardTitle  align="center" >
//       <strong className="title1">MyCRM</strong>
//       </CardTitle>
//       <Row className=" R1 " >
//       <Col  sm="6">
//       <NavLink to="/login" > 
//       <Button className="bT1"
//     color="warning"
//     outline
//   >
//     <strong> SignIn</strong>
//   </Button>
//   </NavLink>
//   </Col>
//   <Col  sm="6">
//   <NavLink to="/Inscription" >
//   <Button  className="bT2"
//     color="primary"
//     outline
//   >
//     <strong>Register</strong>
//   </Button>
//   </NavLink>
//   </Col>
//   </Row>
      
    
//   </div>


  


 
// </div>




// )





// }

// export default Accueil;





import * as React from 'react';

import ProductHero from './modules/ProductHero';
// import ProductValues from './modules/ProductValues';
import AppAppBar from './modules/AppAppBar';
import withRoot from './modules/withRoot';


function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      
     
      
    </React.Fragment>
  );
}

export default withRoot(Index);