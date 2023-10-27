import React from "react"
import AdvCardBody from "./AdvCardBody"
import AdvCardImg from "./AdvCardImg"

const AdvCard = ({id, coverPhoto, title, location, selectAdventure}) => {

    return (
        <div className="adventure" onClick={() => selectAdventure(id)} >
            <AdvCardImg title={title} coverPhoto={coverPhoto} />
            <AdvCardBody title={title} location={location} />
        </div>
    )
}

export default AdvCard