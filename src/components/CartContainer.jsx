import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, totalCartPrice } from '../features/cart/cartSlice'
import CartItem from './CartItem'


const CartContainer = () => {

    const dispatch = useDispatch()

    const { cartItems, amount } = useSelector((store) => store.cart);

    const totalCart = cartItems.map(cartItem => Math.round(cartItem.price)).reduce((acc, cv, index) => acc + cv);

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
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total <span>${(totalCart)}</span></h4>
                </div>
                <button onClick={() => dispatch(clearCart())} className="btn clear-btn">clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer