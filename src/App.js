import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import {DataContextProvider} from './component/Context'
import Section from './component/Section';
import Products from './component/Section/Products'
import Detail from './component/Section/Detail'

function App() {
  return (

    

<div className="App">
  

  <Router>
  <DataContextProvider>
      <Header/>
      <Section/>
      <Routes>
        <Route path='/product' element={<Products/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
      </Routes>
      </DataContextProvider>
      
      </Router>
  
     
  
    </div>

  
   
  );
}

export default App;
