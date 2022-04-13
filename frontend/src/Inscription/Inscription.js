import React from 'react';
// import  {NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock,faUser,faCity,faPhone} from '@fortawesome/free-solid-svg-icons'
import './InscriptionStyle.css'

class Inscription extends React.Component{

    constructor(props){
super(props);

this.state={

    info : {},
    email:"",
    password:"",
    ville:""


}

    }

    handleChange=(event)=>{
        var take = this.state.info ;
           take[event.target.name]=event.target.value
   
         this.setState=({
          // [event.target.placeholder]:event.target.value,
         info : take
         } )
   
         console.log(this.state.info)
       };



handlesubmit=(e)=>{
e.preventDefault();
// const navigate=useNavigate()
    var mdp= document.getElementById("mdp");

    var vmdp= document.getElementById("vmdp")

    if(mdp.value!==vmdp.value  ){

  alert("les mots de passe sont differents")

     }
     else{
       console.log(this.state.info)

       

        axios.post('http://localhost:4002/api/inscription', this.state.info).then( (res)=>  {  
            const infos=res.data
            console.log(infos)

           
            
        
        //    navigate("/Dashbord" )
    
        })
        
     }

     
    


     

}




render(){
return(

<div className=''>
<div className='row '>
<div className='col-12'>
   
    <h1 className='headerIn' > Register Client  </h1>
    </div>
    <div className='col-2 d'>
    </div>
    </div>
    <hr/>
    <div className=' ' >
    <div className='form-group'>
    <br/>
    <form className='Myform' onSubmit={this.handlesubmit} >
    <div className='row a '>
    <div className='col '>
    <br/> <br/> <br/>
    <div className='row '>
    <br/>
    <div className='col-2 '>

    <div className='form-group'>
    
    <FontAwesomeIcon icon={ faUser} className="i4" ></FontAwesomeIcon>
    <input type="text" name='Nom' onChange={this.handleChange}  placeholder='Nom Complet' className='form-control'  required />
    <br/>
    </div>

    <div className='form-group '>
    
    <FontAwesomeIcon icon={ faEnvelope} className="i4" ></FontAwesomeIcon>
    <input type="email" name='email' onChange={this.handleChange}  placeholder='Email' className='form-control'  required />
    <br/>
    </div>

    <div className='form-group'>
    
    <FontAwesomeIcon icon={ faCity} className="i4" ></FontAwesomeIcon>
    <input type="text" name='Ville' onChange={this.handleChange}  placeholder='Ville' className='form-control'  required />
    
    </div>
    
    </div>
    <div className='col-2 b2 '>
    

    <div className='form-group'>
    
    <FontAwesomeIcon icon={ faPhone} className="i4" ></FontAwesomeIcon>
    <input type="text" name='Telephone' onChange={this.handleChange}  placeholder='Telephone' className='form-control'  required />
    
    </div>

    
    <div className='form-group'>
    
    <label className='form-label' > </label>
    <FontAwesomeIcon icon={ faLock} className="i3" ></FontAwesomeIcon>
    <input type="password" name='password' id='mdp'  onChange={this.handleChange} placeholder='password' className='form-control' required />
    
    </div>
    
    <div className='form-group'>
    
    <label className='form-label' > </label>
    <FontAwesomeIcon icon={ faLock} className="i3" ></FontAwesomeIcon>
    <input type="password"  id='vmdp' name='confirmepassword' onChange={this.handleChange} placeholder='Confirme password' className='form-control' required />
    
    </div>
    </div>
    
    <br/>
    
    
    </div>
    <br/> <br/>
  
    <button className='mybtnIn btn' type='submit'> Register </button>
    </div>
    
    
   
    </div>
    </form>
    
    </div>
        
    </div>
    
    {/* </div> */}
    
    
        
    
    </div>
)


}


}
export default Inscription;