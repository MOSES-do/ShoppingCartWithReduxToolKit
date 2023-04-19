import React, { useEffect, memo, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartItemsNo } from '../features/cart/cartSlice'
import { CartIcon } from '../icons'


const Navbar = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((store) => store.cart)

    const cartItemNo = useMemo(() => cartItems.map(cartItem => cartItem.amount).reduce((acc, cv,) => acc + cv, 0),
        [cartItems])

    useEffect(() => {
        dispatch(cartItemsNo(cartItemNo))
    }, [cartItemNo])


    return (
        <nav>
            <div className="nav-center">
                <h3>Redux Toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{cartItemNo}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default memo(Navbar)