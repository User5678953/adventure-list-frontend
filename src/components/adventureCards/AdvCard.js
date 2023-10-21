import React from "react"
import AdvCardBody from "./AdvCardBody"
import AdvCardImg from "./AdvCardImg"

// // IMPORT STYLE
// import "../styles/cards.scss"

const AdvCard = ({title, location, photos}) => {
    return (
        <div className="adventure">
            {/* <h1>Adventure Card Component</h1> */}
            <AdvCardImg photos={photos} />
            <AdvCardBody title={title} location={location} />
        </div>
    )
}

export default AdvCard