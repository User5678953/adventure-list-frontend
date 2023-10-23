import React from "react"
import AdvCardBody from "./AdvCardBody"
import AdvCardImg from "./AdvCardImg"

const AdvCard = ({title, location, photos}) => {
    return (
        <div className="adventure">
            {/* <h1>Adventure Card Component</h1> */}
            {/* <AdvCardImg photos={photos} /> */}
            <AdvCardBody title={title} location={location} />
        </div>
    )
}

export default AdvCard