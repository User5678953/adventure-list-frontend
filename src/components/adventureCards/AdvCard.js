import React from "react"
import { useState } from "react"
import AdvCardBody from "./AdvCardBody"
import AdvCardImg from "./AdvCardImg"

const AdvCard = ({_id, title, location, photos}) => {

    const [adventureClick, setAdventureClick] = useState(null)

    console.log(adventureClick)

    return (
        <div className="adventure" onClick={() => setAdventureClick(_id)} >
            {/* <h1>Adventure Card Component</h1> */}
            <AdvCardImg photos={photos} />
            <AdvCardBody title={title} location={location} />
        </div>
    )
}

export default AdvCard