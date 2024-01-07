import { useState } from 'react';

function ImageComponent() {
  const [imageSource, setImageSource] = useState('./IMAGES/1.png'); // Initial image source

  // Function to change the image source
  const changeImage = () => {
    // Update the image source based on some condition or event
    setImageSource('./IMAGES/2.jpg');
  };

  return (
    <div>
      <img src={imageSource} alt="Dynamic Image" />
      <button onClick={changeImage}>Change Image</button>
    </div>
  );
}

export default ImageComponent;