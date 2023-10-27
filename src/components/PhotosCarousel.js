import React from "react"
import { useEffect, useState } from "react";
import PhotoCardImg from "./PhotoCardImg"

// IMPORT REACT-MULTI-CAROUSEL NPM PACKAGE
// Documentation: https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel
// NPM: https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

// IMPORT CARD STYLE
import "../styles/cards.scss"

// IMPORT TEST DATA
import advTestData from '../data/TestAdvData'

// Import backend Endpoint
const backendURL = process.env.REACT_APP_BACKEND_URL;
// console.log("Backend URL:", backendURL);

const PhotosCarousel = ({ id }) => {
    const [adventure, setAdventure] = useState('');

    // fetch request
    useEffect(() => {
        if (id) {
            fetch(`${backendURL}/adventureList/${id}`)
                .then((response) => response.json())
                .then((data) => setAdventure(data))
                .catch((error) =>
                    console.error("Error fetching adventure data:", error)
                );
        }
    }, [id]);
    console.log(adventure)

    return (
        <div className="photo-carousel"><img
            src={adventure.tags} // tags is used to pull in coverPhoto URL
            className="photo-card-img"
            alt={adventure.title}
        />

            {/* <Carousel
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
                        items: 1,
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
                        items: 1,
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

                {advTestData[2].photos.map((photos, i) => {
                    return (<PhotoCardImg {...photos} key={i} />)
                })}

            </Carousel> */}
        </div>
    )
}

export default PhotosCarousel