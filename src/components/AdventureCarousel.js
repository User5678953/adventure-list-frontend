import React from "react"
import AdvCard from "./AdvCard"

// IMPORT TEST DATA
import advTestData from '../TestAdvData'

const AdventureCarousel = () => {
    return (
        <div className="adventure-carousel">
            {/* <h1>Adventure Carousel Component</h1> */}
            <div className="adventures">
                {advTestData.map((adventure, i) => {
                    return (<AdvCard {...adventure} key={i} />)
                })}
            </div>
        </div>
    )
}

export default AdventureCarousel