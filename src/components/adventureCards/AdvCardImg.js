import React from "react"

const AdvCardImg = ({tags, title}) => {
    return (
        <img 
            src={tags}
            className="adventure-card-img"
            alt={title}
        />
    )
}

export default AdvCardImg   