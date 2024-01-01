import {useState } from "react"
export default function Pricingsection()
{  
  const[price,setprice] = useState("$20/mo.")

  const Monthly =()=>{
   setprice("$20/mo.")
}
const Yearly=()=>{
  setprice("$216/yr.")
}
  
    return (
        <div className="Pricingsection">
          <div className="pricing-header">
         
                <span className="forpricing-header">PRICING PLAN</span><br/>
                <hr className="forpricing-line"></hr>
                <span className="forpricing-paragarph">Pick the hosting plan that suits your need, but remember more is always better!</span><br/>
                <button onClick={Monthly} className="button-monthly">Monthly</button >  <button onClick={Yearly} className="button-yearly">Yearly</button>
               </div>
          <div className="pricing-content">
            <div className="managedwrodpress">
              <p className="wordpress-header">Managed Wordpress</p>
              <hr className="wordpress-line"></hr>
              <p className="wordpress-price"> {price}</p>
              <div className="wordpress-list">
              <ol className="list">
                <li>WordPress Optimized</li>
                <li>Automatic Core Updates</li>
                <li>2 Sites</li>
                <li>250,000 Monthly Visitors</li>
                </ol> 
                </div>   
                <button className="startbuilding-button">START BUILDING</button>         
            </div>
            <div className="sharedhosting">
            <p className="wordpress-header">Shared Hosting</p>
              <hr className="sharedhosting-line"></hr>
              <p className="wordpress-price"> {price}</p>
              <div className="wordpress-list">
              <ol className="list">
                <li>Fast, All-SSD Storage</li>
                <li>Reliable Architecture</li>
                <li>100 Sites</li>
                <li>1TB Scalable Bandwidth</li>
                </ol> 
                </div>   
                <button className="startbuilding-button">START BUILDING</button>         
            </div>
            <div className="vpshosting">
            <p className="wordpress-header">VPS Hosting</p>
              <hr className="vpshosting-line"></hr>
              <p className="wordpress-price"> {price}</p>
              <div className="wordpress-list">
              <ol className="list">
                <li>Scalable Resources</li>
                <li>Root Access</li>
                <li>Command Line</li>
                <li>Ubuntu, Debian, or CentOS</li>
                </ol> 
                </div>   
                <button className="startbuilding-button">START BUILDING</button>         
            </div>
          </div>
        </div>
    )
} 