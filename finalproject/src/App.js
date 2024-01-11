import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headersection from './Headersection';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Headersection.css';
import './Homesection.css';
import Homesection from './Homesection';
import './Specification.css';
import Specificationsection from './Specificationsection';
import Advancesection from './Advancesection';
import './Advancesection.css';
import './Whyisbest.css';
import Whyisbestsection from './Whyisbest';
import Videosection from './Videosection';
import './Videosection.css';
import Easyandsecuresection from './Easyandsecuresection';
import './Easyandsecuresection.css';
import Pricingsection from './Pricingsection';
import './Pricingsection.css';
import Designer from './Designer';
import './Designer.css';
// import './Testominal.css';
import Letsblog from './Letsblog';
import './Letsblog.css';
import './Multi.css';
import Frequently from './Frequentlysection';
import './Frequently.css';
import { Route, Routes } from 'react-router-dom';
import Allsection from './Allsections';


function App() {
  return (
    <div className="App">
      <Routes>
     <Route path='/'element={<Allsection/>}> 
     <Route path="/homesection" element={<Homesection/>}/> 
     <Route path="/feature" element={<Advancesection/>}/> 
     <Route path="/whyisbest" element={<Whyisbestsection/>}/>
     <Route path='/pricing' element={<Pricingsection/>}/>
      </Route>
      </Routes>
     
      {/* <Whyisbestsection/>
      <Videosection/>
      <Easyandsecuresection/>
      <Pricingsection/>
      <Designer/>
      <Letsblog/>
      <Frequently/> */}
      
   </div>
  );
}

export default App;
