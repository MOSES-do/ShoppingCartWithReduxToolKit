import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { getCartItems } from './features/cart/cartSlice';
function App() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((store) => store.cart)

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
