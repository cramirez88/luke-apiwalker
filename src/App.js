import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate
} from 'react-router-dom'
import People from './components/People';
import Planets from './components/Planets';
import Form from './components/Form';

function App() {
  return (
   <>
   <BrowserRouter>
   <Form/>
   
    <Routes>
      <Route path='/people/:id' element={<People/>}/>
      <Route path='/planets/:id' element={<Planets/>}/>
    </Routes>
   </BrowserRouter>
 

   </>
  );
}

export default App;
