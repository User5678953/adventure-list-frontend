import React from "react"

const AdvCardBody = ({title, location}) => {
    return (
        <div className="adventure-body">
            {/* <h1>Adventure Card Body Component</h1> */}
            <h4>{title}</h4>
            <h4>{location}</h4>
        </div>
    )
}

export default AdvCardBody