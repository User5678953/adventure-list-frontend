import React from "react"
import PhotoCardImg from "./PhotoCardImg"
import PhotoCardBody from "./PhotoCardBody"

const PhotoCard = () => {
    return (
        <div className="photo">
            <h1>PhotoCard Component</h1>
            <PhotoCardImg />
            <PhotoCardBody />
        </div>
    )
}

export default PhotoCard

