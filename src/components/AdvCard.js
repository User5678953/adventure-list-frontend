import React from "react"
import AdvCardBody from "./AdvCardBody"
import AdvCardImg from "./AdvCardImg"

const AdvCard = () => {
    return (
        <div className="adventure">
            <h1>Adventure Card Component</h1>
            <AdvCardBody />
            <AdvCardImg />
        </div>
    )
}

export default AdvCard