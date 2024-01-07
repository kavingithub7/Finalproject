import { Link } from "react-router-dom";

export default function Letsblog()
{
    return(
        <div className="lestblog-section">
            <div className="letsblog-header">
            <span className="letsblog-heaederlin">LATEST BLOGS</span><br/>
                <hr className="letsblog-line"></hr>
            </div>
            <div className="letsblog-cards">
                <div className="lestblogcard-1">
                    <div className="cards-image1"></div>
                    <div className="cards-header">
                        <h5 className="cards-headercontent">How often should you tweet?</h5>
                       <p className="cards-line1">Lorem ipsum dolor sit amet, consectetur</p>
                       <p className="cards-line2">adipisicing elit, sed do eiusmod tempor</p>
                       <p className="cards-line3">incididunt ut labore et dolore magna aliqua...</p>
                       <span className="card1-date"> on Mar 23, 2018</span> <span  className="card1-commands"> 24 Comments </span>
                       <button className="card-button"> Read More</button>

                     
                    </div>

                </div>
                <div className="lestblogcard-2">
                <div className="cards-image2"></div>
                    <div className="cards-header">
                        <h5 className="cards-headercontent">Content is still king</h5>
                       <p className="cards-line1">Lorem ipsum dolor sit amet, consectetur</p>
                       <p className="cards-line2">adipisicing elit, sed do eiusmod tempor</p>
                       <p className="cards-line3">incididunt ut labore et dolore magna aliqua...</p>
                       <span className="card1-date"> on Mar 29, 2018</span> <span  className="card1-commands"> 24 Comments </span>
                       <button className="card-button"> Read More</button>

                     
                    </div>
                </div>
                <div className="lestblogcard-3">
                <div className="cards-image3"></div>
                    <div className="cards-header">
                        <h5 className="cards-headercontent">Social media at work</h5>
                       <p className="cards-line1">Lorem ipsum dolor sit amet, consectetur</p>
                       <p className="cards-line2">adipisicing elit, sed do eiusmod tempor</p>
                       <p className="cards-line3">incididunt ut labore et dolore magna aliqua...</p>
                       <span className="card1-date"> on Mar 21, 2018</span> <span  className="card1-commands"> 24 Comments </span>
                       <button className="card-button"> Read More</button>

                     
                    </div>
                </div>
            </div>

        </div>
    )
}