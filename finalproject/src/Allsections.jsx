import Advancesection from "./Advancesection";
import Designer from "./Designer";
import Easyandsecuresection from "./Easyandsecuresection";
import Footer from "./Footersection";
import FormExample from "./Formsection";
import Frequently from "./Frequentlysection";
import Headersection from "./Headersection";
import Homesection from "./Homesection";
import Joinusnow from "./Join";
import Letsblog from "./Letsblog";
import Multi from "./Multi";
import Pricingsection from "./Pricingsection";
import Specificationsection from "./Specificationsection";
import Testominal from "./Testominla";
import Videosection from "./Videosection";
import Whyisbestsection from "./Whyisbest";
import Testominal1 from "./new";

export default function Allsection()
{
    return(
        <>
        <Headersection/>
        <Homesection/>
        <Specificationsection/>
        <Advancesection/>
        <Whyisbestsection/>
        <Videosection/>
        <Easyandsecuresection/>
        <Pricingsection/>
        <Designer/>
        <Testominal/>
        <Letsblog/>
        <Frequently/>
        <Multi/>
        {/* <Screenshotsection/> */}
        <Joinusnow/>
        <FormExample/>
         <Footer/> 
     
    
        </>
    )
}