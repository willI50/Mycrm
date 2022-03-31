import React from 'react';
import  {NavLink, useNavigate } from 'react-router-dom';
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
            // .catch(()=> console.log("pas reussie"))
            // navigate("/NewTicket")
    
        })
        
     }

     
    


     

}




render(){
return(

<div className='a'>
    
    
    <div className='row '>
    <div className='col ' >
    <h1 className='headerIn' > Register Client  </h1>
    <div className='form-group'>
    
    <form className='Myform' onSubmit={this.handlesubmit} >
    <hr/>
    <div className='row'>
    <div className='col'>
    <div className='form-group'>
    
    <FontAwesomeIcon icon={ faUser} className="i1" ></FontAwesomeIcon>
    <input type="text" name='Nom' onChange={this.handleChange}  placeholder='Nom Complet' className='form-control'  required />
    
    </div>

    <div className='form-group'>
    
    <FontAwesomeIcon icon={ faEnvelope} className="i1" ></FontAwesomeIcon>
    <input type="email" name='email' onChange={this.handleChange}  placeholder='Email' className='form-control'  required />
    
    </div>

    <div className='form-group'>
    
    <FontAwesomeIcon icon={ faCity} className="i1" ></FontAwesomeIcon>
    <input type="text" name='Ville' onChange={this.handleChange}  placeholder='Ville' className='form-control'  required />
    
    </div>
    </div>
    <div className='col'>
    

    <div className='form-group'>
    
    <FontAwesomeIcon icon={ faPhone} className="i1" ></FontAwesomeIcon>
    <input type="text" name='Telephone' onChange={this.handleChange}  placeholder='Telephone' className='form-control'  required />
    
    </div>

    
    <div className='form-group'>
    
    <label className='form-label' > </label>
    <FontAwesomeIcon icon={ faLock} className="i2" ></FontAwesomeIcon>
    <input type="password" name='password' id='mdp'  onChange={this.handleChange} placeholder='password' className='form-control' required />
    
    </div>
    
    <div className='form-group'>
    
    <label className='form-label' > </label>
    <FontAwesomeIcon icon={ faLock} className="i2" ></FontAwesomeIcon>
    <input type="password"  id='vmdp' name='confirmepassword' onChange={this.handleChange} placeholder='Confirme password' className='form-control' required />
    
    </div>
    </div>
    
    <br/>
    </div>
    <hr/>
    <button className='mybtnIn btn' type='submit'> Register </button>
    </form>
    
       
        
    <br/>
    </div>
    </div>
    </div>
    
    {/* </div> */}
    
    
        
    
    </div>
)


}


}
export default Inscription;