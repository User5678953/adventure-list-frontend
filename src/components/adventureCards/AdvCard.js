import React from "react"
import AdvCardBody from "./AdvCardBody"
import AdvCardImg from "./AdvCardImg"

const AdvCard = ({id, title, location, photos, selectAdventure}) => {

    return (
        <div className="adventure" onClick={() => selectAdventure(id)} >
            {/* <AdvCardImg photos={photos} /> */}
            <AdvCardBody title={title} location={location} />
        </div>
    )
}

export default AdvCard