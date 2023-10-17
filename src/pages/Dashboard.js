import { Route, Routes } from "react-router-dom"
import AdventureCarousel from "../components/AdventureCarousel"
import PhotosDiv from "../components/PhotosDiv"

const Dashboard = () => {
    return (
        <div className="dashboardPage">
            <h1>Dashboard Page</h1>
            <PhotosDiv />
            <AdventureCarousel />
        </div>
    )
}

export default Dashboard