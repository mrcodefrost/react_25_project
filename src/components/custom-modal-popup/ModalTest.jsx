import { useState } from "react";
import Modal from "./Modal";

export default function ModalTest() {
    
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    return <div>
        <button onClick={handleToggleModalPopup} >Open Modal Popup</button>
        {

            // if showModalPopup is true then show Modal
            showModalPopup && <Modal />
        }
    </div>

}