 
import './App.css';
import StaticLayout from './components/StaticLayout';
import Contact from './components/Contact';
import ChartAndMaps from './components/ChartAndMaps';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateContact from './ContactComponents/CreateContact';
function App() {
  return (
     
 <StaticLayout>
  <Routes>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/create' element={<CreateContact/>}/>
   
   <Route path='/ChartAndMaps' element={<ChartAndMaps/>}/>
  </Routes>

 </StaticLayout>
  
  );
}

export default App;
