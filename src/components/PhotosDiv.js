import { useEffect, useState } from 'react'

// Array of random pictures to test random image function
const randPic = [
    {
        src: 'https://images.unsplash.com/photo-1599738139470-a29edf66a021?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2940',
        alt: 'Spain Landscape'
    },
    {
        src: 'https://images.unsplash.com/photo-1491488884926-6ab2ffc1c629?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2500',
        alt: 'Iceland Landscape'
    },
    {
        src: 'https://images.unsplash.com/photo-1642706629725-25b01ab2eabb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2940',
        alt: 'Netherlands Landscape'
    },
    {
        src: 'https://images.unsplash.com/photo-1612179124106-8df97d6cafe1?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2938',
        alt: 'Romania Landscape'
    },
    {
        src: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2940',
        alt: 'Japan Landscape'
    },
    {
        src: 'https://images.unsplash.com/photo-1490782300182-697b80ad4293?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=3027',
        alt: 'Chile Landscape'
    },
    {
        src: 'https://images.unsplash.com/photo-1548296404-93c7694b2f91?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2940',
        alt: 'Australia Landscape'
    }
] 

const PhotosDiv = () => {
    // image changer functionality from: 
    // https://stackoverflow.com/questions/67243653/how-can-i-have-an-image-that-changes-every-5-seconds-in-react-js
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
        <div className='photosDiv'>
            <div className="publicPhotos">
                <img className="photosDivImg" src={randPic[randomImage].src} alt={randPic[randomImage].alt} />
            </div>
        </div>
    )
}

export default PhotosDiv