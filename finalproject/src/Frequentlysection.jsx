import Accordion from 'react-bootstrap/Accordion';
export default function Frequently ()
{
    return(
        <div className="frequently-section">
            <div className="frequently-header">
            <span className="frequently-heading">FREQUENTLY ASKED QUESTIONS</span><br/>
                <hr className="frequently-line"></hr>
                <p className="frequently-paragraph">Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing <br/>incididunt. </p>
            </div>
            <div className="frequently-content">
                <div className="frequently-dropdowns">

    <Accordion  defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item  eventKey="0">
        <Accordion.Header ><span className='accordion-header'> 1. Sedeiusmod tempor inccsetetur aliquatraiy?</span> </Accordion.Header>
        <Accordion.Body className='accordion-paragarph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.nisi nostrum officia, illo.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <span className='accordion-header'>2. Lorem ipsum dolor, consectetur pisicing elit?</span></Accordion.Header>
        <Accordion.Body className='accordion-paragarph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.nisi nostrum officia, illo.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> <span className='accordion-header'>3. Tempor inccsetetur aliquatraiy?V</span></Accordion.Header>
        <Accordion.Body className='accordion-paragarph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.nisi nostrum officia, illo.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> <span className='accordion-header'>4. Consectetur adipisicing elit,eiusmod tempor?</span> </Accordion.Header>
        <Accordion.Body className='accordion-paragarph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.nisi nostrum officia, illo.
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion>
<p className='forappizenameandicon'></p>
                </div>
                <div className="frequently-images"></div>
            </div>

        </div>
    )
}