import React from "react"
import PhotoCard from "./photoCards/PhotoCard"

// IMPORT STYLE
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