import { useEffect, useState } from "react";
import image1 from './IMAGES/testimonial.png'
import image2 from './IMAGES/1.jpg'
export default function Usechat()


{
const [image ,setimage] = useState(image1);
function F1 () {
    setimage(image2)
}

     return(
        
        <div className="usechat" style={{border:"1px solid black",width:"50%",height:"200px"}}>
            <img  src={image}/>
            <button onClick={F1}> click to change</button>
            
        </div>
     )
}