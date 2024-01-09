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
            <p className="hosting-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="55" height="56" fill="currentColor" class="bi bi-wikipedia" viewBox="0 0 16 16">
  <path d="M8.835 3.003c.828-.006 2.688 0 2.688 0l.033.03v.288q0 .12-.133.12c-.433.02-.522.063-.68.29-.087.126-.258.393-.435.694l-1.52 2.843-.043.089 1.858 3.801.113.031 2.926-6.946q.152-.42-.044-.595c-.132-.114-.224-.18-.563-.195l-.275-.014a.16.16 0 0 1-.096-.035.1.1 0 0 1-.046-.084v-.289l.042-.03h3.306l.034.03v.29q0 .117-.133.117-.65.03-.962.281a1.64 1.64 0 0 0-.488.704s-2.691 6.16-3.612 8.208c-.353.672-.7.61-1.004-.019A224 224 0 0 1 8.044 8.81c-.623 1.285-1.475 3.026-1.898 3.81-.411.715-.75.622-1.02.019-.45-1.065-1.131-2.519-1.817-3.982-.735-1.569-1.475-3.149-1.943-4.272-.167-.4-.293-.657-.412-.759q-.18-.15-.746-.18Q0 3.421 0 3.341v-.303l.034-.03c.615-.003 3.594 0 3.594 0l.034.03v.288q0 .119-.15.118l-.375.016q-.483.02-.483.288-.002.125.109.4c.72 1.753 3.207 6.998 3.207 6.998l.091.023 1.603-3.197-.32-.71L6.24 5.095s-.213-.433-.286-.577l-.098-.196c-.387-.77-.411-.82-.865-.88-.137-.017-.208-.035-.208-.102v-.304l.041-.03h2.853l.075.024v.303q0 .104-.15.104l-.206.03c-.523.04-.438.254-.09.946l1.057 2.163 1.17-2.332c.195-.427.155-.534.074-.633-.046-.055-.202-.144-.54-.158l-.133-.015a.16.16 0 0 1-.096-.034.1.1 0 0 1-.045-.085v-.288l.041-.03Z"/>
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
              <p className="hosting-icons"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-server" viewBox="0 0 16 16">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
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