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
            <p className="hosting-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="55" height="56" fill="currentColor" class="bi-wp-icon" viewBox="0 0 16 16">
  <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218q.03 0 .058.003l.031.003A6.84 6.84 0 0 0 8 1.137 6.86 6.86 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.86 6.86 0 0 0 3.868 6.176L1.73 5.206A6.8 6.8 0 0 0 1.137 8"/>
  <path d="M6.061 14.583 8.121 8.6l2.109 5.78q.02.05.049.094a6.85 6.85 0 0 1-4.218.109m7.96-9.876q.046.328.047.706c0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/>
  <path fill-rule="evenodd" d="M0 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.59 8-8 8-8-3.589-8-8m.367 0c0 4.209 3.424 7.633 7.633 7.633S15.632 12.209 15.632 8C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8"/>
</svg></p>
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
              <p className="hosting-icons"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi-sh-icon" viewBox="0 0 16 16">
  <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4z"/>
  <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.5 6.5 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8s-3.809-.317-5.208-.876a6.5 6.5 0 0 1-1.458-.79z"/>
  <path d="M14.667 11.668a6.5 6.5 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.5 6.5 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667z"/>
</svg></p>
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
        <p className="hosting-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi-vip-icon" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
        </p>
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