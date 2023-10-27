import React from "react"

const AdvCardImg = ({coverPhoto, tags, title}) => {
    return (
        <img 
            src={coverPhoto}
            className="adventure-card-img"
            alt={title}
        />
        // <img 
        //     src={tags}
        //     className="adventure-card-img"
        //     alt={title}
        // />
    )
}

export default AdvCardImg   