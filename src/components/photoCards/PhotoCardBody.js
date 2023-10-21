import React from "react"

const PhotoCardBody = ({photos}) => {
    return (
        <div className="photo-body">
            {/* <h1>PhotoCardBody Component</h1> */}
            <h5>{photos[0].description}</h5>
        </div>
    )
}

export default PhotoCardBody

