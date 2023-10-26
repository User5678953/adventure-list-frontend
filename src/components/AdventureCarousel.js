import React from "react"
import AdvCard from "./adventureCards/AdvCard"
import { useEffect, useState } from "react";

// IMPORT REACT-MULTI-CAROUSEL NPM PACKAGE
// Documentation: https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel
// NPM: https://www.npmjs.com/package/react-multi-carousel

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

// IMPORT TEST DATA
import advTestData from './adventureCards/TestAdvData'

// IMPORT CARD STYLE
import "../styles/cards.scss"
import axios from "axios";

// Import backend Endpoint
const backendURL = process.env.REACT_APP_BACKEND_URL;

/**
 * Need to create a fetch request to backend API to GET all adventures and display as individual cards.
 * 1) GET request
 * 2) MAP the data into the function
 * 
 */
const AdventureCarousel = () => {

  // To render the adventures for the user
  const [adventure, setAdventure] = useState([])
  // To transfer data when selecting the adventure in the carousel
  const [clickAdventure, setClickAdventure] = useState('Select or create an adventure.')

  const selectAdventure = (clickAdventure) => {
    setClickAdventure(clickAdventure)
  }

  console.log(clickAdventure)

  useEffect(()=> {
    const fetchData = async () => {
      const data = await axios.get(`${backendURL}/adventureList`)
      console.log('adventure list ' + data)
      setAdventure(data.data)
    }
    fetchData()
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

          {
            adventure?.map((advent) => {
              return (
              <AdvCard 
                title={advent.title}
                description={advent.description}
                location={advent.location}
                owner={advent.owner}
                selectAdventure={selectAdventure}
                />
              )
              })
          }

          {/* use 'advTestData' for local test dataset */}
          {/* {advTestData.map((adventure, i) => {
            return (<AdvCard {...adventure} key={i} selectAdventure={selectAdventure} />)
          })} */}

        </Carousel>
      </div>
    </>
  );
};

export default AdventureCarousel;
