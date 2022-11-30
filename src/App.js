
import Home  from './Component/home';
import { BrowserRouter as Router ,  Route,Routes } from "react-router-dom";
import Login from './Component/signup';
import SignUp from "./Component/signup"
import Verification from './Component/verify';

function App() {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp/> }/>
        <Route path="/login" element={<Login/> }/>
        <Route path='/verify' element={<Verification/>}/>


      </Routes>
      </Router>
      
   
    
  );
}

export default App;
