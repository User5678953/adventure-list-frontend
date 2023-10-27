import React from "react"
import AdvCardBody from "./AdvCardBody"
import AdvCardImg from "./AdvCardImg"

const AdvCard = ({id, tags, title, location, photos, selectAdventure}) => {

    return (
        <div className="adventure" onClick={() => selectAdventure(id)} >
            <AdvCardImg tags={tags} title={title} />
            <AdvCardBody title={title} location={location} />
        </div>
    )
}

export default AdvCard