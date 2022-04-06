import './App.css';
import Passwordreset from './Passwordreset/Passwordreset';
import {BrowserRouter , Routes,Route,} from 'react-router-dom';
import NewTicket from './Dashbord/NewTickets/NewTicket';
import Inscription from './Inscription/Inscription';
import Accueil from './Accueil/Accueil';
import Login from './Login/Login';
import Dashbord from './Dashbord/Dasbord';




function App() {
  return (
    
  
  <BrowserRouter>
    
    <Routes> 
    
      <Route path="/" element={<Accueil/>} />

      <Route path="/Passwordreset" element={<Passwordreset/>} />

      <Route path="/NewTicket" element={<NewTicket/>} />

      <Route path="/login" element={<Login/>} />

      < Route path="/Inscription" element={<Inscription/>} />

      < Route path="/Dashbord" element={<Dashbord/>} />
      
        </Routes> 
    
    
    
      </BrowserRouter> 




  );
}

export default App;
