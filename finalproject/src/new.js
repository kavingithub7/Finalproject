import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./Testominal.css"; // Assuming you have a separate CSS file

export default function Testominal1() {
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
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const responsive1 = {
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
    marginTop: '170px',
    display: 'none'
  };

  return (
    <div className="testominal-scetion">
      <div>
        <div className="testominal-header">
          <span className="testominal-header-line">TESTIMONIALS</span><br />
          <hr className="testominal-line"></hr>
          <div className="testominal-content">
            <span className="testominal-paragarph-1">
              "Lorem ipsum dolor sit amet, consectetur Proin gravida nibh vel velit auctor aliquet.
            </span>
            <span className="testominal-paragarph-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla faci."
            </span>
          </div>
        </div>
      </div>
      <div></div>
      <div className="ds-container1">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive1}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          renderButtonGroupOutside={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-carousel-arrow prev-arrow"
              >
                Previous
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-carousel-arrow next-arrow"
              >
                Next
              </button>
            )
          }
        >
          {/* ... (your carousel items) */}
        </Carousel>
      </div>
      <div className="ds-container">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style-color-red"
          customDotListStyles={dotListStyle}
          itemClass="carousel-item-padding-40-px"
          renderButtonGroupOutside={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-carousel-arrow prev-arrow"
              >
                Previous
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-carousel-arrow next-arrow"
              >
                Next
              </button>
            )
          }
        >
          {/* ... (your carousel items) */}
        </Carousel>
      </div>
    </div>
  );
}
