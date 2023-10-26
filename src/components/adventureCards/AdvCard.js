import React from "react"
import { useState } from "react"
import AdvCardBody from "./AdvCardBody"
import AdvCardImg from "./AdvCardImg"

const AdvCard = ({id, title, location, photos, selectAdventure}) => {

    // const [adventureClick, setAdventureClick] = useState(null)

    // console.log(adventureClick)

    return (
        <div className="adventure" onClick={() => selectAdventure(id)} >
            {/* <h1>Adventure Card Component</h1> */}
            {/* <AdvCardImg photos={photos} /> */}
            <AdvCardBody title={title} location={location} />
        </div>
    )
}

export default AdvCard