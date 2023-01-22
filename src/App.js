import React from 'react'
import Form from './components/Form';
import Display from './components/Display';
import { BrowserRouter,
        Route,
        Routes
} from 'react-router-dom';
import DisplayPlanet from './components/DisplayPlanet';

function App() {
  // const [categoryArray, setCategoryArray] = useState([])
  // const [idArray, setIdArray] = useState([])
  // const {categoryP, idP} = useParams()
  return (
  
    <BrowserRouter>
    <Form />
      <Routes>
        <Route path={'/people/:id'} element={<Display/>}></Route>
        <Route path={'/planets/:id'} element={<DisplayPlanet/>}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
