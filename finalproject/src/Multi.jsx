// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import React, { useState } from "react";

// export default function Multi() {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNextClick = () => {
//     if (currentIndex < 4) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrevClick = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="multi-carousel">
//       <Carousel
//         responsive={responsive}
//         customButtonGroup={<CustomButtonGroup currentIndex={currentIndex} />}
//         beforeChange={(previousSlide, { currentSlide }) =>
//           setCurrentIndex(currentSlide)
//         }
//       >
//         <div>Item 1</div>
//         <div>Item 2</div>
//         <div>Item 3</div>
//         <div>Item 4</div>
//         <div>Item 5</div>
//       </Carousel>
//     </div>
//   );
// }

// const CustomButtonGroup = ({ currentIndex }) => (
//   <div>
//     <button onClick={handlePrevClick} disabled={currentIndex === 0}>
//       Prev
//     </button>
//     <button onClick={handleNextClick} disabled={currentIndex === 4}>
//       Next
//     </button>
//   </div>
// );
