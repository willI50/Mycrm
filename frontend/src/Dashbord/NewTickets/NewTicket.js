import React from 'react';
import { Form } from 'react-bootstrap';
import './NewTicket.css'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle } from '@fortawesome/free-solid-svg-icons'

import axios    from 'axios'

class NewTicket extends React.Component{

constructor(props){
super(props);
this.state=({
    info:{},
   subject:"",
   date:[],
   text:""
   
} )

}

handleChange(e){
let value=e.target.value
    var issue = this.state.info;
    issue[e.target.name]=value;

    
    this.setState({

    [e.target.name]:e.target.value ,

info : issue

    })
console.log(this.state.info)


}

handleSubmit(e){
e.preventDefault()
console.log(this.state.info)

this.setState({

    date : [],
    text:"",
  subject : ""
    
        })

        axios.post('http://localhost:4002/api/NewTicket', this.state.info).then( (res)=>  {  
            const infos=res.data
            console.log(infos)
           
    
        })
        

}




render(){

    return(
        <div>

 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className='form'>
        <br/><br/>
<h1 className='title text-center' >Add New Ticket </h1>

<hr/>

<Form className=' myform ml-5 mr-5'  onSubmit={this.handleSubmit.bind(this)} >
<br/>
<div className='  myform form-group'  style={{"width":"700px"}} >

<label className='form-label' ><strong> subject :</strong> </label>
<input type="text" name='subject'  value={this.state.subject}     onChange={this.handleChange.bind(this)}   className='form-control'  required />


<FontAwesomeIcon icon={ faUserCircle} className="icone" ></FontAwesomeIcon>

<br/>




<label className='form-label' > <strong>Date: </strong></label>
<input type="date" name='date' value={this.state.date}  onChange={this.handleChange.bind(this)}  className='form-control' required />




<br/>
<label className='form-label' > <strong>Description :</strong></label>
<textarea name='text' size='30px' style={{"height":"100px"}} value={this.state.text}  onChange={this.handleChange.bind(this)} className='form-control' required />

</div>


<Button className='mybtn  w-100'   type='submit' block> Add New Ticket </Button>
<br/>

</Form>


</div>
        <br/><br/><br/>
        </div>


    )


}



}
export default NewTicket ; 