import React from "react"
import PhotoCard from "./photoCards/PhotoCard"

// IMPORT REACT-MULTI-CAROUSEL NPM PACKAGE
// Documentation: https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel
// NPM: https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

// IMPORT CARD STYLE
import "../styles/cards.scss"

// IMPORT TEST DATA
import advTestData from './adventureCards/TestAdvData'

const PhotosCarousel = () => {
    return (
        <div className="photo-carousel">
            <h1>Photos Carousel Component</h1>
            <div className="photos" style={{width: "18rem"}}>
                {advTestData.map((adventure) => {
                    return (<PhotoCard photos={adventure.photos} />)
                })}
            </div>
        </div>
    )
}

export default PhotosCarousel