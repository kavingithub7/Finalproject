import Advancesection from "./Advancesection";
import Designer from "./Designer";
import Easyandsecuresection from "./Easyandsecuresection";
import Frequently from "./Frequentlysection";
import Headersection from "./Headersection";
import Homesection from "./Homesection";
import Letsblog from "./Letsblog";
import Pricingsection from "./Pricingsection";
import Specificationsection from "./Specificationsection";
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
        </>
    )
}