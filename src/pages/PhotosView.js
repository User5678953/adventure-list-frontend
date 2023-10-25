
import { useEffect, useState } from 'react'
import React from 'react'

//random pictures to test random image function
const randPic = [
  {
    src: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
    alt: "Spain Landscape",
  },
]; 

const PhotosView = () => {
  // image changer functionality from:
  // https://stackoverflow.com/questions/67243653/how-can-i-have-an-image-that-changes-every-5-seconds-in-react-js
  const [randomImage, setRandomImage] = useState(
    Math.floor(Math.random() * randPic.length)
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (randomImage === randPic.length - 1) {
        setRandomImage(0);
      } else {
        setRandomImage(randomImage + 1);
      }
    }, 5000);

    return () => clearInterval(intervalID);
  }, [randomImage]);

  return (
    <div className="photosDiv">
      <div className="publicPhotos">
        <img
          className="photosDivImg"
          src={randPic[randomImage].src}
          alt={randPic[randomImage].alt}
        />
      </div>
    </div>
  );
};
export default PhotosView