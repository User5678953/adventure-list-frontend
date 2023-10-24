import React from "react"
import AdventureList from "../pages/AdventureList"
import PhotosCarousel from "./PhotosCarousel"

const UserUpperDiv = () => {
    return (
        <div className="user-upper-div">
            <h1>User Upper Div Component</h1>
            <AdventureList />
            <PhotosCarousel />
        </div>
    )
}

export default UserUpperDiv   