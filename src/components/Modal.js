// modal code inspired from: 
// https://dev.to/devmdmamun/create-contextual-modal-navigation-with-react-router-v6-28k2
// https://www.youtube.com/watch?v=9DwGahSqcEc


/**
 * Modal Component
 * 
 * This component is used to display a modal overlay on the screen. 
 * It takes in two props:
 * - children: Components or elements to be displayed inside the modal.
 * - onClose: A callback function that gets triggered when the close button of 
 *   the modal is clicked.
 * 
 * The modal is designed to be flexible, allowing any component passed as 
 * `children` to be displayed inside.
 */

import { useNavigate } from "react-router-dom"
import React from "react";

const Modal = ({ children, onClose }) => {

    const navigate = useNavigate()

    return (
      <div className="modalDiv">
        <div className="modal">
          <button
            className="close-button"
            onClick={() => {
              console.log("Close button clicked");
              onClose();
            }}
          > X </button>
          {children}
        </div>
      </div>
    );
}

export default Modal