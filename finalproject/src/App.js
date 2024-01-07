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
import Testominal from './Testominal';
import ControlledCarousel from './Chat';
// import './Testominal.css';
import './Chat.css';
import Usechat from './Usechat';
import Multi from './Multi';

function App() {
  return (
    <div className="App">
      <Headersection/>
      <Homesection/>
      <Specificationsection/>
      <Advancesection/>
      <Whyisbestsection/>
      <Videosection/>
      <Easyandsecuresection/>
      <Pricingsection/>
      <Designer/>
      {/* <Testominal/> */}
      {/* <ControlledCarousel/> */}
      <Usechat/>
      <Multi/>
      
      
    
      
    
  </div>
  );
}

export default App;
