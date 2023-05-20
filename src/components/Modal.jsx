import React, { memo } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'



const Modal = () => {
    const dispatch = useDispatch()

    const closePopup = () => {
        dispatch(closeModal())
        dispatch(clearCart())
    }

    const { isOpen } = useSelector((store) => store.modal)
    if (!isOpen) {
        return (
            <aside className="modal-container">
                <div className="modal">
                    <h4>remove all items from your shopping cart</h4>
                    <div className="btn-container">
                        <button onClick={closePopup}
                            type="button" className="btn confirm-btn">confirm</button>
                        <button onClick={() => dispatch(closeModal())}
                            type="button" className="btn clear-btn">clear</button>
                    </div>
                </div>
            </aside>
        )
    }
}

export default memo(Modal)