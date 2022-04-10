import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import {DataProvider} from './component/Context'
import Section from './component/Section';
import Products from './component/Section/Products'
import Detail from './component/Section/Detail'

function App() {
  return (

    

<div className="App">
  <DataProvider>

  <Router>
      <Header/>
      <Section/>
      <Routes>
        <Route path='/product' element={<Products/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
      </Routes>
      </Router>
  </DataProvider>
     
  
    </div>

  
   
  );
}

export default App;
