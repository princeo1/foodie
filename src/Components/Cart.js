import {useSelector} from "react-redux";
import Dish from "./Dish.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="flex justify-center">
            <div className="w-8/12 flex flex-col">
                <h1 className="text-center text-4xl text-bold ">Here are your cart items</h1>
                <button 
                onClick={handleClearCart}
                className="ml-[40%] my-4 p-2 w-[20%] bg-black text-white hover:bg-red-500 rounded-2xl">Clear Cart</button>
                {cartItems.length === 0 && <div className="text-center text-red-400 text-5xl">Cart is empty.Add items in your cart !</div>}
            {
                cartItems.map((cart)=>{
                     return <Dish className="border-b-gray-300" name={cart?.name} price={cart?.price} description={cart?.description} imageLink={cart?.imageLink}/>
                })
            }
            </div>
        </div>
    )
}

export default Cart;