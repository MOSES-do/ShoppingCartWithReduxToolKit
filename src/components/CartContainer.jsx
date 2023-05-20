import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { totalCartPrice, clearCart } from '../features/cart/cartSlice'
import { openModal } from '../features/modal/modalSlice'

import CartItem from './CartItem'


const CartContainer = () => {

    const dispatch = useDispatch()

    const { cartItems, amount } = useSelector((store) => store.cart);

    const totalCart = cartItems.map(cartItem => (cartItem.price) * cartItem.amount).reduce((acc, cv, index) => acc + cv, 0)

    useEffect(() => {
        dispatch(totalCartPrice(totalCart))
    }, [totalCart])



    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>Your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className="cart">
            <header>
                <h2>Your bag</h2>
            </header>
            <div>
                {
                    cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })
                }
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total <span>${(totalCart).toFixed(2)}</span></h4>
                </div>
                <button onClick={() => dispatch(openModal())} className="btn clear-btn">clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer