import React from 'react';
import './Passwordreset.css'
import  {NavLink } from 'react-router-dom';
import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Passwordreset(){ 

// Declaration du state

const [email , SetEmail]=useState('');

//fonction de recupération la ma valeur de l'email

const handlechange=(e)=>{
   const mail = e.target.value  ;

            SetEmail(mail);

        console.log(e.target.value)

    
    }

    // fonction de sumition du formulaire PasswordReset

    const ResetPassword=(e)=>{
    e.preventDefault();

    if(!email){
   
    alert("veuillez entrer une Adresse email")


    } 
    console.log("email :" + email);  
    
}



return(

<div className="bg1 bg-info">
<br/>

<div className='jumbo container m'> 

<div className='row '>
<div className='col ' >

<div className='form-group'><br/>

<h1 className='headerlogin' align='center'> Reset Password   </h1>

<form className='forme' onSubmit={ResetPassword} >
<hr/><br/><br/>

<div className='form-group'>
<label className='form-label' > Email Address </label>
<input type="email" name='email' onChange={handlechange}  placeholder='Enter email' className='form-control' value={email}  />
<FontAwesomeIcon icon={ faEnvelope} className="i" ></FontAwesomeIcon>
</div>
<br/>

<button className='mybtn btn' type='submit'> Submit </button>
<br/>
<hr/>

</form>
<div align='center' >
<NavLink to="/login" ><h5> Login now</h5>
</NavLink>
</div>
<br/>
</div>
</div>

</div>

</div>




</div>
)


    
}
export default Passwordreset;