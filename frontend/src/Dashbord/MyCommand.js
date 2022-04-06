import React from "react";
import CommandTable from "./CommandTable";
import {NavLink} from "react-router-dom"
import Header from "../Layout/Header";

class MyCommand extends React.Component{

constructor(props){
super(props);

this.state={


}



}

render(){

return(

<div  className="">
<Header/>
<br/><br/><br/><br/>
<div className="row">
<div className="col mt-5 mb-3" align='center'>
<NavLink to="/NewTicket" > 
<button className=" btn btn-warning" style={{'fontSize':"2rem" , "padding": "10px 300px"}} >  Add New Command </button>
</NavLink>
</div>
</div>

<div className="row" >
<div className=" col text-center  mb-3 mt-5"  >
<div className="mb-3" style={{"color":"blue"}}>
<strong>Total Commands : 500 </strong>
</div>
<div style={{"color":"blue"}}> 
<strong>Pending Commands : 50</strong>
</div>
</div>
</div>

<div className="row">
<div  className="col mt-3 ml-5" style={{"color":"white"}}>
<strong>Recently Added Commands :</strong>
</div>
</div>
<hr/>
<div className="row">
<div  className="col  ml-5 mr-5">
   <CommandTable/>

</div>
</div>

</div>



)




}









}

export default MyCommand ;