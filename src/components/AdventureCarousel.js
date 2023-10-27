import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";

import AdvCard from "./adventureCards/AdvCard"

// IMPORT REACT-MULTI-CAROUSEL NPM PACKAGE
// Documentation: https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel
// NPM: https://www.npmjs.com/package/react-multi-carousel

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

// IMPORT CARD STYLE
import "../styles/cards.scss"

// Import backend Endpoint
const backendURL = process.env.REACT_APP_BACKEND_URL;

const AdventureCarousel = ({ selectAdventure }) => {

  // To render the adventures for the user
  const [adventure, setAdventure] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${backendURL}/adventureList`)
      // console.log('adventure list ' + data)
      setAdventure(data.data)
    }
    fetchData()
  }, [])

  // console.log(`Current state of Adventure on the AdvCarousel: ${adventure}`)

  return (
    <>
      <div className="adventure-carousel">
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
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
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
                  description={advent.description}
                  coverPhoto={advent.coverPhoto}
                  tags={advent.tags}
                  id={advent._id}
                  location={advent.location}
                  owner={advent.owner}
                  photos={advent.photos}
                  title={advent.title}
                  selectAdventure={selectAdventure}
                />
              )
            })
          }
        </Carousel>
      </div>
    </>
  );
};

export default AdventureCarousel;
