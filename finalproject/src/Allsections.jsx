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
import Screenshotsection from "./Screenshotsection";
import Specificationsection from "./Specificationsection";
import Testominal from "./Testominla";
import Videosection from "./Videosection";
import Whyisbestsection from "./Whyisbest";

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
        <Letsblog/>
        <Frequently/>
        <Screenshotsection/>
        <Joinusnow/>
        <FormExample/>
        <Footer/>
        <Multi/>
       <Testominal/>
        </>
    )
}