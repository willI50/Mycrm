import React from 'react';
import './LoginStyle.css'
import {useState} from "react"
import  {NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons'

function Login(){ 


const [email , SetEmail]=useState('');
const [password , SetPassword]=useState("");
const [info , setInfo]=useState({})
const navigate=useNavigate()




const handlechange=(e)=>{
   const {name , value}  = e.target  ;



    switch(name){

        case "email":
            SetEmail(value);

    
           

            break;
            case "password":
                SetPassword(value);
                break;


            default:
                break;
    }
    console.log(email,password );
   
    setInfo({email,password } )
     }

    const handleSubmit=(e)=>{
    e.preventDefault();

    
    console.log(info)
    
    
   //envoyer les element a la base de données
   
    axios.post('http://localhost:4002/api/Login', info).then( res =>  {  
        const infos=res.data
        console.log(infos);
//stocker les elements dans le localStorage
       
if(info===undefined){   

    console.log("rien")
}
else{ 
    localStorage.setItem("token",JSON.stringify(infos));
    
//POUR LES REDIRECTIONS
        navigate("/Dashbord")
       

         }
} )
     
      
    
 }

return(

<div className=''>
    


<div className='row '> 
<div className='col-4 ml-5  ' >
<div className='form-group '>
<h1 className='headerlog' > Login Client   </h1>

<form className='orm' onSubmit={handleSubmit} >
<hr/>
<div className='form-group '>

<FontAwesomeIcon icon={ faEnvelope} className="i1" ></FontAwesomeIcon>
<input type="email" name='email' id="int" onChange={handlechange} onKeyUp={handlechange} placeholder='Emai' className='form-control orm' value={email} required />


</div>

<div className='form-group'>

<label className='form-label' > </label>
<FontAwesomeIcon icon={ faLock} className="i2" ></FontAwesomeIcon>
<input type="password"  name='password' onChange={handlechange}  onKeyUp={handlechange} value={password} placeholder='password' className='form-control orm' required />

</div>


<button className='mybtn btn' type='submit'> Login </button>
<br/>
<hr/>
<div className='link1' align='left' >
<NavLink to="/Passwordreset" ><h5> 
    Forget password 
    </h5>
    </NavLink>
    </div>
</form>

   
    
<br/>
</div>
</div>
<div className='col b  ' >
    
</div>
</div>

{/* </div> */}


    

</div>
)


    
}
export default Login;