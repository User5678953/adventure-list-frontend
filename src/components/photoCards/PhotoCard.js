import React from "react"
import PhotoCardImg from "./PhotoCardImg"
import PhotoCardBody from "./PhotoCardBody"

const PhotoCard = ({photos}) => {
    return (
        <div className="photo">
            {/* <h1>PhotoCard Component</h1> */}
            <PhotoCardImg photos={photos} />
            {/* <PhotoCardBody photos={photos} /> */}
        </div>
    )
}

export default PhotoCard

