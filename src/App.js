import React, {useState} from 'react'
import Form from './components/Form';
import Display from './components/Display';
import { BrowserRouter,
        Route,
        Routes
} from 'react-router-dom';

function App() {
  const [categoryArray, setCategoryArray] = useState([])
  const [idArray, setIdArray] = useState([])
  // const {categoryP, idP} = useParams()
  return (
  
    <BrowserRouter>
    <Form categoryArray={categoryArray} setIdArray={setIdArray} setCategoryArray={setCategoryArray} idArray={idArray} />
      <Routes>
        <Route path={'/people/:id/'} element={<Display/>}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
