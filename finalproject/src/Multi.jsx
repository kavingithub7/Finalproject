import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Multi()
{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }

    }
   const opacity=['0.5']
return(
    <div className="multi">
       <div className="screenshotheader">
                <span className="for-ss-header">APP SCREENSHOOTS</span><br/>
                <hr className="for-ss-line"></hr>
                </div>
<Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  currentslide={opacity}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
//   deviceType={this.props.deviceType}
  dotListClass={"custom-dot-list-style"}
  itemClass="carousel-item-padding-40-px"
>
 
 
  <div className="app-img-1"></div>
  <div className="app-img-2" ></div>
  <div className="app-img-3"></div>
  <div className="app-img-4"></div>
  <div className="app-img-5"></div>
  <div className="app-img-6" ></div>
  <div className="app-img-7"></div>
  <div className="app-img-8"></div>
  
</Carousel>

</div>
)
}

