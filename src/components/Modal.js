// modal code inspired from: 
// https://dev.to/devmdmamun/create-contextual-modal-navigation-with-react-router-v6-28k2
// https://www.youtube.com/watch?v=9DwGahSqcEc

import { useNavigate } from "react-router-dom"
import Login from "../pages/Login"

const Modal = () => {

    const navigate = useNavigate()

    return (
        <div className="modalDiv">
            <div className="modal">
                <button className="close-button" onClick={() => navigate(-1)}> X </button>
                <h1>Modal Component</h1>
                {/* <Login /> */}
            </div>
        </div>
    )
}

export default Modal