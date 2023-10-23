import React from "react"
import AdvCard from "./adventureCards/AdvCard"
import { useEffect, useState } from "react";
import PhotoUploadForm from "./AddPhotosForm";
import Modal from "./Modal";

// IMPORT REACT-MULTI-CAROUSEL NPM PACKAGE
// Documentation: https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel
// NPM: https://www.npmjs.com/package/react-multi-carousel

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

// IMPORT TEST DATA
import advTestData from './adventureCards/TestAdvData'

// IMPORT STYLE
import "../styles/cards.scss"

// Import backend Endpoint
const backendURL = process.env.REACT_APP_BACKEND_URL;


/**
 * Need to create a fetch request to backend API to GET all adventures and display as individual cards.
 * 1) GET request
 * 2) MAP the data into the function
 * 
 */
const AdventureCarousel = () => {



  
{/* Upload Photo button needs to be moved into the view adventure modal */}
  // state for photo Upload
  const [showUploadModal, setShowUploadModal] = useState(false);






  const [adventure, setAdventure] = useState([])

  const getAdventure = async () => {
    const response = await fetch(`${backendURL}/adventureList`)
    const data = await response.json()
    setAdventure(data)
  }

  useEffect(() => {
    getAdventure()
  }, [])

  console.log(adventure)

  return (
    <>
      <div className="adventure-carousel">
        {/* <h1>Adventure Carousel Component</h1> */}
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >

          {/* <div className="adventures" style={{ width: "18rem" }}> */}
          {/* use 'adventure' for live data */}
          {/* {adventure.map((adventure, i) => {
              return (<AdvCard {...adventure} key={i} />)
            })} */}

          {/* use 'advTestData' for local test dataset */}
          {advTestData.map((adventure, i) => {
            return (<AdvCard {...adventure} key={i} />)
          })}
          {/* </div> */}
        </Carousel>
      </div>





{/* Upload Photo button needs to be moved into the view adventure modal */}

      <div>
        {/* Button to trigger photo upload modal */}
        <button onClick={() => setShowUploadModal(true)}>Upload Photo</button>

        {/* Conditional rendering of the modal with PhotoUploadForm */}
        {showUploadModal && (
          <Modal onClose={() => setShowUploadModal(false)}>
            <PhotoUploadForm />
          </Modal>
        )}
      </div>
    </>
  );
};

export default AdventureCarousel;
