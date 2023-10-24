import React from "react"
import PhotoCardImg from "./PhotoCardImg"

const PhotoCard = ({photos}) => {
    return (
        <div className="photo" >
            {/* <h1>PhotoCard Component</h1> */}
            <PhotoCardImg photos={photos} />
        </div>
    )
}

export default PhotoCard

