import React from "react"
import AdvCard from "./adventureCards/AdvCard"

// IMPORT STYLE
import "../styles/cards.scss"

// IMPORT TEST DATA
import advTestData from './adventureCards/TestAdvData'

const AdventureCarousel = () => {
    return (
        <div className="adventure-carousel">
            {/* <h1>Adventure Carousel Component</h1> */}
            <div className="adventures" style={{width: "18rem"}}>
                {advTestData.map((adventure, i) => {
                    return (<AdvCard {...adventure} key={i} />)
                })}
            </div>
        </div>
    )
}

export default AdventureCarousel