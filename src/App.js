import './App.css';
import Create from './Create';
import Home from './Home';
import AddEx from './AddEx';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Ex from './ex';
import { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({ type :'Push', num: 1, date: '7/30/2024'});
  
  return (
    <Router>
    <div className="App">
        

        <header><h1>Gym Tracker</h1></header>
        <Routes>
          <Route path = '/' element = {<Home/>}>
          </Route>
          
          <Route path = '/create' element = {<Create formData={formData} setFormData={setFormData}/>}>
          </Route>
          <Route path = "/workouts/:id"  element={<Ex />}>
          </Route>
          <Route path = "/addEx" element= {<AddEx formData={formData} />}>

          </Route>
          
          
        </Routes>

      </div>
      </Router>
      

  );
}

export default App;
