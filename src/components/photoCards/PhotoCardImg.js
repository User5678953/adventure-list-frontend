import React from "react"

const PhotoCardImg = ({imageURL, description}) => {
    return (
        <img 
            src={imageURL}
            className="photo-card-img"
            alt={description}
        />
    )
}

export default PhotoCardImg

