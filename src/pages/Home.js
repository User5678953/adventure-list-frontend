import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import MapBoard from '../components/MapBoard'


// Array of random pictures to test random image function
const randPic = [
    {
        src: 'https://www.rapturecamps.com/wp-content/uploads/2019/05/costa-rica-k%C3%BCste-t%C3%BCrkises-wasser-drohnenfoto.jpg',
        alt: 'Costa Rica Landscape'
    },
    {
        src: 'https://media.digitalnomads.world/wp-content/uploads/2021/02/20120635/tokyo-for-digital-nomads.jpg',
        alt: 'Tokyo Landscape'
    },
    {
        src: 'https://media.cntraveler.com/photos/63cad195484f5d86dc05cb34/16:9/w_2560%2Cc_limit/Red%2520Rock%2520Canyons%2520in%2520Zion_GettyImages-528284494.jpg',
        alt: 'Zion National Park Landscape'
    },
    {
        src: 'https://a.storyblok.com/f/53624/1600x900/f51e74d1de/nzl-5c3f585ab8e7d29716.jpg',
        alt: 'New Zealand Landscape'
    },
    {
        src: 'https://res.cloudinary.com/djcyhbk2e/image/upload/c_fit,f_auto,h_800,q_35,w_800/v1/gvv/prod/yp2b0ocwenuvu8jjv1zz',
        alt: 'Norway Landscape'
    }
] 

const Home = () => {
    const [randomImage, setRandomImage] = useState(Math.floor(Math.random() * randPic.length))

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (randomImage === randPic.length - 1) {
                setRandomImage(0)
            } else {
                setRandomImage(randomImage + 1)
            }
        }, 5000)

        return () => clearInterval(intervalID)
    }, [randomImage])

    return (
        <div>
            <Routes>
                <Route path='/register/login' element={
                    <Login /> 
                } />       
            </Routes>
            <h1>Home Page</h1>
            <div className="publicPhotos">
                <img src={randPic[randomImage].src} alt={randPic[randomImage].alt} />
            </div>
            <MapBoard />
        </div>
    )
}

export default Home