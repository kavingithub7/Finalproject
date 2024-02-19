
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Testominal()
{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        }
      };
      const responsive1= {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const dotListStyle = {
        marginTop: '170px', // Adjust this value based on your requirements
        // border:"1px solid red"
        display:"none"
      };

      
    
      
     return(
        <div className="testominal-scetion">
        <div>    <div className="testominal-header">
                <span className="testominal-header-line">TESTIMONIALS</span><br/>
                <hr className="testominal-line"></hr>
                <div className="testominal-content"><span className="testominal-paragarph-1">"Lorem ipsum dolor sit amet, consectetur Proin gravida nibh vel velit auctor aliquet.</span><span className="testominal-paragarph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla faci."</span>
                </div>
            </div>
            </div>
        <div></div>
            <div className="ds-container1">
            <Carousel
  swipeable={true}
  draggable={true}
  // showDots={true}
  responsive={responsive1}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  
>
  


     <div>
        <h1 className="emp-name">Helen</h1>
        <p className="emp-role">Marketer</p>
      </div>
      <div>
      <h1 className="emp-name">HENRY SMITH</h1>
      <p className="emp-role">Developre</p>
      </div>
      <div >
      <h1 className="emp-name">Aigras Silkalns</h1>
      <p className="emp-role">Ceo Colorlib</p>
      </div>
      <div>
      <h1 className="emp-name">Jennifer</h1>
      <p className="emp-role">Developer</p>
      </div>
      
  </Carousel>;
          </div>
            <div className="ds-container">
          <Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  // centerMode={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style-color-red"
  customDotListStyles={dotListStyle}
  itemClass="carousel-item-padding-40-px"
  
>
 
      <div className="ds-1">
        </div>
      <div className="ds-2">
       </div>
      <div className="ds-3">
       
      </div>
      <div className="ds-4">
      
      </div>
      <div className="ds-1"></div>
      <div className="ds-2"></div>
      <div className="ds-3"></div>
      <div className="ds-4"></div>
      <div className="ds-1"></div>
      <div className="ds-2"></div>
      <div className="ds-3"></div>
      <div className="ds-4"></div>
     
 
  </Carousel>;
  </div>
 
        </div>
     )
}