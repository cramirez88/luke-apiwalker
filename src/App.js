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
   <Form/>
   <BrowserRouter>
    <Routes>
      <Route path='/people' element={<People/>}/>
      <Route path='/planets' element={<Planets/>}/>
    </Routes>
   </BrowserRouter>
 

   </>
  );
}

export default App;
